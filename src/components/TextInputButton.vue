<template>
  <div class="TextInput-Button" @click="$emit('click')">
    <div class="TextInput-Button__left-icon">
      <slot name="left-icon"></slot>
    </div>

    <div class="TextInput-Button__input">
      <input ref="TextInputButtonInput" :value="label" readonly type="text" />
    </div>

    <div class="TextInput-Button__right-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["click"],
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/_global.scss";

.TextInput-Button {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  background-color: $color-platinum;
  height: 3.125rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  cursor: pointer;
  transition: background 0.25s ease;
  position: relative;

  &__left-icon {
    display: flex;
  }

  &__input {
    margin-left: 0.5rem;
    width: 100%;

    input {
      width: 100%;
      border: none;
      outline: none;
      background-color: inherit;
      font-size: 1rem;
      cursor: pointer;
    }
  }

  &__right-icon {
    display: flex;
    position: absolute;
    right: 0.5rem;
  }

  &:hover {
    background-color: darken($color-platinum, 5%);
  }
}
</style>
