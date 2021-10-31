<template>
  <a :class="['link']" :href="link" :target="target" :title="title">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
});
</script>

<style lang="scss" scoped>
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
