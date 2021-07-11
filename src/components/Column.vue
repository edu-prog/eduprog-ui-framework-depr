<template>
  <div :class="[col ? `col-${col}` : 'col']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    col: {
      type: Number,
      required: false,
    },
  },
};
</script>
