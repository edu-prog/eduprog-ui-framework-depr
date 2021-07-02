<template>
  <div class="form-field">
    <span
      :class="['form-field-label', isActive ? 'form-field-label-focused' : '']"
      >{{ label }}</span
    >
    <span :hidden="!isActive || message.length > 0" class="form-field-mask">{{
      mask
    }}</span>
    <input
      :type="type"
      :class="[
        'form-field-input-control',
        `input-size-${size}`,
        isActive ? 'input-focused' : '',
      ]"
      v-model="message"
      @focus="toggleInput"
      @blur="toggleInput"
      @input="updateInput"
      :maxlength="max_length"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "m",
    },
    mask: {
      type: String,
    },
    max_length: {
      type: Number,
    },
  },
  data: function () {
    return {
      isActive: false,
      message: "",
    };
  },
  methods: {
    toggleInput: function () {
      if (!this.message.length > 0) {
        this.isActive = !this.isActive;
      }
    },
    updateInput: function (event) {
      const message = event.target.value;
      if (message.length > 0 && !this.isActive) {
        this.isActive = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form-field {
  margin: 5px 0;

  &-label {
    position: absolute;
    font-size: 1rem;
    top: 50%;
    margin-left: 0.5rem;
    pointer-events: none;
    transition: 0.25s ease;
    transform: translateY(-50%);
    color: #000000;

    &-focused {
      font-size: 0.625rem;
      top: 27%;
    }
  }

  &-mask {
    font-size: 1rem;
    position: absolute;
    top: 50%;
    margin-left: 0.5rem;
    color: #333333;
    transform: translateY(-50%);
  }

  &-input-control {
    width: calc(100% - 30px);
    height: 35px;
    border: 0;
    outline: 0;
    padding: 0.5rem;
    background-color: #e7e7e7;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease;

    &.input-size-m {
      font-size: 1rem;
    }
    &.input-size-xl {
      font-size: 2rem;
    }

    &:hover {
      background-color: darken(#e7e7e7, 5%);
    }
  }

  .input-focused {
    background-color: darken(#e7e7e7, 5%);
  }
}
</style>
