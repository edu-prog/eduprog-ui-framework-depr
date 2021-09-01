<template>
  <div class="collapse">
    <div class="collapse-target" @click="$emit('click'); isActive = !isActive">
      <slot name="target"/>
    </div>

    <transition appear name="fade">
      <div v-show="isActive" class="collapse-content">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  data() {
    return {
      isActive: false,
    }
  }
}
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