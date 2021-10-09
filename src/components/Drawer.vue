<template>
  <div class="drawer">
    <div class="drawer-toggle" @click="onClick">
      <slot name="toggle"></slot>
    </div>

    <div class="drawer-content">
      <BottomNavbar ref="bottom_navbar">
        <slot name="content"></slot>
      </BottomNavbar>
    </div>
  </div>
</template>

<script>
import BottomNavbar from "./BottomNavbar";

export default {
  components: {
    BottomNavbar,
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    onClick() {
      this.isActive = !this.isActive;

      if (this.isActive) {
        this.$refs.bottom_navbar.open();
      } else {
        this.$refs.bottom_navbar.close();
      }
    }
  }
}
</script>

<style scoped>

</style>