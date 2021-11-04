<template>
  <div class="Select">
    <Select
      :label="label"
      :options="options"
      v-model="content"
      @change="$emit('update:modelValue', content)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import Select from "../components/Select/Select.vue";

export default defineComponent({
  components: {
    Select,
  },
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    options: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
    modelValue: {
      type: String,
    },
  },
  setup(props) {
    const content = ref(props.options[0]);

    return {
      content,
    };
  },
  emits: ["update:modelValue"],
});
</script>
