<template>
  <div class="Autocomplete-Input">
    <div class="Autocomplete-Input-pc">
      <TextInput v-model="value" :label="label" type="text" @input="onInput" />

      <div v-if="isActive" class="Autocomplete-Input-dropdown">
        <div v-for="(item, index) in items" :key="index" class="Autocomplete-Input-dropdown-item">
          {{ item }}
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
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value: "",
      isActive: false
    };
  },
  components: {
    TextInput
  },
  methods: {
    onInput() {
      this.isActive = Boolean(this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.Autocomplete-Input {
  &-pc {
    .Autocomplete-Input-dropdown {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);

      &-item {
        padding: 0.5rem 0.5rem;
        cursor: pointer;

        &:hover {
          background-color: $color-platinum;
        }
      }
    }
  }
}
</style>