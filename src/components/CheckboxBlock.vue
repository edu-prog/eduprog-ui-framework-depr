<template>
  <div>
    <div
      v-for="option in options"
      :key="option.content"
      class="CheckboxBlock-container"
    >
      <div class="CheckboxBlock-container-item">
        <CheckboxBlockButton
          :data-value="option.content"
          :icon="option.icon"
          @click="onItemSelected"
        >
          {{ option.content }}
        </CheckboxBlockButton>
      </div>
    </div>
  </div>
</template>

<script>
import CheckboxBlockButton from "./CheckboxBlockButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckboxBlock",
  components: {
    CheckboxBlockButton,
  },
  props: {
    options: {
      type: Array,
    },
    modelValue: {
      type: String,
    },
  },
  data() {
    return {
      value: [],
    };
  },
  methods: {
    onItemSelected(event) {
      const content = event.target.dataset.value;
      if (!this.value.includes(content)) {
        this.value.push(content);
      } else {
        this.value.splice(this.value.indexOf(content), 1);
      }

      this.$emit("update:modelValue", this.value);
    },
  },
  emits: ["update:modelValue"],
});
</script>

<style lang="scss" scoped>
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
