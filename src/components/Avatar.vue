<template>
  <div :class="['avatar', `avatar-size-${size}`]">
    <div class="avatar-image">
      <img alt="" src="https://thispersondoesnotexist.com/image" />

      <div class="avatar-image-wrapper">
        <svg
          fill="none"
          height="18"
          viewBox="0 0 20 18"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2H14.83L13 0H7ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"
            fill="white"
          />
        </svg>
      </div>
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
      required: false,
      default: "m",
      validator: (value: string): boolean => {
        return BreakpointsLabel.includes(value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.avatar {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &-size-xs {
    max-width: 100px;
    max-height: 100px;
  }

  &-size-s {
    max-width: 200px;
    max-height: 200px;
  }

  &-size-m {
    max-width: 260px;
    max-height: 260px;
  }

  &-wrapper {
    transition: background-color 0.25s ease-in-out;
    border-radius: 50%;
  }

  &-image {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    &-wrapper {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15%;
      height: 15%;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      transition: 0.3s ease;

      svg {
        transition: 0.25s ease;
      }
    }
  }

  &:hover &-image-wrapper {
    width: 100%;
    height: 100%;
    bottom: 0;

    svg {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>
