<template>
  <div class="heading">
    <div class="heading-item" v-if="size === 'xl'">
      <h1 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h1>
    </div>
    <div class="heading-item" v-else-if="size === 'l'">
      <h2 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h2>
    </div>
    <div class="heading-item" v-else-if="size === 'm'">
      <h3 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h3>
    </div>
    <div class="heading-item" v-else-if="size === 's'">
      <h4 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h4>
    </div>
    <div class="heading-item" v-else-if="size === 'xs'">
      <h5 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h5>
    </div>
  </div>
</template>

<script>
import { BreakpointsLabel } from "../utils/breakpoins";

export default {
  name: "Heading",
  props: {
    size: {
      type: String,
      require: true,
      default: "xl",
      validator(value) {
        return BreakpointsLabel.includes(value);
      },
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
.heading-item {
  &-align {
    &-left {
      text-align: left;
    }
    &-center {
      text-align: center;
    }
    &-right {
      text-align: right;
    }
  }
}
</style>
