<template>
  <div>
    <div
      v-for="(option, index) in options"
      :key="index"
      class="CheckboxBlock-container"
    >
      <div class="CheckboxBlock-container-item">
        <CheckboxBlockButton
          :data-value="option.content"
          :icon="option.icon"
          @click="itemSelect(option.content)"
        >
          {{ option.content }}
        </CheckboxBlockButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CheckboxBlockButton from "./CheckboxBlockButton.vue";
import { defineComponent, PropType, ref } from "vue";

interface ICheckboxBlockOptions {
  icon: File;
  content: string;
}

export default defineComponent({
  components: {
    CheckboxBlockButton,
  },
  props: {
    options: {
      type: Array as PropType<Array<ICheckboxBlockOptions>>,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const content = ref(Array<string>());
    const itemSelect = (itemValue: string) => {
      if (!content.value.includes(itemValue)) {
        content.value.push(itemValue);
      } else {
        content.value.splice(content.value.indexOf(itemValue), 1);
      }

      emit("update:modelValue", content.value);
    };

    return { content, itemSelect };
  },
  emits: ["update:modelValue"],
});
</script>

<style lang="scss" scoped>
.CheckboxBlock-container {
  display: flex;
  width: 100%;

  &-item {
    max-width: 100%;
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
