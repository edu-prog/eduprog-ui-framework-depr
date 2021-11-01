<template>
  <div :class="[size ? `grid-container-${rightSize}` : 'grid-container']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  BreakpointsLabel,
  BreakpointsLabelConvertToLarge,
} from "../utils/breakpoins";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    size: {
      type: String,
      default: "s",
      validator: (value: string): boolean => {
        return [...BreakpointsLabel, "fluid"].includes(value);
      },
    },
  },
  setup(props) {
    const rightSize = ref(BreakpointsLabelConvertToLarge(props.size));
    return { rightSize };
  },
});
</script>
