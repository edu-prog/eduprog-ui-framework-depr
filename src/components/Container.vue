<template>
  <div :class="[size ? `grid-container-${rightSize}` : 'grid-container']">
    <slot></slot>
  </div>
</template>

<script>
import {
  BreakpointsLabel,
  BreakpointsLabelConvertToLarge,
} from "../utils/breakpoins";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Container",
  props: {
    size: {
      type: String,
      default: "s",
      validator(value) {
        return [...BreakpointsLabel, "fluid"].includes(value);
      },
    },
  },
  data() {
    return {
      rightSize: BreakpointsLabelConvertToLarge(this.size),
    };
  },
});
</script>
