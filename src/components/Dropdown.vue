<template>
  <div
    class="dropdown"
    v-on-clickaway="onDropdownAwayClicked"
    @mouseleave="onDropdownMouseLeave"
  >
    <div
      ref="dropdownToggle"
      class="dropdown-toggle"
      @click="onDropdownToogleClicked"
      @mouseover="onDropdownMouseOver"
    >
      <slot name="toggle"></slot>
    </div>
    <div
      v-if="isActive"
      :class="[direction && `dropdown-item-${direction}`]"
      :style="[left && { left: `${left}rem` }]"
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
          "top-right",
        ].includes(value);
      },
    },
    left: {
      type: Number,
      required: false,
    },
    hover: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onDropdownToogleClicked() {
      if (!this.hover) {
        this.isActive = !this.isActive;
      }
    },
    onDropdownAwayClicked() {
      if (!this.hover) {
        this.isActive = false;
      }
    },
    onDropdownMouseOver() {
      if (this.hover) {
        this.isActive = true;
      }
    },

    onDropdownMouseLeave() {
      if (this.hover) {
        setTimeout(() => {
          this.isActive = false;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;

  &-toggle {
    display: inline-block;
  }

  &-item {
    display: block;
    z-index: 10;
    transition: opacity 0.25s ease;
    position: absolute;

    &-content {
      box-shadow: 0 0 0.75rem 0.25rem rgba(0, 0, 0, 0.2);
      max-width: 280px;
      border-radius: 0.5rem;
      background-color: #ffffff;
      overflow: hidden;
    }

    &-bottom-left {
      top: calc(100% + 10px);
    }

    &-bottom-center {
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    }

    &-bottom-right {
      top: calc(100% + 10px);
      right: 0;
    }

    &-top-left {
      bottom: calc(100% + 10px);
    }

    &-top-right {
      bottom: calc(100% + 10px);
      right: 0;
    }

    &-top-center {
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
