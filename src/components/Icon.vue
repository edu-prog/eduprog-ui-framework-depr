<template>
  <span :style="iconStyles" class="material-icons">{{ name }}</span>
</template>

<script lang="ts">
import { computed, defineComponent, StyleValue } from "vue";
import { ISizes } from "../utils/breakpoins";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      default: "m",
    },
    weight: {
      type: String,
      default: "normal",
      required: false,
    },
  },
  setup(props) {
    const sizes = {
      xs: "1rem",
      s: "1.25rem",
      m: "1.5rem",
      l: "1.75rem",
      xl: "2rem",
    } as ISizes;

    const iconStyles = computed(() => {
      return {
        color: props.color,
        fontSize: `${sizes[props.size as keyof ISizes]}`,
        fontWeight: props.weight,
      } as StyleValue;
    });
    return { iconStyles };
  },
});
</script>

<style lang="scss" scoped>
.material-icons {
  user-select: none;
}
</style>
