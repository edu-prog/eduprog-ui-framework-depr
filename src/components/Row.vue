<template>
  <div :class="['grid-row', cols ? `grid-row-cols-${cols}` : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
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
};
</script>
