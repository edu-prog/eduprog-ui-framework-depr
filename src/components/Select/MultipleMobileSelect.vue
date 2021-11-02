<template>
  <div class="Select-mobile">
    <div class="Select-mobile-field">
      <select
        v-model="content"
        class="Select-mobile-control"
        multiple
        size="1"
        @change="mobileSelected"
      >
        <option
          v-for="(item, index) in options"
          :key="index"
          :selected="item.includes(options[0])"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
    </div>

    <div
      :class="[
        'Select-mobile-label',
        (isActive || content.length > 0) && 'Select-mobile-label-active',
      ]"
    >
      {{ label }}
    </div>

    <div class="Select-mobile-value">
      {{ content.join(", ") }}
    </div>

    <div class="Select-mobile-right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#9fa3a7"
      >
        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

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
    const content = ref<Array<string>>([]);
    const isActive = ref(false);
    const mobileSelected = () => {
      console.log(content.value);
      if (content.value.length > 0) {
        isActive.value = !isActive.value;
      }
      if (content.value.length > Number(props.maxSelected)) {
        content.value.pop();
      }
      emit("update:modelValue", content.value);
    };

    return {
      isActive,
      mobileSelected,
      content,
    };
  },
  emits: ["update:modelValue"],
});
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";

.Select-mobile {
  position: relative;
  box-sizing: border-box;

  &-control {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 3.85rem;
    font-size: 1.5rem;
    vertical-align: top;
    background-color: $color-platinum;
    transition: background-color $transition-duration $transition-type;
    border-radius: 0.5rem;
    border: 0;
    outline: none;
    padding: 2rem 3rem 1rem 1rem;
    font-family: inherit;
    color: transparent;

    &:hover {
      background-color: darken($color-platinum, 10%);
    }

    &:focus {
      border: 1px solid #9d9d9d;
      background-color: $color-platinum;
    }
  }

  &-label {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 1rem;
    overflow: hidden;
    width: calc(100% - 3rem);
    transition: all $transition-duration $transition-type;
    z-index: 1;
    font-size: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-height: 1.75rem;
    pointer-events: none;

    &-active {
      top: 1rem;
      font-size: 1rem;
    }
  }

  &-value {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 1rem;
    overflow-y: hidden;
    overflow-x: hidden;
    font-size: 1.5rem;
    width: calc(100% - 3rem);
    max-height: 1.65rem;
    z-index: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
  }

  &-right {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translate(0, -50%);
    display: flex;
    transition: transform $transition-duration $transition-type;
    pointer-events: none;
  }
}
</style>
