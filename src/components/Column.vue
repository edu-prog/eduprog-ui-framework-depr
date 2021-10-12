<template>
  <div :class="[col ? `grid-col-${col}` : 'grid-col']">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Column",
  props: {
    col: {
      type: String,
      required: false,
    },
  },
});
</script>
