<template>
  <div
    :class="[
      'ep-container',
      fullwidth && 'ep-container_fullwidth',
      adaptive && 'ep-container_adaptive',
      fixed && 'ep-container_fixed',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    fullwidth: {
      type: Boolean,
      default: false,
      required: false,
    },
    adaptive: {
      type: Boolean,
      default: false,
      required: false,
    },
    fixed: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/media";

.ep-container {
  margin-left: auto;
  margin-right: auto;

  &.ep-container_adaptive {
    @media #{$desktop-m-min} {
      width: 69rem;
    }

    @media #{$desktop-s} {
      width: 51.5rem;
    }

    @media #{$mobile-m} {
      width: 100%;
      padding: 0 1rem;
      box-sizing: border-box;
    }
  }

  @media #{$desktop-m-min} {
    width: 69rem;
  }

  @media #{$desktop-s} {
    width: 51.5rem;
    padding: 0 3rem;
  }

  &_menu {
    @media #{$desktop-m-min} {
      width: 69rem;
    }

    @media #{$desktop-s-interval} {
      width: 51.5rem;
    }

    @media #{$mobile-m} {
      width: auto;
      padding: 0 1rem;
      box-sizing: border-box;
    }
  }

  &_fullwidth {
    width: auto;
    padding: 0 1.5rem;

    @media #{$mobile-m} {
      padding: 0 1rem;
      box-sizing: border-box;
    }
  }

  &_fixed {
    @media #{$desktop-s} {
      width: 69rem;
    }
  }
}
</style>
