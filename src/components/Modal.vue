<template>
  <div class="modal">
    <div v-on-clickaway="onModalClickedAway" class="modal-toggle" @click="onToggleClicked">
      <slot name="toggle"></slot>
    </div>

    <div v-if="isActive" class="modal-wrapper">
      <transition appear name="modal-animation">
        <div class="modal-body">
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
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "Modal",
  mixins: [clickaway],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    onToggleClicked() {
      this.isActive = !this.isActive;
    },
    onModalClickedAway() {
      if (this.isActive) {
        this.isActive = false;
      }
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
  }

  &-body {
    display: flex;
    max-width: 600px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background-color: #ffffff;
    flex-direction: column;
    transition: all 0.2s ease-in-out;
  }

  &-animation-enter-active, &-animation-leave-active {
    transition: transform .2s;
  }

  &-animation-enter  {
    transform: translate(-50%, -50%) scale(0.7);
  }

  &-animation-leave {
    transform: translate(-50%, -50%) scale(1.3);
  }
}
</style>