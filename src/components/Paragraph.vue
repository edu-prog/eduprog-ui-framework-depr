<template>
  <p :class="['paragraph', `paragraph-${type}`, `paragraph-${align}`, wrap && `paragraph-wrap`]"
     :style="{color: color, backgroundColor: wrap}">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    type: {
      type: String,
      default: 'normal',
      required: false,
      validator(value) {
        return ['small', 'normal', 'lead'].includes(value);
      }
    },
    align: {
      type: String,
      default: 'left',
      required: false,
      validator(value) {
        return ['left', 'right', 'center', 'justify'].includes(value);
      }
    },
    color: {
      type: String,
      default: "#000000",
      required: false,
      validator(value) {
        return value.match(/(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^)]*\)/i)
      }
    },
    wrap: {
      type: String,
      default: "inherit",
      required: false,
      validator(value) {
        return value.match(/(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^)]*\)/i)
      }
    },
  },
};
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
