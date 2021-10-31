<template>
  <div :class="[col ? `grid-col-${col}` : 'grid-col']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    col: {
      type: String,
      required: false,
    },
  },
});
</script>
