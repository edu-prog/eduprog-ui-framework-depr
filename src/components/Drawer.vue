<template>
  <div class="drawer">
    <div class="drawer-toggle" @click="onClick">
      <slot name="toggle"></slot>
    </div>

    <div v-if="isActive" class="drawer">
      <div
        class="drawer-wrapper"
        @touchmove="OnSwipeMove"
        @touchstart="OnSwipeStart"
      >
        <transition appear name="slide">
          <div
            :style="{ transform: `translate(-50%, ${process}%)` }"
            class="drawer-content"
          >
            <div class="drawer-control"></div>

            <slot name="content"></slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isActive: false,
      process: 0,
      currentHeight: 0,
    };
  },
  methods: {
    onClick() {
      this.isActive = !this.isActive;

      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    },
    OnSwipeStart(event) {
      this.currentHeight = event.touchpo;
    },
    OnSwipeMove(event) {
      const height = event.changedTouches[0].clientY - this.currentHeight;

      if (height > 20) {
        const currentViewPort = document.body.offsetHeight;

        if (Math.abs(height) <= 100) {
          this.process += ((height / currentViewPort) * 100) % 100;
        } else if (height > 100) {
          this.onClick();
        }
        console.log(height, currentViewPort);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.drawer {
  height: 100%;
  width: 100%;

  &-wrapper {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &-content {
    z-index: 9999999;
    position: fixed;
    background: $color-white;
    bottom: 0;
    max-width: $small-screen;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.25s ease;
    border-radius: 1rem 1rem 0 0;
    padding: 1.25rem;
  }

  &-control {
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: $color-white;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.5rem;
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}

.slide-enter {
  transform: translate(-50%, 100%) !important;
}

.slide-leave-to {
  transform: translate(-50%, -100%) !important;
}
</style>
