<template>
  <div class="progress">
    <div
      v-for="value of values"
      v-bind:key="value.color"
      class="progress-bar progress-bar-stripted"
      :style="{ backgroundColor: value.color, width: `${value.value}%` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    values: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {
      progress_value: this.value,
    };
  },
  methods: {
    getValue: function () {
      return this.progress_value;
    },

    setValue: function (value) {
      this.progress_value = value;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

.progress {
  display: flex;
  height: 1rem;
  background-color: $color-platinum;
  border-radius: 0.25rem;
  overflow: hidden;

  &-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: width 0.6s ease;
    overflow: hidden;
    animation: progress-bar-stripted 1s linear infinite;

    &-stripted {
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: 1rem 1rem;
    }
  }
}
</style>
