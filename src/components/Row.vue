<template>
  <div :class="[cols ? `row-cols-${cols}` : 'row']">
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
