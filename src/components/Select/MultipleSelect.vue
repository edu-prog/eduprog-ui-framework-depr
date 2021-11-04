<template>
  <Dropdown class="Select-dropdown" clearly full-view v-model="isActive">
    <template #toggle>
      <div class="Select-input">
        <TextInput
          :label="label"
          input-cursor="pointer"
          input-readonly
          :model-value="content.join(', ')"
        >
          <template #additional-right>
            <div
              :class="[
                'Select-input-right',
                isActive ? 'Select-input-right-active' : '',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#9fa3a7"
              >
                <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                <path
                  d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
                />
              </svg>
            </div>
          </template>
        </TextInput>
      </div>
    </template>

    <template #content>
      <div class="Select-dropdown">
        <div
          class="Select-dropdown-item"
          v-for="(item, index) in options"
          :key="index"
        >
          <Checkbox
            position="left"
            style="width: 100%; height: 100%; padding: 0.5rem"
            type="main"
            :checked="content.includes(item)"
            @click="itemClick(item)"
            :disabled="content.length >= maxSelected && !content.includes(item)"
          >
            {{ item }}
          </Checkbox>
        </div>
      </div>
    </template>
  </Dropdown>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import Dropdown from "../components/Dropdown.vue";
import TextInput from "../components/TextInput.vue";
import Checkbox from "../components/Checkbox.vue";

export default defineComponent({
  components: {
    Dropdown,
    TextInput,
    Checkbox,
  },
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
      type: Array as PropType<Array<string>>,
    },
    maxSelected: {
      type: [Number, String],
      required: false,
      validator: (value: number | string): boolean => {
        if (typeof value === "string") {
          return /^\d+$/.test(value);
        } else {
          return true;
        }
      },
    },
  },
  setup(props, { emit }) {
    const content = ref<Array<string>>(Array<string>());
    const isActive = ref(false);

    const itemClick = (itemValue: string) => {
      if (content.value.includes(itemValue)) {
        content.value.splice(content.value.indexOf(itemValue), 1);
      } else {
        content.value.push(itemValue);
      }

      emit("update:modelValue", content.value);
    };

    return {
      content,
      isActive,
      itemClick,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/animations";
@import "../../assets/styles/color";
@import "../../assets/styles/font";

.Select {
  width: 100%;

  &-input {
    cursor: pointer !important;

    &-right {
      display: flex;
      transition: transform $transition-duration $transition-type;
      &-active {
        transform: rotate(180deg);
      }
    }
  }

  &-dropdown {
    width: 100%;

    &-item {
      cursor: pointer;
      user-select: none;
    }
  }

  &-mobile {
    &-control select {
      background-color: $color-platinum;
      width: 100%;
      outline: none;
      border-color: transparent;
      border-radius: 0.5rem;
      transition: background-color 0.2s ease;
      padding: 0.5rem;
      height: 53px;
      font-family: $font-family;
      font-size: 1rem;
      color: transparent;
    }
  }
}
</style>
