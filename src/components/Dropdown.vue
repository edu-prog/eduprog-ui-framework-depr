<template>
  <div
    v-click-away="onDropdownAwayClicked"
    class="dropdown"
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
    <transition appear name="fade">
      <div
        v-if="isActive"
        :class="[
          'dropdown-item',
          direction && `dropdown-item-${direction}`,
          clearly && 'dropdown-clearly',
          fullView && 'dropdown-item-fullview',
        ]"
        :style="{ width: `${max_width}px` }"
        @mouseleave="onDropdownMouseLeaveFromItem"
        @mouseover="onDropdownMouseOverOnItem"
        @click="closeOnClick ? (isActive = false) : 0"
      >
        <div class="dropdown-item-content">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { directive } from "vue3-click-away";
import { defineComponent } from "vue";

export default defineComponent({
  directives: {
    ClickAway: directive,
  },
  props: {
    direction: {
      type: String,
      required: false,
      default: "bottom-left",
      validator(value) {
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
    hover: {
      type: Boolean,
      required: false,
      default: false,
    },
    max_width: {
      type: Number,
      required: false,
    },
    clearly: {
      type: Boolean,
      required: false,
      default: false,
    },
    fullView: {
      type: Boolean,
      required: false,
      default: false,
    },
    closeOnClick: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
      isHover: false,
    };
  },
  methods: {
    onDropdownToogleClicked() {
      if (!this.hover) {
        this.isActive = !this.isActive;
        this.$emit("update:modelValue", this.isActive);
      }
    },
    onDropdownAwayClicked() {
      if (!this.hover) {
        this.isActive = false;
        this.$emit("update:modelValue", this.isActive);
      }
    },
    onDropdownMouseOver() {
      if (this.hover) {
        this.isActive = true;
        this.$emit("update:modelValue", this.isActive);
      }
    },

    onDropdownMouseLeave() {
      if (this.hover) {
        setTimeout(() => {
          if (!this.isHover) {
            this.isActive = false;
          }
        }, 500);
      }
    },

    onDropdownMouseOverOnItem() {
      if (this.hover) {
        this.isHover = true;
      }
    },

    onDropdownMouseLeaveFromItem() {
      if (this.hover) {
        this.isHover = false;
      }
    },
  },
  emits: ["update:modelValue"],
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.dropdown {
  position: relative;
  display: inline-block;

  &-toggle {
    display: inline-block;
    width: 100%;
  }

  &-item {
    display: block;
    z-index: 10;
    transition: opacity 0.25s ease;
    position: absolute;

    &-fullview {
      width: 100%;
    }

    &::before {
      content: "";
      position: absolute;
      width: 0.75rem;
      height: 0.75rem;
      background-color: #fff;
      transform: rotate(135deg);
      top: -0.375rem;
      left: 0.75rem;
    }

    &-content {
      box-shadow: 0 0 0.75rem 0.25rem rgba(0, 0, 0, 0.2);
      width: 100%;
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

      &::before {
        left: 50%;
        transform: translateX(-50%) rotate(135deg);
      }
    }

    &-bottom-right {
      top: calc(100% + 10px);
      right: 0;

      &::before {
        left: initial;
        right: 0.75rem;
      }
    }

    &-top-left {
      bottom: calc(100% + 10px);

      &::before {
        top: initial;
        bottom: -0.375rem;
        left: 0.75rem;
      }
    }

    &-top-right {
      bottom: calc(100% + 10px);
      right: 0;

      &::before {
        top: initial;
        bottom: -0.375rem;
        left: initial;
        right: 0.75rem;
      }
    }

    &-top-center {
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);

      &::before {
        top: initial;
        bottom: -0.375rem;
        left: 50%;
        transform: translateX(-50%) rotate(135deg);
      }
    }
  }
}

.dropdown-clearly {
  &::before {
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
