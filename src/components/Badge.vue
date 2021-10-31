<template>
  <div class="badge-container">
    <Icon
      :color="iconColor"
      :name="iconName"
      :size="iconSize"
      :weigth="iconWeight"
    />

    <span class="badge-content">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "primary",
      validator: (value: string): boolean => {
        return ["primary", "secondary", "accent"].includes(value);
      },
    },
    max: {
      type: Number,
      required: false,
    },
    iconName: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      required: false,
    },
    iconSize: {
      type: String,
      default: "m",
    },
    iconWeight: {
      type: String,
      default: "normal",
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.badge-content {
  display: inline-flex;
  background-color: $color-primary;
  color: #ffffff;
  border-radius: 0.625rem;
  font-size: 0.75rem;
  padding: 0 0.375rem;
  position: absolute;
  margin-left: -0.375rem;
  margin-top: -0.5rem;
  border: 2px solid #ffffff;
}
</style>
