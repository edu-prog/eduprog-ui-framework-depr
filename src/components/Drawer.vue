<template>
  <div class="drawer">
    <div class="drawer-toggle" @click="onClick">
      <slot name="toggle"></slot>
    </div>

    <div v-if="isActive" class="drawer">
      <div class="drawer-wrapper" @touchend="OnSwipeEnd" @touchstart="OnSwipeStart">
        <transition appear name="slide">
          <div :style="{transform: translate}" class="drawer-content">
            <div class="drawer-control"></div>

            <slot name="content"></slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {NuxtHammer} from "nuxt-hammer/index";

export default {
  directives: {
    NuxtHammer,
  },
  data() {
    return {
      isActive: false,
      translate: "translate(-50%, -100%)",
      currentHeight: 0,
    }
  },
  methods: {
    onClick() {
      this.isActive = !this.isActive;

      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    },
    OnSwipeStart(event) {
      this.currentHeight = event.touches[0].clientY
    },
    OnSwipeEnd(event) {
      const height = event.changedTouches[0].clientY - this.currentHeight;
      this.translate = `translate(-50%, ${-1 * height / 100}%)`
      if (height < -300) {
        this.onClick()
      }

      console.log(height)
    }
  }
}
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