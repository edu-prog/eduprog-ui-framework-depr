<template>
  <div class="TextInput">
    <div class="TextInput-wrapper">
      <div
        :class="[
          'TextInput-label',
          isActive || content || modelValue ? 'TextInput-label-active' : '',
        ]"
      >
        {{ label }}
      </div>

      <div class="TextInput-field">
        <input
          :class="[
            'TextInput-control',
            !validatorStatus && 'TextInput-control-invalid',
          ]"
          :style="{ cursor: inputCursor }"
          :type="inputType"
          :maxlength="maxLength"
          :readonly="inputReadonly"
          :placeholder="isActive ? mask : ''"
          @blur="inputBlur"
          @focus="inputFocus"
          @input="inputUpdate($event.target.value)"
          @click="$emit('click')"
          :value="modelValue"
          :v-autofocus="inputAutofocus"
        />
      </div>

      <div class="TextInput-additional TextInput-additional-right">
        <slot name="additional-right"></slot>
      </div>
    </div>
    <div
      :class="[
        'TextInput-validator',
        !validatorStatus && 'TextInput-validator-show',
      ]"
    >
      {{ !validatorStatus ? validationMessage : "" }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    validationPattern: {
      type: RegExp,
      required: false,
    },
    validationMessage: {
      type: String,
      required: false,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
      validator: (value: string): boolean => {
        return ["text", "tel", "email", "password"].includes(value);
      },
    },
    modelValue: {
      type: String,
      required: false,
      default: "",
    },
    inputRequired: {
      type: Boolean,
      default: false,
      required: false,
    },
    inputAutofocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    inputReadonly: {
      type: Boolean,
      required: false,
      default: false,
    },
    inputCursor: {
      type: String,
      required: false,
      default: "text",
      validator: (value: string): boolean => {
        return ["text", "pointer"].includes(value);
      },
    },
    maxLength: {
      type: [Number, String],
      validator: (value: number | string): boolean => {
        if (typeof value === "string") {
          return /^\d+$/.test(value);
        } else {
          return true;
        }
      },
    },
    mask: {
      type: String,
      required: false,
      default: "",
    },
  },
  directives: {
    autofocus: {
      mounted: (element: HTMLElement): void => {
        console.log(element);
        element.focus();
      },
    },
  },
  setup(props, { emit }) {
    const content = ref(props.modelValue);
    const isActive = ref(false);
    const validatorStatus = ref(true);

    if (content.value.length > 0) {
      isActive.value = true;
    }

    const toggleActive = (): void => {
      if (content.value.length < 1) {
        isActive.value = !isActive.value;
      }
    };

    const inputFocus = (): void => {
      toggleActive();
    };

    const inputBlur = (): void => {
      toggleActive();

      if (!props.validationMessage || !props.validationPattern) return;

      inputValidate();
    };

    const inputValidate = (): void => {
      if (props.validationPattern) {
        validatorStatus.value = props.validationPattern.test(content.value);
      }
    };

    const inputUpdate = (value: string): void => {
      content.value = value;
      emit("update:modelValue", value);
    };

    return {
      isActive,
      validatorStatus,
      content,
      inputFocus,
      inputBlur,
      inputUpdate,
    };
  },
  emits: ["click", "update:modelValue"],
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/color";
@import "../assets/styles/animations";

.TextInput {
  &-wrapper {
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    position: relative;
  }

  &-label {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translate(0, -50%);
    left: 1rem;
    font-size: 1.5rem;
    pointer-events: none;
    transition: all $transition-duration $transition-type;
    user-select: none;

    &-active {
      top: 1rem;
      font-size: 1rem;
    }
  }

  &-control {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 3.85rem;
    font-size: 1.5rem;
    vertical-align: top;
    background-color: $color-platinum;
    transition: background-color $transition-duration $transition-type;
    border-radius: 0.5rem;
    border: 0;
    outline: none;
    padding: 2rem 3rem 1rem 1rem;
    font-family: inherit;

    &-invalid {
      background-color: $color-invalid;
    }

    &:hover {
      background-color: darken($color-platinum, 10%);
    }

    &:focus {
      border: 1px solid #9d9d9d;
      background-color: $color-platinum;
    }
  }

  &-validator {
    color: $color-danger;
    transition: all $transition-duration $transition-type;
    font-size: 1rem;
    opacity: 0;

    &-show {
      transition-delay: 0.1s;
      opacity: 1;
    }
  }

  &-additional {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    &-right {
      right: 1rem;
    }
  }
}
</style>
