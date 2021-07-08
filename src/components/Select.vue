<template @onload="onSelectLoaded">
  <TextInput
    v-click-outside="closeDropdown"
    ref="select"
    input_class="select-input"
    @click="toggleDropdown"
    :label="label"
    type="text"
    :val="!multiple ? value : ''"
    readonly
  >
    <span :class="['select-icon', isActive ? 'select-icon-activate' : '']">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      </svg>
    </span>
  </TextInput>

  <div :class="['dropdown', isActive ? 'dropdown-activate' : '']">
    <div v-if="!multiple" class="dropdown-menu">
      <div
        class="dropdown-item"
        @click="itemClickHandler"
        v-for="elem in options"
        v-bind:key="elem"
      >
        {{ elem }}
      </div>
    </div>

    <div v-else class="dropdown-menu" :style="{ marginTop: '1rem' }">
      <div
        class="dropdown-item dropdown-item-multiple"
        v-for="elem in options"
        v-bind:key="elem"
      >
        <Checkbox
          style="width: 100%; height: 100%; padding: 0.5rem"
          @click="itemClickHandler"
          :__input_opts="elem"
          position="left"
          type="main"
        >
          {{ elem }}
        </Checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import vClickOutside from "click-outside-vue3/src";

export default {
  name: "Dropdown",
  components: {
    TextInput,
    Checkbox,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    label: {
      type: String,
      default: "Выберите",
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {
      isActive: false,
      value: !this.multiple ? this.options[0] : [],
    };
  },
  methods: {
    onSelectLoaded: function () {
      this.$refs.select.content = this.options[0];
    },
    toggleDropdown: function () {
      this.isActive = !this.isActive;
    },
    closeDropdown: function () {
      if (!this.multiple) {
        this.isActive = false;
      }
    },
    itemClickHandler: function (event) {
      const select = this.$refs.select;
      if (this.multiple) {
        select.content = "";
        const val = event.target.dataset.opt;
        if (val !== undefined) {
          if (this.value.includes(val)) {
            this.value.splice(this.value.indexOf(val), 1);
          } else {
            this.value.push(val);
          }

          this.value.forEach((item, iterations) => {
            select.content += `${item}`;

            if (iterations + 1 < this.value.length) {
              select.content += ", ";
            }
          });
        }
      } else {
        select.content = event.target.innerText;
      }
    },
    getValue: function () {
      return this.value;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";
.select-icon {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  pointer-events: none;
  transition: 0.2s;

  &-activate {
    transform: rotate(-180deg) translateY(50%);
  }
}
.dropdown {
  position: relative;
  display: none;

  &-activate {
    display: flex;
  }

  &-menu {
    width: calc(100% - 1rem);
    z-index: 1000;
    margin-top: 0.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -5%);
    border-radius: 0.25rem;
    box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    background-color: #ffffff;

    &-top {
      bottom: 100%;
      transform: translate(-50%, -40%);
    }
  }

  &-item {
    cursor: pointer;
    padding: 0.5rem 0.5rem;
    text-align: left;

    &:hover {
      background-color: $color-platinum;
    }

    &-multiple {
      display: flex;
      padding: 0;
    }
  }
}
</style>
<style>
.select-input {
  width: calc(100% - 3.5rem) !important;
  padding-right: 2rem !important;
  cursor: pointer;
  user-select: none;
}
</style>
