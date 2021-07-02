<template>
  <button
    @click="toggleState"
    :class="[
      'btn',
      `btn-${type}`,
      `btn-size-${size}`,
      rounded ? 'btn-rounded' : '',
      isActive ? 'btn-clicked' : '',
      `btn-${type}-${mode}`,
    ]"
  >
    <span class="btn-label">{{ content }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "m",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    mode: {},
  },
  data: function () {
    return { isActive: false };
  },
  methods: {
    toggleState: function () {
      this.isActive = !this.isActive;

      setTimeout(() => {
        this.isActive = false;
      }, 400);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

.btn {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
  text-align: center;
  white-space: nowrap;
  transition: background 0.1s ease, width 0.1s ease, color 0.1s ease;
  border: 1px;
  border-radius: 0.5rem;
  font-family: $font-family;

  .btn-label {
    text-align: center;
  }

  &-main {
    background-color: $color-main;
    color: #ffffff;

    &-outlined {
      background-color: #ffffff;
      color: #000000;
      border: 2px solid $color-main;

      &.btn-clicked,
      &:hover {
        background-color: $color-main !important;
        color: #ffffff;
      }
    }

    &-block {
      width: calc(100% - 0.875rem);
    }

    &.btn-clicked,
    &:hover {
      background-color: darken($color-main, 20%);
    }
  }

  &-secondary {
    background-color: $color-secondary;
    color: #ffffff;

    &-outlined {
      background-color: #ffffff;
      color: #000000;
      border: 2px solid $color-secondary;

      &.btn-clicked,
      &:hover {
        background-color: $color-secondary !important;
        color: #ffffff;
      }
    }

    &.btn-clicked,
    &:hover {
      background-color: darken($color-secondary, 5%);
    }
  }

  &-accent {
    background-color: $color-accent;
    color: #ffffff;

    &-outlined {
      background-color: #ffffff;
      color: #000000;
      border: 2px solid $color-accent;

      &.btn-clicked,
      &:hover {
        background-color: $color-accent !important;
        color: #ffffff;
      }
    }

    &.btn-clicked,
    &:hover {
      background-color: darken($color-accent, 20%);
    }
  }

  &-default {
    box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.17);
    color: #211a1d;
    background-color: #ffffff;

    &.btn-clicked,
    &:hover {
      background-color: darken(#ffffff, 20%);
    }
  }

  &-rounded {
    border-radius: 2rem;
  }

  &-size-s {
    height: 2rem;
    padding: 0 1rem;
    font-size: 0.875rem;
  }

  &-size-m {
    height: 2.5rem;
    padding: 0 1.25rem;
    font-size: 1rem;
  }

  &-size-l {
    height: 3.125rem;
    padding: 0 1.625rem;
    font-size: 1.125rem;
  }

  &-size-xl {
    height: 3.75rem;
    padding: 0 2rem;
    font-size: 1.5rem;
  }
}
</style>
