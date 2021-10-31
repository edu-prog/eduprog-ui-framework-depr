<template>
  <p
    :class="[
      'paragraph',
      `paragraph-${type}`,
      `paragraph-${align}`,
      wrap && `paragraph-wrap`,
    ]"
  >
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "normal",
      required: false,
      validator: (value: string): boolean => {
        return ["small", "normal", "lead"].includes(value);
      },
    },
    align: {
      type: String,
      default: "left",
      required: false,
      validator: (value: string): boolean => {
        return ["left", "right", "center", "justify"].includes(value);
      },
    },
    text_color: {
      type: String,
      default: "#000000",
      required: false,
      validator: (value: string): boolean => {
        return /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^)]*\)/i.test(
          value
        );
      },
    },
    wrap: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.paragraph {
  padding: 0;
  margin: 0 0 1rem;
  font-size: 1rem;
  line-height: 1.4;

  &-small {
    font-size: 0.8125rem;
  }

  &-normal {
    font-size: 1rem;
  }

  &-lead {
    font-size: 1.375rem;
  }

  &-left {
    text-align: left;
  }

  &-center {
    text-align: center;
  }

  &-right {
    text-align: right;
  }

  &-justify {
    text-align: justify;
  }

  &-wrap {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
  }
}
</style>
