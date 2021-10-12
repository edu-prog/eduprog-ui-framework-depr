<template>
  <div class="progress">
    <div
      v-for="value of values"
      v-bind:key="value.color"
      :style="{ backgroundColor: value.color, width: `${value.value}%` }"
      class="progress-bar progress-bar-stripted"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Progress",
  props: {
    values: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      progress_value: this.value,
    };
  },
  methods: {
    getValue() {
      return this.progress_value;
    },

    setValue(value) {
      this.progress_value = value;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

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
