<template>
  <div
    :class="['card', size ? `card-${size}` : '', align ? `card-${align}` : '']"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    size: {
      type: String,
      required: true,
      default: "s",
    },
    align: {
      type: String,
      required: false,
      default: "center",
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 0.5rem;
  width: 100%;

  &-xs {
    max-width: 300px;
  }

  &-s {
    max-width: 600px;
  }

  &-m {
    max-width: 960px;
  }

  &-l {
    max-width: 1280px;
  }

  &-xl {
    max-width: 1920px;
  }

  &-left {
    margin-right: auto;
  }

  &-center {
    margin-left: auto;
    margin-right: auto;
  }

  &-right {
    margin-left: auto;
  }
}
</style>
