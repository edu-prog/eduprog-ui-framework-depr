<template>
  <div>
    <TextInput @click="toggleDropdown" label="Выберите повышенный Кэшбэк"
      >click</TextInput
    >

    <div :class="['dropdown', isActive ? 'dropdown-activate' : '']">
      <div class="dropdown-menu">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput";

export default {
  name: "Dropdown",
  components: {
    TextInput,
  },
  data: function () {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleDropdown: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  display: none;

  &-activate {
    display: flex;
  }

  &-menu {
    width: calc(100% - 0.5rem);
    z-index: 1000;
    margin-top: 0.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.25rem;
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    background-color: #ffffff;
    padding: 0 0.5rem;

    &-top {
      bottom: 100%;
      transform: translate(-50%, -40%);
    }
  }
}
</style>
