<template>
  <Button :type="button_type" :style="iconButtonStyles">
    <Icon :name="icon_name" :size="icon_size" :color="icon_color" />
  </Button>
</template>

<script>
import Button from './Button.vue';
import Icon from './Icon.vue';
import { BreakpointsLabel } from '../utils/breakpoins';

const ButtonSize = {
  xs: '3rem',
  s: '4.5rem',
  m: '6.75rem',
  l: '10.125rem',
  xl: '15.1875rem',
};

export default {
  name: 'IconButton',
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
      default: 'xs',
      required: false,
      validator(value) {
        return BreakpointsLabel.includes(value);
      },
    },
    height: {
      type: String,
      default: 'xs',
      required: false,
      validator(value) {
        return BreakpointsLabel.includes(value);
      },
    },
    icon_size: {
      type: String,
      default: 'm',
      required: false,
      validator(value) {
        return BreakpointsLabel.includes(value);
      },
    },
    icon_color: {
      type: String,
      default: 'white',
      required: false,
    },
    button_round: {
      type: Boolean,
      default: false,
      required: false,
    },
    button_type: {
      type: String,
      default: 'default',
      required: false,
    },
  },
  computed: {
    iconButtonStyles() {
      return {
        maxWidth: ButtonSize[this.width],
        maxHeight: ButtonSize[this.height],
      };
    },
  },
};
</script>
