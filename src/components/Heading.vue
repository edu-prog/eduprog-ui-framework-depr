<template>
  <div class="heading" v-if="size === 'xl'">
    <h1>{{ content }}</h1>
  </div>
  <div class="heading" v-else-if="size === 'l'">
    <h2>{{ content }}</h2>
  </div>
  <div class="heading" v-else-if="size === 'm'">
    <h3>{{ content }}</h3>
  </div>
  <div class="heading" v-else-if="size === 's'">
    <h4>{{ content }}</h4>
  </div>
  <div class="heading" v-else-if="size === 'xs'">
    <h5>{{ content }}</h5>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    content: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped></style>
