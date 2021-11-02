<template>
  <button
    :class="[
      'btn',
      round && 'btn-round',
      `btn-${type}`,
      `btn-size-${size}`,
      rounded && 'btn-rounded',
      isActive && 'btn-clicked',
      mode ? `btn-${mode}` : '',
    ]"
    :style="{ padding: `${padding}rem` }"
    @click="toggleState"
  >
    <slot name="icon_right"></slot>

    <span class="btn-label">
      <slot></slot>
      <span
        v-if="badge"
        :class="[
          'badge-container',
          badge && `badge-container-${badgeType}`,
          badgeColor && `badge-container-${badgeColor}`,
        ]"
      >
        {{ badge }}
      </span>
    </span>

    <slot name="icon_left"></slot>
  </button>
</template>

<script lang="ts">
import { BreakpointsLabel } from "../utils/breakpoins";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value: string): boolean => {
        return [
          "default",
          "action",
          "link",
          "pseudo",
          "clear",
          "raised",
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: "m",
      validator: (value: string): boolean => {
        return BreakpointsLabel.includes(value);
      },
    },
    round: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "",
    },
    badge: {
      type: String,
      default: "",
      required: false,
    },
    badgeType: {
      type: String,
      required: false,
      default: "edge",
      validator: (value: string): boolean => {
        return ["edge", "inside"].includes(value);
      },
    },
    badgeColor: {
      type: String,
      required: false,
      validator: (value: string): boolean => {
        return ["primary", "secondary", "accent", "success", "danger"].includes(
          value
        );
      },
    },
    padding: {
      type: Number,
      required: false,
    },
  },
  setup(props, { emit }) {
    const isActive = ref(false);

    const toggleState = () => {
      isActive.value = !isActive.value;

      setTimeout(() => {
        isActive.value = false;
      }, 400);

      emit("click");
    };

    return { isActive, toggleState };
  },
  emits: ["click"],
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/color";
@import "../assets/styles/animations";
@import "../assets/styles/font";

.btn {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
  text-align: center;
  white-space: nowrap;
  transform: scale(1);
  transition: background, width, color,
    transform $transition-duration $transition-type;
  border: 2px;
  border-radius: 0.5rem;
  font-family: $font-family;

  .btn-label {
    text-align: center;
  }

  &-clicked {
    transform: scale(0.9);
  }

  &-default {
    background-color: $color-lightgray;
  }

  &-action {
    background-color: $color-primary;
    color: #ffffff;

    &:hover {
      background-color: darken($color-primary, 20%);
    }
  }

  &-default {
    color: $color-black;
    background-color: $color-lightgray;

    &.btn-clicked,
    &:hover {
      background-color: darken($color-white, 20%);
    }
  }

  &-link {
    border: 1px solid $color-lightblue;
    color: $color-lightblue;
    background-color: $color-white;

    &:hover {
      background-color: lighten($color-lightblue, 21%);
    }
  }

  &-pseudo {
    border: 2px solid $color-gray;
  }

  &-clear {
    color: $color-darkgray;
    background-color: transparent;

    &:hover {
      color: $color-black;
    }
  }

  &-raised {
    box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.17);
  }

  &-max-width {
    width: 100%;

    &.btn-clicked {
      transform: scale(0.99);
    }
  }

  &-rounded {
    border-radius: 2rem;
  }

  &-size-s {
    height: 2rem;
    padding: 0 1rem;
    font-size: 0.875rem;
  }

  &-size-m {
    height: 2.5rem;
    padding: 0 1.25rem;
    font-size: 1rem;
  }

  &-size-l {
    height: 3.125rem;
    padding: 0 1.625rem;
    font-size: 1.125rem;
  }

  &-size-xl {
    height: 3.75rem;
    padding: 0 2rem;
    font-size: 1.5rem;
  }

  &-round {
    padding: 1rem;
    border-radius: 50%;
    max-width: 3rem;
    max-height: 3rem;
    height: 100%;
    width: 100%;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.badge-container {
  display: inline-flex;
  border: 2px solid #ffffff;
  font-size: 0.75rem;
  padding: 0 0.125rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  border-radius: 1rem;

  &-edge {
    position: absolute;
    border: 2px solid #ffffff;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  &-inside {
    margin-left: 0.375rem;
  }

  &-primary {
    background-color: $color-primary;
  }

  &-secondary {
    background-color: $color-secondary;
  }

  &-accent {
    background-color: $color-accent;
  }

  &-success {
    background-color: $color-success;
  }

  &-danger {
    background-color: $color-danger;
  }
}
</style>
