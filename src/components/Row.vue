<template>
  <div :class="['grid-row', cols ? `grid-row-cols-${cols}` : '']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
