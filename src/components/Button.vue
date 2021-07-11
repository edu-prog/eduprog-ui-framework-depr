<template>
  <button
    @click="toggleState"
    :class="[
      'btn',
      round ? 'btn-round' : '',
      `btn-${type}`,
      `btn-size-${size}`,
      rounded ? 'btn-rounded' : '',
      isActive ? 'btn-clicked' : '',
      mode ? `btn-${type}-${mode}` : '',
    ]"
  >
    <span class="btn-label">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { BreakpointsLabel } from "../utils/breakpoins";

export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "m",
      validator(value) {
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
  },
  data: function () {
    return { isActive: false };
  },
  methods: {
    toggleState: function () {
      this.isActive = !this.isActive;

      setTimeout(() => {
        this.isActive = false;
      }, 400);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

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
  transition: background 0.25s ease, width 0.25s ease, color 0.25s ease;
  border: 2px;
  border-radius: 0.5rem;
  font-family: $font-family;

  .btn-label {
    text-align: center;
  }

  &-main {
    background-color: $color-primary;
    color: #ffffff;

    &-outlined {
      background-color: #ffffff;
      color: #000000;
      border: 1px solid $color-primary;

      &.btn-clicked,
      &:hover {
        background-color: $color-primary !important;
        color: #ffffff;
      }
    }

    &-max-width {
      width: 100%;
    }

    &.btn-clicked,
    &:hover {
      background-color: darken($color-primary, 20%);
    }
  }

  &-secondary {
    background-color: $color-secondary;
    color: #ffffff;

    &-outlined {
      background-color: #ffffff;
      color: #000000;
      border: 1px solid $color-secondary;

      &.btn-clicked,
      &:hover {
        background-color: $color-secondary !important;
        color: #ffffff;
      }
    }

    &.btn-clicked,
    &:hover {
      background-color: darken($color-secondary, 5%);
    }
  }

  &-accent {
    background-color: $color-accent;
    color: #ffffff;

    &-outlined {
      background-color: #ffffff;
      color: #000000;
      border: 1px solid $color-accent;

      &.btn-clicked,
      &:hover {
        background-color: $color-accent !important;
        color: #ffffff;
      }
    }

    &.btn-clicked,
    &:hover {
      background-color: darken($color-accent, 20%);
    }
  }

  &-default {
    box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.17);
    color: #211a1d;
    background-color: #ffffff;

    &.btn-clicked,
    &:hover {
      background-color: darken(#ffffff, 20%);
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
</style>
