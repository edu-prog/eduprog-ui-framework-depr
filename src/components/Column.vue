<template>
  <div
    :class="[
      'ep-col',
      col && `ep-col_${col}`,
      xs && `ep-col_xs-${xs}`,
      md && `ep-col_md-${md}`,
      lg && `ep-col_lg-${lg}`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const colsPredicating = (value: number): boolean => {
  return value > 0 && value <= 12;
};

export default defineComponent({
  props: {
    col: {
      type: [String, Number],
      required: false,
      validator: (value: string | number): boolean => {
        if (typeof value === "string") {
          return /^\d+$/.test(value) && colsPredicating(Number(value));
        } else {
          return colsPredicating(value);
        }
      },
    },
    xs: {
      type: [String, Number],
      required: false,
      validator: (value: string | number): boolean => {
        if (typeof value === "string") {
          return /^\d+$/.test(value) && colsPredicating(Number(value));
        } else {
          return colsPredicating(value);
        }
      },
    },
    md: {
      type: [String, Number],
      required: false,
      validator: (value: string | number): boolean => {
        if (typeof value === "string") {
          return /^\d+$/.test(value) && colsPredicating(Number(value));
        } else {
          return colsPredicating(value);
        }
      },
    },
    lg: {
      type: [String, Number],
      required: false,
      validator: (value: string | number): boolean => {
        if (typeof value === "string") {
          return /^\d+$/.test(value) && colsPredicating(Number(value));
        } else {
          return colsPredicating(value);
        }
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/grid";

.ep-col {
  @include generate-sme-columns($space-normal);
  @include generate-column(md, $space-normal);

  &_stretch {
    display: flex;
  }

  .ep-row_adaptive & {
    @media #{$desktop-m-min} {
      @include generate-column(lg, $space-large);
    }

    @media #{$desktop-s} {
      @include generate-column(md, $space-normal);
    }

    @media #{$mobile-m} {
      @include generate-column(xs, $space-small);
    }

    .ep-row_temporary & {
      @include generate-sme-columns($space-normal);
    }

    @media #{$desktop-m-min} {
      @include generate-sme-columns($space-large);
    }
  }
}

.ep-col-offset {
  @include generate-sme-offset-columns();

  @media #{$mobile-m-interval} {
    @include generate-offset-columns(xs);
  }

  @media #{$desktop-s} {
    @include generate-offset-columns(md);
  }

  @media #{$desktop-m-min} {
    @include generate-offset-columns(lg);
  }
}
</style>
