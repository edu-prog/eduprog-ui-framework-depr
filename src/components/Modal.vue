<template>
  <div class="modal">
    <div class="modal-toggle" @click="onToggleClicked">
      <slot name="toggle"></slot>
    </div>

    <transition appear name="fade">
      <div
          v-if="isActive"
          :class="['modal-wrapper', scrollable && 'modal-scrollable']"
          @click="onModalClickedAway"
      ></div>
    </transition>

    <transition appear name="pop">
      <div
          v-if="isActive"
          :class="[
          'modal-body',
          fullscreen && 'modal-body-fullscreen',
          fluid && 'modal-body-fluid',
          size && `modal-body-${size}`
        ]"
          role="dialog"
      >
        <div class="modal-header">
          <slot name="modal-header"></slot>
        </div>

        <div class="modal-content">
          <slot name="modal-content"></slot>
        </div>

        <div class="modal-footer">
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    fullscreen: {
      type: Boolean,
      required: false,
      default: false,
    },
    fluid: {
      type: Boolean,
      require: false,
      default: false,
    },
    scrollable: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: "m",
    }
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onToggleClicked() {
      this.isActive = !this.isActive;
    },
    onModalClickedAway() {
      this.isActive = false;
    },
  },
  watch: {
    active() {
      document.body.style.overflow = (this.isActive && this.scrollable) ? 'hidden' : '';
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  &-toggle {
    display: inline-block;
  }

  &-wrapper {
    background-color: rgba(50, 50, 50, 0.5);
    height: 100%;
    width: 100%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  &-body {
    display: flex;
    max-width: 600px;
    position: fixed;
    justify-content: space-between;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background-color: #ffffff;
    flex-direction: column;
    transition: all 0.2s ease-in-out;
    z-index: 101;
    padding: 1rem;
    border-radius: 0.5rem;

    &-fluid {
      max-width: 95vh;
      width: 100%;
      max-height: 95vh;
      height: 100%;
    }

    &-fullscreen {
      max-width: 100vh;
      width: 100%;
      max-height: 100vh;
      height: 100%;
    }

    &-scrollable {
      overflow-x: hidden;
      overflow-y: auto;
    }

    &-s {
      max-width: 300px;
    }

    &-m {
      max-width: 500px;
    }

    &-l {
      max-width: 800px;
    }

    &-xl {
      max-width: 1140px;
    }
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

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s ease;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translate(-100%, -100%);
}
</style>