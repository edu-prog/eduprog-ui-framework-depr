<template>
  <div class="dropdown">
    <div
      ref="dropdownToggle"
      v-on-clickaway="onDropdownAwayClicked"
      class="dropdown-toggle"
      @click="onDropdownToogleClicked"
    >
      <slot name="toggle"></slot>
    </div>
    <div
      :class="[isActive && 'dropdown-item-clicked', direction && `dropdown-item-${direction}`]"
      :style="[left && {left: `${left}rem`}]"
      class="dropdown-item"
    >
      <div class="dropdown-item-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "Dropdown",
  mixins: [clickaway],
  props: {
    direction: {
      type: String,
      required: false,
      default: "bottom-left",
      validation(value) {
        return [
          "bottom-left",
          "bottom-center",
          "bottom-right",
          "top-left",
          "top-center",
          "top-right"
        ].includes(value);
      }
    },
    left: {
      type: Number,
      required: false,
    }
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
    onDropdownAwayClicked() {
      this.isActive = false;
    },
    dropdownHeight() {
      return this.$refs.dropdownToggle.$el.clientHeight;
    }
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
    z-index: 10;
    transition: opacity 0.25s ease;
    position: absolute;

    &-clicked {
      display: block;
    }

    &-content {
      box-shadow: 0 0 0.75rem 0.25rem rgba(0, 0, 0, 0.2);
      max-width: 280px;
      border-radius: 0.5rem;
      background-color: #ffffff;
    }

    &-bottom-left {
      top: calc(100% + 10px)
    }

    &-top-left {
      bottom: calc(100% + 10px);
    }

    &-top-right {
      bottom: calc(100% + 10px);
    }

    &-top-center {
      bottom: calc(100% + 10px);
    }
  }
}
</style>
