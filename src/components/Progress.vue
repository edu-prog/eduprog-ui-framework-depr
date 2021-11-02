<template>
  <div class="progress">
    <div
      v-for="value of progressValues"
      v-bind:key="value.color"
      :style="{ backgroundColor: value.color, width: `${value.value}%` }"
      class="progress-bar progress-bar-stripted"
    ></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

interface IProgressOptions {
  value: number;
  color: string;
}

export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<Array<IProgressOptions>>,
      default: Array as PropType<Array<IProgressOptions>>,
    },
  },
  setup(props) {
    const progressValues = computed(() => {
      return props.modelValue;
    });

    return { progressValues };
  },
  emits: ["update:modelValue"],
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/color";

.progress {
  display: flex;
  height: 0.5rem;
  background-color: $color-platinum;
  border-radius: 0.5rem;
  overflow: hidden;

  &-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: width 0.6s ease;
    overflow: hidden;
  }
}
</style>
