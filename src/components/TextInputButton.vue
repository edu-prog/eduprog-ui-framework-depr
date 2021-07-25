<template>
  <div class="TextInput-Button">
    <div class="TextInput-Button__left-icon">
      <slot name="left-icon"></slot>
    </div>

    <div class="TextInput-Button__input">
      <input type="text" :value="label" readonly />
    </div>

    <div class="TextInput-Button__right-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInputButton',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_global.scss";
.TextInput-Button {
  display: flex;
  align-items: center;
  background-color: $color-platinum;
  height: 35px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  cursor: pointer;
  transition: background 0.25s ease;
  position: relative;

  &__left-icon {
    display: flex;
  }

  &__input {
    margin-left: 0.5rem;
    input {
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
