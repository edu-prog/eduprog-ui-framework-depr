<template>
  <div class="row">
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
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_grid.css";
</style>
