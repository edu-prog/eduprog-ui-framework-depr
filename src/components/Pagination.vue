<template>
  <div class="pagination">
    <div class="pagination-item">
      <Button :padding="0.25" @click.native="onButtonPrevClicked">
        <svg fill="#000000" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path
              d="M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z"/>
        </svg>
      </Button>
    </div>
    <div v-for="item in length" :key="item" class="pagination-item">
      <Button :padding="0.75" @click.native="onButtonNumberClicked" :type="item === page ? 'action' : 'default'">{{ item }}</Button>
    </div>
    <div class="pagination-item">
      <Button :padding="0.25" @click.native="onButtonNextClicked">
        <svg fill="#000000" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path
              d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"/>
        </svg>
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button"

export default {
  name: "Pagination",
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
    }
  },
  data() {
    return {
      page: 1,
    }
  },
  methods: {
    onButtonNumberClicked(event) {
      this.page = Number(event.target.innerText);
    },
    onButtonPrevClicked() {
      if (this.page > 1) {
        this.page--;
      }
    },
    onButtonNextClicked() {
      if (this.page < this.length) {
        this.page++;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;

  &-item {
    margin: 0 0.25rem;
  }
}
</style>