<template>
  <div class="form-field">
    <span
      :class="[
        'form-field-label',
        isActive || message ? 'form-field-label-focused' : '',
      ]"
    >
      {{ label }}
    </span>
    <span :hidden="!isActive || message.length > 0" class="form-field-mask">
      {{ mask }}
    </span>
    <input
      :type="type === 'password' ? (isShow ? 'text' : 'password') : type"
      :class="[
        'form-field-input-control',
        `input-size-${size}`,
        isActive || message ? 'input-focused' : '',
        input_class,
        getValidateStatus(),
      ]"
      ref="text_input_"
      v-model="message"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @input="updateInput"
      :maxlength="max_length"
      :readonly="readonly"
      :value="message"
    />
    <slot></slot>
    <div v-if="validateStatus > 0">
      <Icon
        :style="{
          right: type === 'password' ? '3.75rem' : '1.5rem',
        }"
        class="input-validate-valid-icon"
        color="#00b92d"
        name="done"
        weight="bold"
      ></Icon>
    </div>
    <div v-if="type === 'password'">
      <Icon
        @click="togglePassword"
        class="password-toggler"
        :name="isShow ? 'visibility' : 'visibility_off'"
      />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "TextInput",
  components: {
    Icon,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    val: {
      type: String,
      required: false,
      default: "",
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
    input_class: {
      type: String,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    validate: {
      type: RegExp,
      required: false,
    },
  },
  data: function () {
    return {
      isActive: false,
      isShow: false,
      message: this.val,
      validateStatus: -1,
    };
  },
  methods: {
    getValue: function () {
      return this.message;
    },
    toggleInput: function () {
      if (!this.message.length > 0) {
        this.isActive = !this.isActive;
        return true;
      }
      return false;
    },
    onInputFocus: function () {
      this.toggleInput();
    },
    onInputBlur: function () {
      if (!this.toggleInput() && this.validate) {
        if (!this.validate.test(this.message)) {
          this.validateStatus = 0;
        } else {
          this.validateStatus = 1;
        }
      }
    },
    updateInput: function (event) {
      const message = event.target.value;
      if (message.length > 0 && !this.isActive) {
        this.isActive = true;
      }
    },
    togglePassword: function () {
      this.isShow = !this.isShow;
    },

    getValidateStatus: function () {
      if (this.validateStatus === -1) {
        return "input-validate-default";
      } else if (this.validateStatus === 0) {
        return "input-validate-invalid";
      } else if (this.validateStatus === 1) {
        return "input-validate-valid";
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

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
    background-color: $color-platinum;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease;

    &.input-size-m {
      font-size: 1rem;
    }

    &.input-size-xl {
      font-size: 2rem;
    }

    &:hover {
      background-color: darken($color-platinum, 5%);
    }
  }

  .input-focused {
    background-color: darken($color-platinum, 5%);
  }

  .input-validate {
    &-valid {
      &-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &-invalid {
      background-color: $color-invalid;
    }
  }

  .password-toggler {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.2s ease;
    border-radius: 50%;

    &:hover {
      background-color: silver;
    }
  }
}
</style>
