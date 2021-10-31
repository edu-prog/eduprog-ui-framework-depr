<template>
  <div class="Autocomplete-Input">
    <div
      v-if="!isMobileTemplate"
      class="Autocomplete-Input-pc"
      @keydown.down="onKeyDown"
      @keydown.up="onKeyUp"
      @keyup.enter="onKeyEnter"
    >
      <TextInput
        ref="TextInput"
        v-model="content"
        :label="label"
        input-type="text"
        @input="onInput"
      />

      <transition appear name="fade">
        <div
          v-if="isActive"
          class="Autocomplete-Input-dropdown"
          v-click-away="clearFocusState"
        >
          <div class="Autocomplete-Input-dropdown-wrapper">
            <div
              v-for="(item, index) in resultItems"
              :key="index"
              :ref="
                (el) => {
                  if (el) autocompleteItems[index] = el;
                }
              "
              class="Autocomplete-Input-dropdown-item"
              tabindex="0"
              @click="onClickToItem(item)"
              v-html="item"
            />
          </div>
        </div>
      </transition>
    </div>

    <div v-else class="Autocomplete-Input-mobile">
      <TextInput
        ref="TextInput"
        v-model="content"
        :label="label"
        type="text"
        @click="onInputFocused"
      />

      <div v-if="isActive" class="Autocomplete-Input-mobile-wrapper">
        <transition appear mode="in-out" name="slide">
          <div
            v-click-away="clearFocusState"
            class="Autocomplete-Input-mobile-modal"
          >
            <TextInput
              v-model="content"
              :label="label"
              autofocus
              type="text"
              @input="onInput"
            />

            <div class="Autocomplete-Input-mobile-modal-options" tabindex="0">
              <div
                v-for="(item, index) in resultItems"
                :key="index"
                class="Autocomplete-Input-mobile-modal-options-item"
                @click="onClickToItem(item)"
                v-html="item"
              ></div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { isMobile } from "mobile-device-detect";
import { directive } from "vue3-click-away";
import TextInput from "../components/TextInput.vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  directives: {
    ClickAway: directive,
  },
  components: {
    TextInput,
  },
  setup(props, { emit }) {
    const content = ref<string>(props.modelValue);
    const isActive = ref(false);
    const resultItems = ref(Array<string>());
    const focusedItem = ref(0);
    const isMobileTemplate = ref(isMobile);
    const autocompleteItems = ref(Array<HTMLElement>());
    const setComponentValue = (value: string) => {
      content.value = value;
      emit("update:modelValue", content.value);
    };
    const clearFocusState = () => {
      isActive.value = false;
      focusedItem.value = 0;
      resultItems.value = Array<string>();
    };
    const escapeRegExp = (value: string): string => {
      return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };
    const onClickToItem = (itemValue: string) => {
      setComponentValue(
        itemValue.replace("<strong>", "").replace("</strong>", "")
      );
      clearFocusState();
    };
    const onInput = () => {
      isActive.value = isMobile || Boolean(content.value);

      const regex_pattern = new RegExp(escapeRegExp(content.value.trim()), "i");

      resultItems.value = props.options.filter((item) =>
        regex_pattern.test(item)
      );

      resultItems.value = resultItems.value.map((item: string) => {
        let selectedSubstrIndex = item
          .toLowerCase()
          .indexOf(content.value.toLowerCase());
        let selectedString = item.substring(
          selectedSubstrIndex,
          selectedSubstrIndex + content.value.length
        );

        return item.replace(
          regex_pattern,
          `<strong>${selectedString}</strong>`
        );
      });

      emit("update:modelValue", content.value);
    };

    const onKeyUp = (event: Event) => {
      if (isActive.value) {
        event.preventDefault();
        if (focusedItem.value > 1) {
          focusedItem.value--;
          autocompleteItems.value[focusedItem.value - 1].focus();
        }
      }
    };
    const onKeyDown = (event: Event) => {
      if (isActive.value) {
        event.preventDefault();
        if (focusedItem.value < resultItems.value.length) {
          focusedItem.value++;
          autocompleteItems.value[focusedItem.value - 1].focus();
        }
      }
    };
    const onKeyEnter = () => {
      if (isActive.value) {
        const content = resultItems.value[focusedItem.value - 1]
          .replace("<strong>", "")
          .replace("</strong>", "");
        setComponentValue(content);

        clearFocusState();
      }
    };
    const onInputFocused = () => {
      isActive.value = true;
      resultItems.value = props.options.slice();
    };
    const setAutocompleteItemRef = (el: HTMLElement) => {
      if (el) {
        autocompleteItems.value.push(el);
      }
    };

    return {
      content,
      isActive,
      resultItems,
      focusedItem,
      isMobileTemplate,
      autocompleteItems,
      onClickToItem,
      clearFocusState,
      onInput,
      onKeyUp,
      onKeyDown,
      onKeyEnter,
      onInputFocused,
      setAutocompleteItemRef,
    };
  },
  emits: ["update:modelValue"],
});
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
      max-height: 190px;
      margin-top: 0.5rem;

      &-wrapper {
        margin: 0.25rem 0;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 0.25rem;
          height: 0.25rem;
        }

        &::-webkit-scrollbar-thumb {
          background-color: $color-gray;
          border-radius: 0.5rem;
        }
      }

      &-item {
        padding: 0.5rem 0.5rem;
        cursor: pointer;
        outline: none;

        &:hover,
        &:focus {
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
      z-index: 10;
    }

    &-modal {
      margin: 100px auto;
      background-color: $color-white;
      width: 85%;
      height: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      transition: transform 0.5s ease;

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
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

.slide-enter-from,
.slide-leave-from {
  transform: translateY(100%);
}

.slide-enter-to,
.slide-leave-to {
  transform: translateY(0%);
}
</style>
