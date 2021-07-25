<template>
  <span class="material-icons" :style="iconStyles">{{ name }}</span>
</template>

<script>
const sizes = {
  xs: '1rem',
  s: '1.25rem',
  m: '1.5rem',
  l: '1.75rem',
  xl: '2rem',
};

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      default: 'm',
    },
    weight: {
      type: String,
      default: 'normal',
      required: false,
    },
  },
  computed: {
    iconStyles() {
      return {
        color: this.color,
        fontSize: `${sizes[this.size]}`,
        fontWeight: this.weight,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.material-icons {
  user-select: none;
}
</style>
