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

    <transition appear name="fade">
      <div v-show="isActive" class="collapse-content">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
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
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
