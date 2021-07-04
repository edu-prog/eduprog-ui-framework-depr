<template>
  <Button type="main" round>
    <Icon :name="name" />
  </Button>
</template>

<script>
import Button from "./Button";
import Icon from "./Icon";

export default {
  name: "IconButton",
  components: {
    Icon,
    Button,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
