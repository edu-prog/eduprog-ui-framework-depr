<template>
  <p :class="['paragraph', `paragraph-${view}`, `paragraph-${align}`]">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    text: {
      type: String,
      required: true,
    },
    view: {
      type: String,
      default: "normal",
    },
    align: {
      type: String,
      default: "left",
    },
  },
};
</script>

<style scoped lang="scss">
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
}
</style>
