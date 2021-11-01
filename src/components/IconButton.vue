<template>
  <Button :style="iconButtonStyles" :type="buttonType">
    <Icon :color="iconColor" :name="iconName" :size="iconSize" />
  </Button>
</template>

<script lang="ts">
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import { BreakpointsLabel, ISizes } from "../utils/breakpoins";
import { computed, defineComponent, StyleValue } from "vue";

export default defineComponent({
  components: {
    Icon,
    Button,
  },
  props: {
    iconName: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "xs",
      required: false,
      validator: (value: string): boolean => {
        return BreakpointsLabel.includes(value);
      },
    },
    height: {
      type: String,
      default: "xs",
      required: false,
      validator: (value: string): boolean => {
        return BreakpointsLabel.includes(value);
      },
    },
    iconSize: {
      type: String,
      default: "m",
      required: false,
      validator: (value: string): boolean => {
        return BreakpointsLabel.includes(value);
      },
    },
    iconColor: {
      type: String,
      default: "white",
      required: false,
    },
    buttonRound: {
      type: Boolean,
      default: false,
      required: false,
    },
    buttonType: {
      type: String,
      default: "default",
      required: false,
    },
  },
  setup(props) {
    const ButtonSize = {
      xs: "3rem",
      s: "4.5rem",
      m: "6.75rem",
      l: "10.125rem",
      xl: "15.1875rem",
    } as ISizes;
    const iconButtonStyles = computed(() => {
      return {
        maxWidth: ButtonSize[props.width as keyof ISizes],
        maxHeight: ButtonSize[props.height as keyof ISizes],
      } as StyleValue;
    });
    return { iconButtonStyles };
  },
});
</script>
