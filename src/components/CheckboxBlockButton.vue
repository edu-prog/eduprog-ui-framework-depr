<template>
  <button
    :class="['cb-button', isActive ? 'cb-button-clicked' : '']"
    type="button"
    @click="onCheckboxItemClicked"
  >
    <img
      v-if="icon"
      :src="icon"
      alt="registration icon"
      class="cb-button-img"
    />
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CheckboxBlockButton",
  props: {
    icon: {
      type: String,
      required: false,
    },
  },
  setup() {
    const isActive = ref(false);
    const onCheckboxItemClicked = () => {
      isActive.value = !isActive.value;
    };

    return { isActive, onCheckboxItemClicked };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.cb-button {
  display: flex;
  align-items: center;
  font-family: $font-family;
  width: 100%;
  outline: none;
  background-color: $color-platinum;
  border: 0;
  cursor: pointer;
  height: 50px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &-img {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    user-select: none;
    pointer-events: none;
  }

  &-clicked {
    background-color: darken($color-platinum, 20%);
  }
}
</style>
