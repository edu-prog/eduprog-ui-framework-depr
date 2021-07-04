<template>
  <label class="checkbox-container">
    <div v-if="position === 'right'">
      <slot></slot>
    </div>

    <input
      type="checkbox"
      :data-opt="__input_opts"
      :checked="check === true"
      :disabled="disabled === true"
    />

    <span :class="['checkbox-checkmark', `checkbox-checkmark-${type}`]"></span>
    <div v-if="position === 'left'">
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    type: {
      type: String,
    },
    position: {
      type: String,
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    __input_opts: {
      type: String,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {
      checked: this.check,
    };
  },
  methods: {
    getValue: function () {
      return this.checked;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

.checkbox-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  div {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    text-align: left;
    width: calc(100% - 0.75rem - 4rem);
  }

  input {
    display: none;

    &:checked ~ .checkbox-checkmark-main {
      background-color: $color-main;
    }

    &:checked ~ .checkbox-checkmark-secondary {
      background-color: $color-secondary;
    }

    &:checked ~ .checkbox-checkmark-accent {
      background-color: $color-accent;
    }

    &:checked ~ .checkbox-checkmark:after {
      display: flex;
    }
  }

  .checkbox-checkmark {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    background-color: #ecf1f7;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: darken(#ecf1f7, 5%);
    }

    &:after {
      content: "";
      display: none;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0.25rem;
      width: 0.25rem;
      height: 0.5rem;
      border: solid #ffffff;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
}
</style>
