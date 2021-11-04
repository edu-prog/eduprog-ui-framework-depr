<template>
  <div class="heading">
    <div v-if="size === 'xxl'" class="heading-item">
      <h1 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h1>
    </div>
    <div v-else-if="size === 'xl'" class="heading-item">
      <h2 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h2>
    </div>
    <div v-else-if="size === 'lg'" class="heading-item">
      <h3 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h3>
    </div>
    <div v-else-if="size === 'md'" class="heading-item">
      <h4 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h4>
    </div>
    <div v-else-if="size === 'sm'" class="heading-item">
      <h5 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h5>
    </div>
    <div v-else-if="size === 'xs'" class="heading-item">
      <h6 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h6>
    </div>
  </div>
</template>

<script lang="ts">
import { BreakpointsLabel } from "../utils/breakpoins";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: {
      type: String,
      require: true,
      default: "xl",
      validator: (value: string): boolean => {
        return [...BreakpointsLabel, "xxl"].includes(value);
      },
    },
    align: {
      type: String,
      required: false,
      default: "center",
    },
  },
});
</script>

<style lang="scss" scoped>
@use "sass:math";

$h1-font-size: 4.2rem;
$h2-font-size: 3.56rem;
$h3-font-size: 2.92rem;
$h4-font-size: 2.28rem;
$h5-font-size: 1.64rem;
$h6-font-size: 1.15rem;

.heading {
  &-item {
    h1 {
      font-size: $h1-font-size;
      line-height: 110%;
      margin: math.div($h1-font-size, 1.5) 0 math.div($h1-font-size, 2.5) 0;
    }

    h2 {
      font-size: $h2-font-size;
      line-height: 110%;
      margin: math.div($h2-font-size, 1.5) 0 math.div($h2-font-size, 2.5) 0;
    }

    h3 {
      font-size: $h3-font-size;
      line-height: 110%;
      margin: math.div($h3-font-size, 1.5) 0 math.div($h3-font-size, 2.5) 0;
    }

    h4 {
      font-size: $h4-font-size;
      line-height: 110%;
      margin: math.div($h4-font-size, 1.5) 0 math.div($h4-font-size, 2.5) 0;
    }

    h5 {
      font-size: $h5-font-size;
      line-height: 110%;
      margin: math.div($h5-font-size, 1.5) 0 math.div($h5-font-size, 2.5) 0;
    }

    h6 {
      font-size: $h6-font-size;
      line-height: 110%;
      margin: math.div($h6-font-size, 1.5) 0 math.div($h6-font-size, 2.5) 0;
    }

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
}
</style>
