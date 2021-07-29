<template>
  <div class="modal">
    <div class="modal-toggle" @click="onToggleClicked" v-on-clickaway="onModalClickedAway">
      <slot name="toggle"></slot>
    </div>

    <div :class="['modal-wrapper', isActive && 'modal-wrapper-open']">
      <div :class="['modal-body', isActive && 'modal-body-open']">
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
  &-wrapper {
    &-open {
      background-color: rgba(50, 50, 50, 0.5);
      height: 100%;
      width: 100%;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &-body {
    display: none;
    max-width: 600px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background-color: #ffffff;
    flex-direction: column;

    &-open {
      display: flex;
    }
  }
}
</style>