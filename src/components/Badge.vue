<template>
  <div class="badge-container">
    <Icon
      :color="icon_color"
      :name="icon_name"
      :size="icon_size"
      :weigth="icon_weight"
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
    icon_name: {
      type: String,
      required: true,
    },
    icon_color: {
      type: String,
      required: false,
    },
    icon_size: {
      type: String,
      default: "m",
    },
    icon_weight: {
      type: String,
      default: "normal",
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/_global.scss";

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
