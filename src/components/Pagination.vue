<template>
  <div class="pagination">
    <div v-show="rendered_page" class="pagination-item">
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
    <div v-show="rendered_page > 0" class="pagination-item">
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
      v-for="item in total_visible === undefined ? length : total_visible"
      :key="item"
      class="pagination-item"
    >
      <Button
        :padding="0.75"
        :type="rendered_page + item === page ? 'action' : 'default'"
        @click="onButtonNumberClicked"
        >{{ rendered_page + item }}
      </Button>
    </div>
    <div
      v-show="rendered_page + total_visible < length"
      class="pagination-item"
    >
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

<script>
import Button from "./Button";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Button,
  },
  props: {
    length: {
      type: Number,
      required: true,
    },
    total_visible: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      page: 1,
      rendered_page: 0,
    };
  },
  methods: {
    onButtonNextFrameRendered() {
      if (this.rendered_page + this.total_visible < this.length) {
        this.rendered_page += this.total_visible;
        this.page = this.rendered_page + 1;
        this.emitPage();
      }
    },
    onButtonPrevFrameRendered() {
      if (this.rendered_page > 0) {
        this.rendered_page -= this.total_visible;
        this.page = this.rendered_page + this.total_visible;
        this.emitPage();
      }
    },
    onButtonNumberClicked(event) {
      this.page = Number(event.target.innerText);
      this.emitPage();
    },
    onButtonPrevClicked() {
      if (this.page > 1) {
        this.page--;
        if (this.rendered_page >= this.page) {
          this.onButtonPrevFrameRendered();
        }
        this.emitPage();
      }
    },
    onButtonNextClicked() {
      if (this.page < this.length) {
        this.page++;
        if (this.rendered_page + this.total_visible < this.page) {
          this.onButtonNextFrameRendered();
        }
        this.emitPage();
      }
    },
    emitPage() {
      this.$emit("input", this.page);
    },
  },
  emits: ["input"],
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
