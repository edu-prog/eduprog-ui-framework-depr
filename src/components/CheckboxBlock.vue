<template>
  <div class="CheckboxBlock-container" v-for="option in options" :key="option">
    <div class="CheckboxBlock-container-item">
      <CheckboxBlockButton @click="onItemSelected">{{
        option
      }}</CheckboxBlockButton>
    </div>
  </div>
</template>

<script>
import CheckboxBlockButton from "./CheckboxBlockButton";

export default {
  name: "CheckboxBlock",
  components: {
    CheckboxBlockButton,
  },
  props: {
    options: {
      type: Array,
    },
  },
  data() {
    return {
      value: [],
    };
  },
  methods: {
    getValue() {
      return this.value;
    },
    onItemSelected(event) {
      const content = event.target.innerText;
      if (!this.value.includes(content)) {
        this.value.push(content);
      } else {
        this.value.splice(this.value.indexOf(content), 1);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

.CheckboxBlock-container {
  display: flex;
  width: 100%;

  &-item {
    max-width: 100%;
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
