<template>
  <Button :style="iconButtonStyles" :type="button_type">
    <Icon :color="icon_color" :name="icon_name" :size="icon_size" />
  </Button>
</template>

<script lang="ts">
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import { BreakpointsLabel } from "@/utils/breakpoins";
import { computed, defineComponent } from "vue";

interface IButtonSize {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}

const ButtonSize = {
  xs: "3rem",
  s: "4.5rem",
  m: "6.75rem",
  l: "10.125rem",
  xl: "15.1875rem",
} as IButtonSize;

export default defineComponent({
  components: {
    Icon,
    Button,
  },
  props: {
    icon_name: {
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
    icon_size: {
      type: String,
      default: "m",
      required: false,
      validator: (value: string): boolean => {
        return BreakpointsLabel.includes(value);
      },
    },
    icon_color: {
      type: String,
      default: "white",
      required: false,
    },
    button_round: {
      type: Boolean,
      default: false,
      required: false,
    },
    button_type: {
      type: String,
      default: "default",
      required: false,
    },
  },
  setup(props) {
    const iconButtonStyles = computed(() => {
      return {
        maxWidth: ButtonSize[props.width as keyof IButtonSize],
        maxHeight: ButtonSize[props.height as keyof IButtonSize],
      };
    });
    return { iconButtonStyles };
  },
});
</script>
