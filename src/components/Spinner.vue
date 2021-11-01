<template>
  <div
    :class="[
      'spinner',
      type && mode ? `spinner-${mode}-${type}` : '',
      mode ? `spinner-${mode}` : '',
    ]"
  >
    <span class="spinner-label">Loading...</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        return ["primary", "secondary", "accent"].includes(value);
      },
    },
    mode: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        return ["border", "growing"].includes(value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.spinner {
  &-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: -0.125em;
    border-width: 0.25rem;
    border-style: solid;
    border-radius: 50%;
    border-right-color: transparent;
    animation: 0.75s linear infinite spinner-border-animation;

    &-primary {
      border-color: $color-primary;
      border-right-color: transparent;
    }

    &-secondary {
      border-color: $color-secondary;
      border-right-color: transparent;
    }

    &-accent {
      border-color: $color-accent;
      border-right-color: transparent;
    }
  }

  &-growing {
    display: inline-block;
    width: 2.125rem;
    height: 2.125rem;
    vertical-align: -0.125rem;
    border-radius: 50%;
    opacity: 0;
    animation: 0.75s ease infinite spinner-growing-animation;

    &-primary {
      background-color: $color-primary;
    }

    &-secondary {
      background-color: $color-secondary;
    }

    &-accent {
      background-color: $color-accent;
    }
  }

  &-label {
    display: none;
  }
}

@keyframes spinner-border-animation {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinner-growing-animation {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
    transform: none;
  }
}
</style>
