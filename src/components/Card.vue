<template>
  <div
    :class="[
      'card',
      size ? `card-${size}` : '',
      align ? `card-${align}` : '',
      type ? `card-${type}` : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
import { BreakpointsLabel } from "../utils/breakpoins";

export default {
  name: "Card",
  props: {
    size: {
      type: String,
      required: true,
      default: "s",
      validator(value) {
        return BreakpointsLabel.includes(value);
      },
    },
    align: {
      type: String,
      required: false,
      default: "center",
    },
    type: {
      type: String,
      required: false,
      default: "shadow",
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

.card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 0.5rem;
  width: 100%;

  &-shadow {
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  }

  &-border {
    border: 1px solid $color-lightgray;
  }

  &-xs {
    max-width: calc(300px - 3rem);
  }

  &-s {
    max-width: calc(600px - 3rem);
  }

  &-m {
    max-width: calc(960px - 3rem);
  }

  &-l {
    max-width: calc(1280px - 3rem);
  }

  &-xl {
    max-width: calc(1920px - 3rem);
  }

  &-left {
    margin-right: auto;
  }

  &-center {
    margin-left: auto;
    margin-right: auto;
  }

  &-right {
    margin-left: auto;
  }
}
</style>
