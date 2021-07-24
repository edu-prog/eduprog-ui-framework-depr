<template>
  <div class="TextInput-field">
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
        :autocomplete="autocomplete"
        :placeholder="isActive ? mask : ''"
        :maxlength="max_length"
        :readonly="readonly"
        :value="content"
        ref="textInput_"
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
        <span @click="togglePassword">
          <span v-if="isShow" class="password-toggler">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              />
            </svg>
          </span>
          <span v-else class="password-toggler">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path
                d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
                fill="none"
              />
              <path
                d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
              />
            </svg>
          </span>
        </span>
      </span>
    </div>

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
    autocomplete: {
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
    forceValidate() {
      const validation_message = this.$refs.validation_message;
      const validation_status = this.validation.regexpr.test(this.content);

      this.validation.status = Number(validation_status);
      validation_message.innerText = !validation_status
        ? this.validation_message
        : "";
    },
    toggleInput() {
      return (this.isActive = !this.isActive);
    },
    onInputFocus() {
      this.toggleInput();
    },
    onInputBlur: function () {
      if (!this.toggleInput() && this.validation_pattern) {
        this.forceValidate();
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
  mounted() {
    if (this.autofocus) {
      this.$refs.textInput_.focus();
    }
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

.form-field {
  margin: 5px 0;
  position: relative;

  &-label {
    position: absolute;
    font-size: 1rem;
    top: 50%;
    transform: translateY(-50%);
    left: 0.5rem;
    pointer-events: none;
    transition: 0.25s ease;
    color: #000000;

    &-focused {
      font-size: 0.625rem;
      top: 0.625rem;
    }
  }

  &-mask {
    font-size: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
    &-valid-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &-invalid {
      background-color: $color-invalid;
    }
  }

  .password-toggler {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.2s ease;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    right: 0.5rem;

    &:hover {
      background-color: silver;
    }
  }
}

.validation-message {
  position: relative;
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
</style>
