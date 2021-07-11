<template>
  <div
    :class="[
      !size && !fluid ? 'grid-container' : '',
      size ? `grid-container-${size}` : 'grid-container',
      fluid ? `grid-container-fluid` : 'grid-container',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
import { BreakpointsLabel } from "../utils/breakpoins";
export default {
  name: "Container",
  props: {
    size: {
      type: String,
      default: "s",
      validator(value) {
        return !value.fluid && BreakpointsLabel.includes(value);
      },
    },
    fluid: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return !value.size;
      },
    },
  },
};
</script>
