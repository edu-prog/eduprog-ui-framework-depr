<template>
  <div class="Autocomplete-Input">
    <div class="Autocomplete-Input-pc" v-on:keyup.down="onKeyDown" v-on:keyup.up="onKeyUp">
      <TextInput ref="TextInput" v-model="value" :label="label" type="text" @input="onInput"
                  />

      <div v-if="isActive" class="Autocomplete-Input-dropdown">
        <div v-for="(item, index) in resultItems" :key="index" :tabindex="index + 1"
             class="Autocomplete-Input-dropdown-item" @click="onClickToItem" v-html="item">
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
    };
  },
  components: {
    TextInput
  },
  methods: {
    onInput() {
      this.isActive = Boolean(this.value) &&
        (this.resultItems = this.items.filter(item => item.includes(this.value))) &&
        (this.resultItems = this.resultItems.map(item => {
          return item.replace(this.value, `<b>${this.value}</b>`)
        }));
    },
    onClickToItem(event) {
      this.$refs.TextInput.content = event.target.innerText;
      this.isActive = false;
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

        &:hover {
          background-color: $color-platinum;
        }

        &:focus {
          background-color: $color-platinum;
        }
      }
    }
  }
}
</style>