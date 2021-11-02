<template>
  <div :class="['ep-row', 'ep-row_adaptive', align && `ep-row_align_${align}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    container: {
      type: Boolean,
      required: false,
      default: false,
    },
    align: {
      type: String,
      required: false,
      validator: (value: string): boolean => {
        return ["start", "end", "center"].includes(value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/grid";

.ep-row {
  display: flex;
  flex-wrap: wrap;

  &_align_center {
    align-items: center;
  }

  &_align_start {
    align-items: flex-start;
  }

  &_align_end {
    align-items: flex-end;
  }

  &_adaptive.ep-row {
    @media #{$desktop-m-min} {
      margin-left: -$space-large;
      margin-right: -$space-large;
    }

    @media #{$desktop-s} {
      margin-left: -$space-normal;
      margin-right: -$space-normal;
    }

    @media #{$mobile-m} {
      margin-left: -$space-small;
      margin-right: -$space-small;
    }
  }

  &_temporary.ep-row {
    margin-left: -$space-normal;
    margin-right: -$space-normal;
  }

  @media #{$desktop-m-min} {
    margin-left: -$space-large;
    margin-right: -$space-large;
  }

  @media #{$desktop-s} {
    margin-left: -$space-normal;
    margin-right: -$space-normal;
  }
}
</style>
