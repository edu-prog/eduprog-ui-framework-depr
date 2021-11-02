<template>
  <div class="Select">
    <div class="Select-Wrapper" v-if="!isMobileTemplate">
      <MultipleSelect
        :label="label"
        :options="options"
        :max-selected="maxSelected"
        v-model="content"
        @change="$emit('update:modelValue', content)"
      />
    </div>
    <div class="Select-mobile-wrapper" v-else>
      <MultipleMobileSelect
        :label="label"
        v-model="content"
        :options="options"
        :max-selected="maxSelected"
        @change="$emit('update:modelValue', content)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { isMobile } from "mobile-device-detect";
import MultipleMobileSelect from "@/components/Select/MultipleMobileSelect.vue";
import MultipleSelect from "@/components/Select/MultipleSelect.vue";

export default defineComponent({
  components: {
    MultipleMobileSelect,
    MultipleSelect,
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
  setup() {
    const content = ref<Array<string>>([]);
    const isMobileTemplate = ref(isMobile);

    return {
      content,
      isMobileTemplate,
    };
  },
  emit: ["update:modelValue"],
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/color";
@import "../assets/styles/animations";
@import "../assets/styles/font";

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
