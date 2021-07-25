<template>
  <div class="popup" v-click-outside="onPopupOutsideClicked">
    <div class="popup-toggle" @click="onPopupToogleClicked">
      <slot name="toggle"></slot>
    </div>
    <div class="popup-item" :class="[isActive && 'popup-item-clicked']">
      <div class="popup-item-content">
        <slot name="content"></slot>
      </div>
      <div class="popup-item-tail"></div>
    </div>
  </div>
</template>

<script>
import Vue2ClickOutside from 'vue2-click-outside';

export default {
  name: 'Popup',
  directives: {
    clickOutside: Vue2ClickOutside.directive,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onPopupToogleClicked() {
      this.isActive = !this.isActive;
    },
    onPopupOutsideClicked() {
      this.isActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  &-toggle {
    display: inline-block;
  }
  &-item {
    opacity: 0;
    pointer-events: none;
    z-index: 10;
    transition: opacity 0.25s ease;
    position: relative;

    &-clicked {
      opacity: 1;
      pointer-events: auto;
    }

    &-content {
      margin-top: 1rem;
      padding: 1rem;
      box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2),
        0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
      max-width: 280px;
      border-radius: 0.5rem;
      border: 1px solid #000;
    }

    &-tail {
      z-index: calc(inherit - 1);
      background-color: red;
      position: absolute;
      top: -3.5px;
      left: 2rem;
      width: 0.5rem;
      height: 0.5rem;
      transform: rotate(135deg);
    }
  }
}
</style>
