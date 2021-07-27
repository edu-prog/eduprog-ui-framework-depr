<template>
  <div class="dropdown" v-click-outside="onDropdownOutsideClicked">
    <div class="dropdown-toggle" @click="onDropdownToogleClicked">
      <slot name="toggle"></slot>
    </div>
    <div class="dropdown-item" :class="[isActive && 'dropdown-item-clicked']">
      <div class="dropdown-item-content">
        <slot name="content"></slot>
      </div>
      <div class="dropdown-item-tail"></div>
    </div>
  </div>
</template>

<script>
import Vue2ClickOutside from 'vue2-click-outside';

export default {
  name: 'Dropdown',
  directives: {
    clickOutside: Vue2ClickOutside.directive,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onDropdownToogleClicked() {
      this.isActive = !this.isActive;
    },
    onDropdownOutsideClicked() {
      this.isActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
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
      margin-top: 0.625rem;
      box-shadow: 0 0 0.75rem 0.25rem rgba(0, 0, 0, 0.2);
      max-width: 280px;
      border-radius: 0.5rem;
    }

    &-tail {
      z-index: 11;
      position: absolute;
      top: -3.5px;
      left: 2rem;
      width: 0.5rem;
      height: 0.5rem;
      transform: rotate(135deg);
      background-color: #ffffff;
      box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2),
      0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
