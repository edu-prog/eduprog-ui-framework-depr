<template>
  <div class="collapse">
    <div
      class="collapse-target"
      @click="
        $emit('click');
        isActive = !isActive;
      "
    >
      <slot name="target" />
    </div>

    <transition appear :name="transition">
      <div v-show="isActive" class="collapse-content">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    transition: {
      type: String,
      default: "fade",
      validator: (value: string): boolean => {
        return ["fade", "slide"].includes(value);
      },
    },
  },
  setup() {
    const isActive = ref(false);
    return { isActive };
  },
  emits: ["click"],
});
</script>

<style lang="scss" scoped>
.collapse {
  &-target {
    display: inline-block;
    cursor: pointer;
  }

  &-content {
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-from,
.slide-leave-from {
  max-height: 0%;
}

.slide-enter-to,
.slide-leave-to {
  max-height: 100%;
}
</style>
