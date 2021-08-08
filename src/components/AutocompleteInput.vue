<template>
  <div class="Autocomplete-Input">
    <div class="Autocomplete-Input-pc" v-on:keydown.down="onKeyDown" v-on:keydown.up="onKeyUp"
         v-on:keyup.enter="onKeyEnter">
      <TextInput ref="TextInput" v-model="value" :label="label" type="text" @input="onInput"
      />

      <div v-if="isActive" class="Autocomplete-Input-dropdown">
        <div v-for="(item, index) in resultItems" :key="index"
             ref="autocompleteItems"
             class="Autocomplete-Input-dropdown-item"
             tabindex="0"
             @click="onClickToItem" v-html="item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput";

export default {
  name: "AutocompleteInput",
  props: {
    label: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      value: "",
      isActive: false,
      resultItems: [],
      focusedItem: 0
    };
  },
  components: {
    TextInput
  },
  methods: {
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
    },
    clearFocusState() {
      this.isActive = false;
      this.focusedItem = 0;
      this.resultItems = [];
    },
    onInput() {
      this.isActive = Boolean(this.value);
      const regex_pattern = new RegExp(this.escapeRegExp(this.value), "i");

      this.resultItems = this.items.filter(item =>
        regex_pattern.test(item));

      this.resultItems = this.resultItems.map(item => {
        return item.replace(regex_pattern, `<strong>${this.value}</strong>`);
      });

      this.$emit("input", this.value);
    },
    setComponentValue(value) {
      this.$refs.TextInput.content = value;
      this.value = value;
      this.$emit("input", this.value);
    },
    onClickToItem(event) {
      this.setComponentValue(event.target.innerText);
      this.clearFocusState();
    },
    onKeyUp(event) {
      if (this.isActive) {
        event.preventDefault();
        if (this.focusedItem > 1) {
          this.focusedItem--;
          this.$refs.autocompleteItems[this.focusedItem - 1].focus();
        }
      }
    },
    onKeyDown(event) {
      if (this.isActive) {
        event.preventDefault();
        if (this.focusedItem < this.items.length) {
          this.focusedItem++;
          this.$refs.autocompleteItems[this.focusedItem - 1].focus();
        }
      }
    },
    onKeyEnter() {
      if (this.isActive) {
        const content = this.resultItems[this.focusedItem - 1].replace("<strong>", "")
          .replace("</strong>", "");
        this.setComponentValue(content);

        this.clearFocusState();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.Autocomplete-Input {
  position: relative;

  &-pc {
    .Autocomplete-Input-dropdown {
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
      z-index: 10;
      background-color: $color-white;

      &-item {
        padding: 0.5rem 0.5rem;
        cursor: pointer;
        outline: none;

        &:hover, &:focus {
          background-color: $color-platinum;
        }
      }
    }
  }
}
</style>