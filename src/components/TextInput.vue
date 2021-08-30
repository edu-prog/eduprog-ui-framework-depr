<template>
  <div class="TextInput-field">
    <div class="form-field">
      <span class="additional-content-left">
        <slot name="additional_left"></slot>
      </span>
      <span
          :class="[
          'form-field-label',
          isActive || content ? 'form-field-label-focused' : '',
        ]"
      >
        {{ label }}
      </span>
      <input
          ref="textInput"
          v-model="content"
          :autocomplete="autocomplete"
          :class="[
          'form-field-input-control',
          `input-size-${size}`,
          isActive || content ? 'input-focused' : '',
          input_class,
          getValidationStatus(),
        ]"
          :maxlength="max_length"
          :placeholder="isActive ? mask : ''"
          :readonly="readonly"
          :style="{
          paddingRight:
            validation.status > 0
              ? validation.status > 0 && type === 'password'
                ? '4.25rem'
                : '2.25rem'
              : type === 'password'
              ? '2.75rem'
              : '0.5rem',
        }"
          :type="type === 'password' ? (isShow ? 'text' : 'password') : type"
          :value="content"
          @blur="onInputBlur"
          @click="$emit('click')"
          @focus="onInputFocus"
          @input="onInputUpdated"
      />
      <span :style="{right: `${additional_content_right}rem`}" class="additional-content-right">
        <slot name="additional_right"></slot>
      </span>

      <span v-if="validation.status > 0">
        <svg :style="type === 'password' && {right: '2.5rem'}"
             class="validation-icon"
             height="24px"
             viewBox="0 0 24 24"
             width="24px"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39
                   1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3
                   7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z" fill="#00b92d"
          />
        </svg>
      </span>
      <span v-if="type === 'password'">
        <span @click="togglePassword">
          <span v-if="isShow" class="password-toggle">
            <svg
                fill="#000000"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"/>
                <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11
                    7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76
                    0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66
                    0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          </span>
          <span v-else class="password-toggle">
            <svg
                fill="#000000"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
              <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92
                      2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4
                      0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28
                      2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55
                      0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53
                      9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0
                      .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5
                      0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
            </svg>
          </span>
        </span>
      </span>
    </div>

    <div
        ref="validationMessage"
        :class="[
        'validation-message',
        validation.status === 0 ? 'validation-message-show' : '',
      ]"
    ></div>
  </div>
</template>

<script>
import {BreakpointsLabel} from "../utils/breakpoins";

export default {
  name: "TextInput",
  model: {
    event: "input"
  },
  props: {
    type: {
      type: String,
      required: true
    },
    val: {
      type: String,
      required: false,
      default: ""
    },
    label: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "m",
      validator(value) {
        return BreakpointsLabel.includes(value);
      }
    },
    mask: {
      type: String
    },
    max_length: {
      type: Number
    },
    input_class: {
      type: String,
      required: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    validation_pattern: {
      type: RegExp,
      required: false
    },
    validation_message: {
      type: String,
      required: false,
      default: ""
    },
    autocomplete: {
      type: String,
      required: false,
      default: ""
    },
    additional_content_right: {
      type: Number,
      required: false,
      default: 0.5,
    },
  },
  data() {
    return {
      isActive: false,
      isShow: false,
      content: this.val,
      forceMaskHide: false,
      validation: {
        regexpr: this.validation_pattern,
        status: -1
      }
    };
  },
  methods: {
    forceValidate() {
      const {validationMessage} = this.$refs;
      const validationStatus = this.validation.regexpr.test(this.content);

      this.validation.status = Number(validationStatus);
      validationMessage.innerText = !validationStatus
          ? this.validation_message
          : "";
    },
    toggleInput() {
      this.isActive = !this.isActive;
      return this.isActive;
    },
    onInputFocus() {
      this.toggleInput();
    },
    onInputBlur() {
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
      }
      if (this.validation.status === 0) {
        return "input-validation-invalid";
      }
      if (this.validation.status === 1) {
        return "input-validation-valid";
      }
      throw new Error("Invalid validatation status was setted.");
    },
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.textInput.focus();
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.form-field {
  margin: 5px 0;
  position: relative;
  display: flex;

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
    font-family: $font-family;
    box-sizing: border-box;
    width: 100%;
    height: 3.125rem;
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

  .password-toggle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.2s ease;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    right: 0.5rem;

    &:hover {
      background-color: darken($color-platinum, 15%);
    }
  }
}

.additional-content {
  &-left {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &-right {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.validation {
  &-message {
    position: relative;
    display: flex;
    color: $color-danger;
    transition: 0.25s;
    opacity: 0;
    font-size: 0.8125rem;

    &-show {
      transition-delay: 0.1s;
      opacity: 1;
    }
  }

  &-icon {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
