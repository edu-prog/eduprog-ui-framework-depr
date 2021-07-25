<template>
  <label class="checkbox-container">
    <div v-if="position === 'right'">
      <slot></slot>
    </div>

    <input
      type="checkbox"
      :data-opt="__input_opts"
      :checked="checked === true"
      :disabled="disabled === true"
      @change="onCheckboxChanged"
    />

    <span class="checkbox-fake">
      <span :class="['checkbox-checkmark', `checkbox-checkmark-${type}`]">
        <Icon
          class="checkbox-checkmark-icon"
          size="xs"
          name="done"
          weight="bold"
          color="#fff"
        />
      </span>
    </span>

    <div v-if="position === 'left'">
      <slot></slot>
    </div>
  </label>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'Checkbox',
  components: {
    Icon,
  },
  props: {
    type: {
      type: String,
    },
    position: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    __input_opts: {
      type: String,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  model: {
    event: 'change',
  },
  data() {
    return {
      check: this.checked,
    };
  },
  methods: {
    onCheckboxChanged() {
      this.check = !this.check;
      this.$emit('change', this.check);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/global";

.checkbox-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  div {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    text-align: left;
    width: calc(100% - 4.75rem);
    user-select: none;
  }

  input {
    display: none;

    &:checked ~ .checkbox-fake > .checkbox-checkmark-main {
      background-color: $color-primary;
    }

    &:checked ~ .checkbox-fake > .checkbox-checkmark-secondary {
      background-color: $color-secondary;
    }

    &:checked ~ .checkbox-fake > .checkbox-checkmark-accent {
      background-color: $color-accent;
    }

    &:checked ~ .checkbox-fake > .checkbox-checkmark:after {
      display: flex;
    }

    &:checked ~ .checkbox-fake > .checkbox-checkmark {
      transform: scale(1);
    }

    &:checked ~ .checkbox-fake .checkbox-checkmark > .checkbox-checkmark-icon {
      visibility: visible;
      transform: scale(1);
    }
  }

  .checkbox-fake {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    background-color: #ecf1f7;
    transition: 0.25s ease;
    cursor: pointer;

    &:hover {
      background-color: darken(#ecf1f7, 5%);
    }

    .checkbox-checkmark {
      display: flex;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 0.5rem;
      transition: transform 0.25s ease;
      transform: scale(0);

      &-icon {
        visibility: hidden;
        display: flex;
        transition: transform 0.25s ease;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        transform: scale(0);
      }
    }
  }
}
</style>
