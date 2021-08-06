<template @onload.native="onSelectLoaded">
  <div>
    <span v-if="!IsMobile" class="select-wrapper">
      <TextInput
        v-on-clickaway="closeDropdown"
        ref="select"
        input_class="select-input"
        @click.native="toggleDropdown"
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
              @click.native="itemClickHandler"
              :__input_opts="elem"
              position="left"
              type="main"
            >
              {{ elem }}
            </Checkbox>
          </div>
        </div>
      </div>
    </span>

    <span v-else>
      <div class="mobile-select">
        <span
          :class="[
            'mobile-select-label',
            value && value.length > 0 ? 'mobile-select-label-checked' : '',
            multiple ? 'mobile-select-label-multiple' : '',
          ]"
          >{{ label }}</span
        >
        <span
          :class="[
            'mobile-select-value',
            value && 'mobile-select-value-checked',
            multiple ? 'mobile-select-value-multiple' : '',
          ]"
          >{{ multiple ? parseMultipleValue(value) : value }}</span
        >

        <select
          :class="[
            'mobile-select-handle',
            isActive ? 'mobile-select-handle-checked' : '',
          ]"
          :multiple="multiple"
          :size="multiple && 1"
          v-model="value"
          @change="onMobileSelectSelected"
        >
          <option
            v-for="elem in options"
            :key="elem"
            :value="elem"
            :selected="elem.includes(options[0])"
          >
            {{ elem }}
          </option>
        </select>

        <span :class="['select-icon']">
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
      </div>
    </span>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
import { mixin as clickaway } from 'vue-clickaway';
import Checkbox from './Checkbox.vue';
import TextInput from './TextInput.vue';

export default {
  name: 'Dropdown',
  components: {
    TextInput,
    Checkbox,
  },
  mixins: [clickaway],
  directives: {
    isMobile,
  },
  props: {
    label: {
      type: String,
      default: 'Выберите',
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
  data() {
    return {
      IsMobile: isMobile,
      isActive: false,
      value: !this.multiple ? this.options[0] : [],
    };
  },
  model: {
    event: 'update',
  },
  methods: {
    parseMultipleValue(value) {
      return String(value.join(', '));
    },
    onSelectLoaded() {
      [this.$refs.select.content] = this.options;
    },
    toggleDropdown() {
      this.isActive = !this.isActive;
    },
    closeDropdown() {
      if (!this.multiple) {
        this.isActive = false;
      }
    },
    itemClickHandler(event) {
      if (!this.IsMobile) {
        const { select } = this.$refs;
        if (this.multiple) {
          select.content = '';
          const val = event.target.dataset.opt;
          if (val !== undefined) {
            if (this.value.includes(val)) {
              this.value.splice(this.value.indexOf(val), 1);
            } else {
              this.value.push(val);
            }

            select.content = this.parseMultipleValue(this.value);
          }
        } else {
          select.content = event.target.innerText;
        }
      }

      this.$emit('update', this.value);
    },
    onMobileSelectSelected() {
      this.isActive = !this.isActive;
      this.$emit('update', this.value);
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
  transform: translateY(-50%);
  margin-left: -2rem;
  margin-top: 1.5rem;
  pointer-events: none;
  transition: 0.2s ease;

  &-activate {
    transform: rotate(-180deg) translateY(50%);
  }
}
.dropdown {
  display: flex;
  position: relative;
  opacity: 0;
  transition: opacity 0.05s linear;
  pointer-events: none;

  &-activate {
    pointer-events: auto;
    opacity: 1;
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

.mobile-select {
  width: 100%;
  position: relative;

  &-label {
    position: absolute;
    pointer-events: none;
    transition: 0.25s ease;
    font-size: 0.625rem;
    top: 0.625rem;
    left: 0.5rem;

    &-multiple {
      top: 50%;
      transform: translateY(-50%);
      font-size: 1rem;
    }
    &-checked {
      top: 0.625rem;
      font-size: 0.625rem;
      transform: translateY(-50%);
    }
  }

  &-value {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.5rem;
    pointer-events: none;
    opacity: 1;
    overflow: hidden;

    &-multiple {
      opacity: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 260px;
      width: 100%;
      text-align: left;
      white-space: nowrap;
    }

    &-checked {
      opacity: 1;
    }
  }

  &-handle {
    background-color: $color-platinum;
    width: 100%;
    outline: none;
    border-color: transparent;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease;
    padding: 0.5rem;
    height: 53px;
    font-family: $font-family;
    font-size: 1rem;
    color: transparent;

    option {
      color: #000;
    }
  }
}
</style>
<style>
.select-input {
  cursor: pointer;
  user-select: none;
}
</style>
