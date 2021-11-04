<template>
  <div class="pagination">
    <div v-show="renderedPage" class="pagination-item">
      <Button :padding="0.25" @click="onButtonPrevClicked">
        <svg
          :style="{ display: 'flex' }"
          fill="#000000"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z"
          />
        </svg>
      </Button>
    </div>
    <div v-show="renderedPage > 0" class="pagination-item">
      <Button :padding="0.5" @click="onButtonPrevFrameRendered">
        <svg
          :style="{ display: 'flex' }"
          fill="#000000"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
      </Button>
    </div>
    <div
      v-for="item in totalVisible === undefined ? length : totalVisible"
      :key="item"
      class="pagination-item"
    >
      <Button
        :padding="0.75"
        :type="renderedPage + item === page ? 'action' : 'default'"
        @click="onButtonNumberClicked(renderedPage + item)"
        >{{ renderedPage + item }}
      </Button>
    </div>
    <div v-show="renderedPage + totalVisible < length" class="pagination-item">
      <Button
        :padding="0.5"
        :style="{ display: 'flex' }"
        @click="onButtonNextFrameRendered"
      >
        <svg
          fill="#000000"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
      </Button>
    </div>

    <div class="pagination-item">
      <Button :padding="0.25" @click="onButtonNextClicked">
        <svg
          :style="{ display: 'flex' }"
          fill="#000000"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"
          />
        </svg>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../components/Button.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    Button,
  },
  props: {
    length: {
      type: Number,
      required: true,
    },
    totalVisible: {
      type: Number,
      default: 10,
      required: false,
    },
    modelValue: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const page = ref(1);
    const renderedPage = ref(0);
    const onButtonNextFrameRendered = () => {
      if (
        props.totalVisible &&
        renderedPage.value + props.totalVisible < props.length
      ) {
        renderedPage.value += props.totalVisible;
        page.value = renderedPage.value + 1;
        emitPage();
      }
    };
    const onButtonPrevFrameRendered = () => {
      if (props.totalVisible && renderedPage.value > 0) {
        renderedPage.value -= props.totalVisible;
        page.value = renderedPage.value + props.totalVisible;
        emitPage();
      }
    };
    const onButtonNumberClicked = (value: number) => {
      page.value = value;
      emitPage();
    };
    const onButtonPrevClicked = () => {
      if (page.value > 1) {
        page.value--;
        if (renderedPage.value >= page.value) {
          onButtonPrevFrameRendered();
        }
        emitPage();
      }
    };
    const onButtonNextClicked = () => {
      if (page.value < props.length) {
        page.value++;
        if (
          props.totalVisible &&
          renderedPage.value + props.totalVisible < page.value
        ) {
          onButtonNextFrameRendered();
        }
        emitPage();
      }
    };
    const emitPage = () => {
      emit("update:modelValue", page.value);
    };

    return {
      page,
      renderedPage,
      onButtonNextFrameRendered,
      onButtonPrevFrameRendered,
      onButtonNumberClicked,
      onButtonPrevClicked,
      onButtonNextClicked,
    };
  },
  emits: ["update:modelValue"],
});
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;

  &-item {
    margin: 0 0.25rem;
  }
}
</style>
