<template>
  <span class="material-icons">{{ name }}</span>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.material-icons {
  user-select: none;
}
</style>
