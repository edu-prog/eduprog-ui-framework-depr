<template>
  <div class="Autocomplete-Input">
    <div v-if="!IsMobile" class="Autocomplete-Input-pc" v-on:keydown.down="onKeyDown" v-on:keydown.up="onKeyUp"
         v-on:keyup.enter="onKeyEnter">
      <TextInput ref="TextInput" v-model="value" :label="label" type="text"
                 @input="onInput"
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

    <div v-else class="Autocomplete-Input-mobile">
      <TextInput ref="TextInput" v-model="value" :label="label" type="text" @click.native="onInputFocused" />

      <div v-if="isActive" class="Autocomplete-Input-mobile-wrapper">
        <transition-group name="pop" mode="out-in" appear>
          <div v-on-clickaway="clearFocusState" class="Autocomplete-Input-mobile-modal" :key="2">
            <TextInput v-model="value" :label="label" autofocus type="text" @input="onInput" />

            <div class="Autocomplete-Input-mobile-modal-options" tabindex="0">
              <div v-for="(item, index) in resultItems" :key="index"
                   class="Autocomplete-Input-mobile-modal-options-item"
                   @click="onClickToItem" v-html="item">
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import { mixin as clickaway } from "vue-clickaway";
import TextInput from "./TextInput";

export default {
  name: "AutocompleteInput",
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  directives: {
    isMobile
  },
  mixins: [clickaway],
  data() {
    return {
      value: "",
      isActive: false,
      resultItems: [],
      focusedItem: 0,
      IsMobile: isMobile
    };
  },
  components: {
    TextInput
  },
  methods: {
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    },
    clearFocusState() {
      this.isActive = false;
      this.focusedItem = 0;
      this.resultItems = [];
    },
    onInput() {
      this.isActive = this.IsMobile || Boolean(this.value);

      const regex_pattern = new RegExp(this.escapeRegExp(this.value.trim()), "i");

      this.resultItems = this.options.filter(item =>
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
        if (this.focusedItem < this.options.length) {
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
    },
    onInputFocused() {
      this.isActive = true;
      this.resultItems = this.options.slice();
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

  &-mobile {
    position: relative;

    &-wrapper {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.25);
      top: 0;
      width: 100%;
      height: 100%;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &-modal {
      margin: 100px auto;
      background-color: $color-white;
      width: 85%;
      height: 100%;
      padding: 1rem;
      border-radius: 0.5rem;

      &::before {
        content: "";
        display: block;
        width: 40px;
        height: 3px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: $color-white;
        top: 91px;
      }

      &-options {
        overflow-y: scroll;
        max-height: calc(100% - 210px);

        &-item {
          padding: 0.5rem;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>