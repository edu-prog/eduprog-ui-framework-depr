<template>
  <div :class="[col ? `grid-col-${col}` : 'grid-col']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    col: {
      type: String,
      required: false,
    },
  },
};
</script>
