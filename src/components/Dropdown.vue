<template>
  <div class="dropdown" v-click-outside="onDropdownOutsideClicked">
    <div class="dropdown-toggle" @click="onDropdownToogleClicked">
      <slot name="toggle"></slot>
    </div>
    <div class="dropdown-item" :class="[isActive && 'dropdown-item-clicked']">
      <div class="dropdown-item-content">
        <slot name="content"></slot>
      </div>
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
    display: none;
    pointer-events: none;
    z-index: 10;
    transition: opacity 0.25s ease;
    position: absolute;

    &-clicked {
      display: block;
      pointer-events: auto;
    }

    &-content {
      margin-top: 0.625rem;
      box-shadow: 0 0 0.75rem 0.25rem rgba(0, 0, 0, 0.2);
      max-width: 280px;
      border-radius: 0.5rem;
    }
  }
}
</style>
