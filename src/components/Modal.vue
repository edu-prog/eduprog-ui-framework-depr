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
          size && `modal-body-${size}`,
          scrollable && 'modal-body-scrollable',
        ]"
          role="dialog"
      >
        <div class="modal-header">
          <slot name="modal-header">
            <button class='modal-header-close-btn' @click='closeModal'>
              <svg fill='none' height='16' viewBox='0 0 14 14' width='16' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M8.41 7L12.71 2.71C12.8983 2.5217 13.0041 2.2663 13.0041 2C13.0041 1.7337 12.8983 1.47831 12.71 1.29C12.5217 1.1017 12.2663 0.995911 12 0.995911C11.7337 0.995911 11.4783 1.1017 11.29 1.29L7 5.59L2.71 1.29C2.5217 1.1017 2.2663 0.995911 2 0.995911C1.7337 0.995911 1.4783 1.1017 1.29 1.29C1.1017 1.47831 0.995908 1.7337 0.995908 2C0.995908 2.2663 1.1017 2.5217 1.29 2.71L5.59 7L1.29 11.29C1.19627 11.383 1.12188 11.4936 1.07111 11.6154C1.02034 11.7373 0.994202 11.868 0.994202 12C0.994202 12.132 1.02034 12.2627 1.07111 12.3846C1.12188 12.5064 1.19627 12.617 1.29 12.71C1.38296 12.8037 1.49356 12.8781 1.61542 12.9289C1.73728 12.9797 1.86799 13.0058 2 13.0058C2.13201 13.0058 2.26272 12.9797 2.38458 12.9289C2.50644 12.8781 2.61704 12.8037 2.71 12.71L7 8.41L11.29 12.71C11.383 12.8037 11.4936 12.8781 11.6154 12.9289C11.7373 12.9797 11.868 13.0058 12 13.0058C12.132 13.0058 12.2627 12.9797 12.3846 12.9289C12.5064 12.8781 12.617 12.8037 12.71 12.71C12.8037 12.617 12.8781 12.5064 12.9289 12.3846C12.9797 12.2627 13.0058 12.132 13.0058 12C13.0058 11.868 12.9797 11.7373 12.9289 11.6154C12.8781 11.4936 12.8037 11.383 12.71 11.29L8.41 7Z'
                    fill='#606060'/>
              </svg>
            </button>
          </slot>
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
    closeModal() {
      this.isActive = false;
    },
    onModalClickedAway() {
      this.closeModal();
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
@import "../assets/styles/global";

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

  &-header {
    &-close-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      background-color: $color-white;
      outline: none;
      border: none;
      cursor: pointer;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;

      &:hover {
        background-color: $color-platinum;
      }
    }
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

    @media #{$small-and-down} {
      width: 300px;
      height: 80vh;
      transform: translate(-50%, -46%);
    }

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
      .modal-content {
        overflow-x: hidden;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 0.25rem;
          height: 0.25rem;
        }

        &::-webkit-scrollbar-thumb {
          background-color: $color-gray;
          border-radius: 0.5rem;
        }
      }
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