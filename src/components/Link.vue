<template>
  <a :class="['link']" :href="link" :target="target" :title="title">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    link: {
      type: String,
      required: false,
      default: "",
    },
    target: {
      type: String,
      required: false,
      default: "",
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

.link {
  color: $color-primary;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: $color-danger;
  }
}
</style>
