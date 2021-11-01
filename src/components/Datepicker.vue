<template>
  <div class="datepicker">
    <div class="datepicker-controllers">
      <div class="datepicker-controllers-left">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 4L7 12L15 20"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </div>

      <div class="datepicker-controllers-title">
        {{ getMonthName(currentFrame) }}
      </div>

      <div class="datepicker-controllers-right">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 4L7 12L15 20"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>

    <div class="datepicker-weekname-item">Пн</div>
    <div class="datepicker-weekname-item">Вт</div>
    <div class="datepicker-weekname-item">Ср</div>
    <div class="datepicker-weekname-item">Чт</div>
    <div class="datepicker-weekname-item">Пт</div>
    <div class="datepicker-weekname-item">Сб</div>
    <div class="datepicker-weekname-item">Вс</div>

    <div
      v-for="(day, index) in getDaysInMonth(currentFrame)"
      :key="index"
      :class="[
        'datepicker-date',
        selectedDates.has(
          `${parseFrame(currentFrame)[0]}-${parseFrame(currentFrame)[1]}-${day}`
        ) && 'datepicker-date-selected',
      ]"
      :data-date="`${parseFrame(currentFrame)[0]}-${
        parseFrame(currentFrame)[1]
      }-${day}`"
      @click="selectDate"
    >
      {{ day }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Datepicker",
  data() {
    return {
      selectedDates: new Set(),
      currentFrame: `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
    };
  },
  methods: {
    parseFrame(frame) {
      return frame.split("-");
    },

    getDaysInMonth(frame) {
      const Frame = this.parseFrame(frame);
      return new Date(Frame[0], frame[1], 0).getDate();
    },

    selectDate(event) {
      this.selectedDates.add(event.target.dataset.date);
      this.$emit("update", this.selectedDates);
    },
    getMonthName(frame) {
      const parsedFrame = this.parseFrame(frame);
      return [
        "Январь",
        "Феврать",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ][parsedFrame[1] - 1];
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.datepicker {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;

  &-weekname-item {
    width: calc(100% / 7);
    font-weight: 700;
  }

  &-controllers {
    max-width: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    &-right {
      transform: rotate(180deg);
    }
  }

  &-date {
    display: flex;
    justify-content: center;
    width: calc(100% / 7);
    cursor: pointer;

    &:hover {
      background-color: $color-gray;
    }

    &-selected {
      background-color: $color-primary;
    }
  }
}
</style>
