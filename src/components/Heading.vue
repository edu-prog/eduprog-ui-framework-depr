<template>
  <div class="heading">
    <div class="heading-item" v-if="size === 'xxl'">
      <h1 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h1>
    </div>
    <div class="heading-item" v-else-if="size === 'xl'">
      <h2 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h2>
    </div>
    <div class="heading-item" v-else-if="size === 'l'">
      <h3 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h3>
    </div>
    <div class="heading-item" v-else-if="size === 'm'">
      <h4 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h4>
    </div>
    <div class="heading-item" v-else-if="size === 's'">
      <h5 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h5>
    </div>
    <div class="heading-item" v-else-if="size === 'xs'">
      <h6 :class="[align ? `heading-item-align-${align}` : '']">
        <slot></slot>
      </h6>
    </div>
  </div>
</template>

<script>
import { BreakpointsLabel } from '../utils/breakpoins';

export default {
  name: 'Heading',
  props: {
    size: {
      type: String,
      require: true,
      default: 'xl',
      validator(value) {
        return [...BreakpointsLabel, 'xxl'].includes(value);
      },
    },
    align: {
      type: String,
      required: false,
      default: 'center',
    },
  },
};
</script>

<style scoped lang="scss">
$h1-font-size: 4.2rem !default;
$h2-font-size: 3.56rem !default;
$h3-font-size: 2.92rem !default;
$h4-font-size: 2.28rem !default;
$h5-font-size: 1.64rem !default;
$h6-font-size: 1.15rem !default;

.heading {
  &-item {
    h1 {
      font-size: $h1-font-size;
      line-height: 110%;
      margin: ($h1-font-size / 1.5) 0 ($h1-font-size / 2.5) 0;
    }
    h2 {
      font-size: $h2-font-size;
      line-height: 110%;
      margin: ($h2-font-size / 1.5) 0 ($h2-font-size / 2.5) 0;
    }
    h3 {
      font-size: $h3-font-size;
      line-height: 110%;
      margin: ($h3-font-size / 1.5) 0 ($h3-font-size / 2.5) 0;
    }
    h4 {
      font-size: $h4-font-size;
      line-height: 110%;
      margin: ($h4-font-size / 1.5) 0 ($h4-font-size / 2.5) 0;
    }
    h5 {
      font-size: $h5-font-size;
      line-height: 110%;
      margin: ($h5-font-size / 1.5) 0 ($h5-font-size / 2.5) 0;
    }
    h6 {
      font-size: $h6-font-size;
      line-height: 110%;
      margin: ($h6-font-size / 1.5) 0 ($h6-font-size / 2.5) 0;
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
