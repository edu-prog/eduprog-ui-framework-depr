<template>
  <button
    :class="['cb-button', isActive ? 'cb-button-clicked' : '']"
    @click="onCheckboxItemClicked"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CheckboxBlockButton",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onCheckboxItemClicked() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

.cb-button {
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

  &-clicked {
    background-color: darken($color-platinum, 20%);
  }
}
</style>
