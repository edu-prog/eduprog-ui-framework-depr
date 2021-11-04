<template>
  <Dropdown
    class="Select-dropdown"
    close-on-click
    clearly
    full-view
    v-model="isActive"
  >
    <template #toggle>
      <div class="Select-input">
        <TextInput
          :label="label"
          input-cursor="pointer"
          input-readonly
          :model-value="content"
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
          @click="itemClick(item)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </Dropdown>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import Dropdown from "../Dropdown.vue";
import TextInput from "../TextInput.vue";

export default defineComponent({
  components: {
    Dropdown,
    TextInput,
  },
  props: {
    options: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const content = ref(props.options[0]);
    const isActive = ref(false);

    const itemClick = (itemValue: string) => {
      content.value = itemValue;
      emit("update:modelValue", content.value);
    };

    return {
      content,
      isActive,
      itemClick,
    };
  },
  emits: ["update:modelValue"],
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/animations";

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
      padding: 0.5rem;
      user-select: none;
    }
  }
}
</style>
