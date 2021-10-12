<template>
  <div :class="['grid-row', cols ? `grid-row-cols-${cols}` : '']">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Row",
  props: {
    container: {
      type: Boolean,
      required: false,
      default: false,
    },
    cols: {
      type: Number,
      required: false,
    },
  },
});
</script>
