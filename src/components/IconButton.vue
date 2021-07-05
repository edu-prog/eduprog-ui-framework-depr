<template>
  <Button type="main" round>
    <Icon :name="name" :size="iconSize" :color="iconColor"/>
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
    iconSize: {
      type: String,
      default: "m",
      required: false,
    },
    iconColor: {
      type: String,
      default: "white",
      required: false,
    },
  },
};
</script>

<style scoped></style>
