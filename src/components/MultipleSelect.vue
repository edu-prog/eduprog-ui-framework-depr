<template>
  <div class="Select">
    <div class="Select-Wrapper" v-if="!isMobileTemplate">
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
                :disabled="
                  content.length >= maxSelected && !content.includes(item)
                "
              >
                {{ item }}
              </Checkbox>
            </div>
          </div>
        </template>
      </Dropdown>
    </div>
    <div class="Select-mobile-wrapper" v-else>
      <MultipleMobileSelect
        :label="label"
        @change="mobileChange"
        v-model="content"
        :options="options"
        :max-selected="maxSelected"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import TextInput from "@/components/TextInput.vue";
import Dropdown from "@/components/Dropdown.vue";
import Checkbox from "@/components/Checkbox.vue";
import { isMobile } from "mobile-device-detect";
import MultipleMobileSelect from "@/components/Select/MultipleMobileSelect.vue";

export default defineComponent({
  components: {
    TextInput,
    Dropdown,
    Checkbox,
    MultipleMobileSelect,
  },
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    options: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
    modelValue: {
      type: String,
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
    const content = ref<Array<string>>([]);
    const isActive = ref(false);
    const isMobileTemplate = ref(isMobile);

    const itemClick = (itemValue: string) => {
      if (content.value.includes(itemValue)) {
        content.value.splice(content.value.indexOf(itemValue), 1);
      } else {
        content.value.push(itemValue);
      }

      emit("update:modelValue", content.value);
    };

    const mobileChange = () => {
      emit("update:modelValue", content.value);
    };

    return {
      content,
      isActive,
      isMobileTemplate,
      itemClick,
      mobileChange,
    };
  },
  emit: ["update:modelValue"],
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.Select {
  width: 100%;

  &-input {
    cursor: pointer !important;

    &-right {
      display: flex;
      transition: transform 0.25s ease;
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
