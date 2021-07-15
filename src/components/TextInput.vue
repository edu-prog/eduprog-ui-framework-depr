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
    <input
      :type="type === 'password' ? (isShow ? 'text' : 'password') : type"
      :class="[
        'form-field-input-control',
        `input-size-${size}`,
        isActive || content ? 'input-focused' : '',
        input_class,
        getValidationStatus(),
      ]"
      :style="{
        paddingRight:
          validation.status > 0
            ? validation.status > 0 && type === 'password'
              ? '4.25rem'
              : '2.25rem'
            : type === 'password'
            ? '2.75rem'
            : '0.5rem',

        width:
          validation.status > 0
            ? type === 'password'
              ? 'calc(100% - 4.75rem'
              : 'calc(100% - 2.75rem)'
            : type === 'password'
            ? 'calc(100% - 52px)'
            : 'calc(100% - 16px)',
      }"
      v-model="content"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @input="onInputUpdated"
      autocomplete="nope"
      :placeholder="isActive ? mask : ''"
      :maxlength="max_length"
      :readonly="readonly"
      :value="content"
      :autofocus="autofocus"
    />
    <slot></slot>
    <span v-if="validation.status > 0">
      <Icon
        :style="{
          marginLeft: type === 'password' ? '-4rem' : '-2rem',
        }"
        class="input-validation-valid-icon"
        color="#00b92d"
        name="done"
        weight="bold"
      ></Icon>
    </span>
    <span v-if="type === 'password'">
      <Icon
        @click.native="togglePassword"
        class="password-toggler"
        :name="isShow ? 'visibility' : 'visibility_off'"
      />
    </span>

    <div
      :class="[
        'validation-message',
        validation.status === 0 ? 'validation-message-show' : '',
      ]"
      ref="validation_message"
    ></div>
  </div>
</template>

<script>
import { BreakpointsLabel } from "../utils/breakpoins";
import Icon from "./Icon";

export default {
  name: "TextInput",
  model: {
    event: "input",
  },
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
    autofocus: {
      type: Boolean,
      default: false,
    },
    validation_pattern: {
      type: RegExp,
      required: false,
    },
    validation_message: {
      type: String,
      required: false,
      default: "",
    },
  },
  data: function () {
    return {
      isActive: false,
      isShow: false,
      content: this.val,
      forceMaskHide: false,
      validation: {
        regexpr: this.validation_pattern,
        status: -1,
      },
    };
  },
  methods: {
    toggleInput() {
      return (this.isActive = !this.isActive);
    },
    onInputFocus() {
      this.toggleInput();
    },
    onInputBlur: function () {
      if (!this.toggleInput() && this.validation_pattern) {
        const validation_message = this.$refs.validation_message;
        const validation_status = this.validation.regexpr.test(this.content);

        this.validation.status = Number(validation_status);
        validation_message.innerText = !validation_status
          ? this.validation_message
          : "";
      }
    },
    onInputUpdated() {
      this.forceMaskHide = !this.forceMaskHide ? true : this.content.length > 0;
      this.$emit("input", this.content);
    },
    togglePassword() {
      this.isShow = !this.isShow;
    },

    getValidationStatus() {
      if (this.validation.status === -1) {
        return "input-validation-default";
      } else if (this.validation.status === 0) {
        return "input-validation-invalid";
      } else if (this.validation.status === 1) {
        return "input-validation-valid";
      } else {
        throw "Invalid validatation status was setted.";
      }
    },
  },
  computed: {
    slotPassed() {
      return this.$slots.default;
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
    margin-top: 1rem;
    margin-left: 0.5rem;
    pointer-events: none;
    transition: 0.25s ease;
    color: #000000;

    &-focused {
      font-size: 0.625rem;
      margin-top: 0.25rem;
    }
  }

  &-mask {
    font-size: 1rem;
    position: absolute;
    margin-top: 1rem;
    margin-left: 0.5rem;
    color: #333333;
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
        margin-top: 0.75rem;
      }
    }

    &-invalid {
      background-color: $color-invalid;
    }
  }

  .validation-message {
    display: flex;
    color: $color-danger;
    transition: 0.25s;
    opacity: 0;
    flex-direction: flex-start;
    font-size: 0.8125rem;

    &-show {
      transition-delay: 0.1s;
      opacity: 1;
    }
  }

  .password-toggler {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 0.55rem;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.2s ease;
    border-radius: 50%;
    margin-left: -2.5rem;

    &:hover {
      background-color: silver;
    }
  }
}
</style>
