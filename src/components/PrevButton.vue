<template>
  <button class="previous_button" @click="$emit('click')">
    <span class="previous_button_label">
      <svg
        fill="#000000"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg
    ></span>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrevButton",
});
</script>

<style lang="scss" scoped>
.previous_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 50%;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  transform: scale(1);
  transition: background-color, transform 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
    background-color: #cdcdcd;
  }
}
</style>
