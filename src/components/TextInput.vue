<template>
  <div class="form-field">
    <span
      :class="[
        'form-field-label',
        isActive || content ? 'form-field-label-focused' : '',
      ]"
    >
      {{ label }}
    </span>
    <span :hidden="!isActive || content.length > 0" class="form-field-mask">
      {{ mask }}
    </span>
    <input
      :type="type === 'password' ? (isShow ? 'text' : 'password') : type"
      :class="[
        'form-field-input-control',
        `input-size-${size}`,
        isActive || content ? 'input-focused' : '',
        input_class,
        getValidationStatus(),
      ]"
      ref="text_input_"
      v-model="content"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @input="onInputUpdated"
      :maxlength="max_length"
      :readonly="readonly"
      :value="content"
    />
    <slot></slot>
    <div v-if="validation.status > 0">
      <Icon
        :style="{
          right: type === 'password' ? '3.75rem' : '1.5rem',
        }"
        class="input-validation-valid-icon"
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
import { BreakpointsLabel } from "../utils/breakpoins";

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
      validator(value) {
        return BreakpointsLabel.includes(value);
      },
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
    validation_pattern: {
      type: RegExp,
      required: false,
    },
  },
  data: function () {
    return {
      isActive: false,
      isShow: false,
      content: this.val,
      validation: {
        regexpr: this.validation_pattern,
        status: -1,
      },
    };
  },
  methods: {
    Content() {
      return this.content;
    },
    toggleInput: function () {
      if (!this.content.length > 0) {
        this.isActive = !this.isActive;
        return true;
      }
      return false;
    },
    onInputFocus: function () {
      this.toggleInput();
    },
    onInputBlur: function () {
      if (!this.toggleInput() && this.validation_pattern) {
        if (!this.validation.regexpr.test(this.content)) {
          this.validation.status = 0;
        } else {
          this.validation.status = 1;
        }
      }
    },
    onInputUpdated: function () {
      if (this.content.length > 0 && !this.isActive) {
        this.isActive = true;
      }
    },
    togglePassword: function () {
      this.isShow = !this.isShow;
    },

    getValidationStatus: function () {
      if (this.validation.status === -1) {
        return "input-validation-default";
      } else if (this.validation.status === 0) {
        return "input-validation-invalid";
      } else if (this.validation.status === 1) {
        return "input-validation-valid";
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

  .input-validation {
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
