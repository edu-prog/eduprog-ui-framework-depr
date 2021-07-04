<template>
  <div class="heading" v-if="size === 'xl'">
    <h1><slot></slot></h1>
  </div>
  <div class="heading" v-else-if="size === 'l'">
    <h2><slot></slot></h2>
  </div>
  <div class="heading" v-else-if="size === 'm'">
    <h3><slot></slot></h3>
  </div>
  <div class="heading" v-else-if="size === 's'">
    <h4><slot></slot></h4>
  </div>
  <div class="heading" v-else-if="size === 'xs'">
    <h5><slot></slot></h5>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    size: {
      type: String,
      require: true,
    },
    align: {

    }
  },
};
</script>

<style scoped></style>
