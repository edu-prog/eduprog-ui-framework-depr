<template>
  <TextInput
    label="Номер телефона"
    @input="onPhoneInput"
    @keydown="onPhoneKeyDown"
    @paste="onPhonePaste"
    type="tel"
  />
</template>

<script>
import TextInput from "./TextInput";

export default {
  name: "PhoneInput",
  components: {
    TextInput,
  },
  data: function () {
    return {
      phone_number: String,
    };
  },
  methods: {
    onPhoneInput: function (event) {
      const input = event.target;
      const selectionStart = input.selectionStart;
      let inputNumbersValue = input.value.replace(/\D/g, "");
      let formattedInputValue = "";

      if (!inputNumbersValue) {
        return (input.value = "");
      }

      if (input.value.length !== selectionStart) {
        if (event.data && /\D/g.test(event.data)) {
          input.value = inputNumbersValue;
        }
        return;
      }

      if (["7", "8", "9"].includes(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] === "9")
          inputNumbersValue = "7" + inputNumbersValue;
        let firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
          formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      } else {
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
    },
    onPhoneKeyDown: function (event) {
      const inputValue = event.target.value.replace(/\d/g, "");

      if (event.keyCode === 8 && inputValue.length === 1) {
        event.target.value = "";
      }
    },
    onPhonePaste: function (event) {
      const input = event.target;
      const inputNumbersValue = input.value.replace(/\D/g, "");
      const pasted = event.clipboardData || window.clipboardData;

      if (pasted) {
        const pastedText = pasted.getData("Text");
        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    },
  },
};
</script>

<style scoped></style>
