<template>
  <div>
    <div
      class="CheckboxBlock-container"
      v-for="option in options"
      :key="option.content"
    >
      <div class="CheckboxBlock-container-item">
        <CheckboxBlockButton @click="onItemSelected" :icon="option.icon" :data-value="option.content">
          {{ option.content }}
        </CheckboxBlockButton>
      </div>
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
      const content = event.target.dataset.value;
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
