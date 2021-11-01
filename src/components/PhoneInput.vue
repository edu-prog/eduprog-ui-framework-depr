<template>
  <TextInput
    v-model="phoneNumber"
    :label="label"
    :max-length="18"
    :input-required="required === true"
    :validation-message="validationMessage"
    :validation-pattern="/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/"
    input-type="tel"
    :mask="mask"
    @input="onPhoneInput"
    @keydown="onPhoneKeyDown"
    @paste="onPhonePaste"
    :autofocus="autofocus"
  />
</template>

<script lang="ts">
import TextInput from "./TextInput.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    TextInput,
  },
  props: {
    label: {
      type: String,
      required: false,
      default: "Номер телефона",
    },
    validationMessage: {
      type: String,
      required: false,
      default: "",
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    mask: {
      type: String,
      default: "",
      required: false,
    },
  },
  setup(props, { emit }) {
    const phoneNumber = ref(props.modelValue);

    const onPhoneInput = (event: InputEvent) => {
      const { selectionStart } = event.target as HTMLInputElement;
      let inputNumbersValue = phoneNumber.value.replace(/\D/g, "");
      let formattedInputValue = "";

      if (!inputNumbersValue) {
        phoneNumber.value = event.data === "+" ? "+" : "";
        return;
      }

      if (phoneNumber.value.length !== selectionStart) {
        if (event.data && /\D/g.test(event.data)) {
          phoneNumber.value = inputNumbersValue;
        }
        return;
      }

      if (["7", "8", "9"].includes(inputNumbersValue[0])) {
        if (inputNumbersValue[0] === "9") {
          inputNumbersValue = `7${inputNumbersValue}`;
        }
        const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
        formattedInputValue = `${firstSymbols} `;

        if (inputNumbersValue.length > 1) {
          formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
        }
      } else {
        formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
      }
      phoneNumber.value = formattedInputValue;
      emit("update:modelValue", phoneNumber.value);
    };
    const onPhoneKeyDown = (event: any) => {
      if (event) {
        const inputValue = phoneNumber.value.replace(/\D/g, "");

        if (event.code === "Backspace" && inputValue.length === 1) {
          phoneNumber.value = "";
        } else if (
          ["Delete", "Backspace"].includes(event.code) &&
          inputValue.length > 1
        ) {
          let symToClear = "";
          if (event.code === "Backspace") {
            symToClear = phoneNumber.value[event.target?.selectionStart - 1];
          } else if (event.code === "Delete") {
            symToClear = phoneNumber.value[event.target?.selectionStart];
          }

          if (symToClear && /\D/g.test(symToClear)) {
            event.preventDefault();
          }
        }
      }
    };
    const onPhonePaste = (event: ClipboardEvent) => {
      const input = event.target as HTMLInputElement;
      const inputNumbersValue = input.value.replace(/\D/g, "");
      const pasted = event.clipboardData;

      if (pasted) {
        const pastedText = pasted.getData("Text");
        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
      emit("update:modelValue", phoneNumber.value);
    };

    return {
      phoneNumber,
      onPhoneInput,
      onPhoneKeyDown,
      onPhonePaste,
    };
  },
  emits: ["update:modelValue"],
});
</script>
