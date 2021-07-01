<template>
  <div class="home">
    <Row>
      <Column>
        <Heading content="Регистрация" size="xl" />
      </Column>
    </Row>

    <Row>
      <Column>
        <TextInput type="text" label="Фамилия и Имя" mask="Иванов Иван" />
      </Column>
    </Row>

    <Row>
      <Column>
        <TextInput type="password" label="Пароль" />
      </Column>
    </Row>

    <Row>
      <Column>
        <Button content="Войти" type="main" size="l" />
      </Column>
    </Row>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { Row, Column } from "vue-grid-responsive";
import TextInput from "@/components/TextInput";
import Heading from "@/components/Heading";

export default {
  name: "Home",
  components: {
    Button,
    Row,
    Column,
    TextInput,
    Heading,
  },
  data: function () {
    return {
      value: 0,
    };
  },
  methods: {
    increment() {
      this.value++;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_global.scss";

#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.home {
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
