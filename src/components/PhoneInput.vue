<template>
  <TextInput
    :label="label"
    @input.native="onPhoneInput"
    @keydown.native="onPhoneKeyDown"
    @paste.native="onPhonePaste"
    type="tel"
    v-model="phone_number"
    :val="phone_number"
    ref="phone_input"
    :validation_pattern="validation_pattern"
    :validation_message="validation_message"
    :max_length="18"
    :required="required === true"
    :autofocus="autofocus"
  />
</template>

<script>
import TextInput from './TextInput.vue';

export default {
  name: 'PhoneInput',
  components: {
    TextInput,
  },
  model: {
    event: 'input',
  },
  props: {
    label: {
      type: String,
      required: false,
      default: 'Номер телефона',
    },
    validation_pattern: {
      type: RegExp,
      required: false,
    },
    validation_message: {
      type: String,
      required: false,
      default: '',
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
  },
  data() {
    return {
      phone_number: '',
    };
  },
  methods: {
    onPhoneInput(event) {
      this.$emit('input', this.phone_number);

      const input = this.$refs.phone_input;
      const { selectionStart } = event.target;
      let inputNumbersValue = input.content.replace(/\D/g, '');
      let formattedInputValue = '';

      if (!inputNumbersValue) {
        input.content = event.data === '+' ? '+' : '';
        return input.content;
      }

      if (input.content.length !== selectionStart) {
        if (event.data && /\D/g.test(event.data)) {
          input.content = inputNumbersValue;
        }
        return null;
      }

      if (['7', '8', '9'].includes(inputNumbersValue[0])) {
        if (inputNumbersValue[0] === '9') {
          inputNumbersValue = `7${inputNumbersValue}`;
        }
        const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
        formattedInputValue = `${firstSymbols} `;
        input.content = `${firstSymbols} `;

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
      input.content = formattedInputValue;

      return this.phone_number;
    },
    onPhoneKeyDown(event) {
      const inputValue = this.phone_number.replace(/\D/g, '');

      if (event.keyCode === 8 && inputValue.length === 1) {
        this.phone_number = '';
      } else if ([8, 46].includes(event.keyCode) && inputValue.length > 1) {
        let symToClear = '';
        if (event.keyCode === 8) {
          symToClear = this.phone_number[event.target.selectionStart - 1];
        } else if (event.keyCode === 46) {
          symToClear = this.phone_number[event.target.selectionStart];
        }

        if (symToClear && /\D/g.test(symToClear)) {
          event.preventDefault();
        }
      }
    },

    onPhonePaste(event) {
      const input = event.target;
      const inputNumbersValue = input.value.replace(/\D/g, '');
      const pasted = event.clipboardData || window.clipboardData;

      if (pasted) {
        const pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    },
  },
};
</script>
