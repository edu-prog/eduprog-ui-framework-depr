<template>
  <div class="home">
    <Row container>
      <Column>
        <Heading content="Регистрация" size="xl" />
      </Column>
    </Row>

    <Row container>
      <Column>
        <PhoneInput />
      </Column>
    </Row>

    <Row container>
      <Column>
        <TextInput type="text" label="Фамилия и Имя" mask="Иванов Иван" />
      </Column>
    </Row>

    <Row container>
      <Column>
        <TextInput type="password" label="Пароль" />
      </Column>
    </Row>

    <Row container>
      <Column>
        <Button content="Регистрация" type="main" size="l" mode="block" />
      </Column>
    </Row>

    <Row container style="margin-top: 10px">
      <Column>
        <Checkbox
          :check="true"
          position="left"
          label="Я принимаю условия Пользовательского соглашения и даю своё согласие Яндексу на обработку моей персональной информации на условиях, определенных Политикой конфиденциальности."
          type="main"
        />
      </Column>
    </Row>

    <Row container style="margin-top: 10px">
      <Column>
        <Checkbox
          position="left"
          label="Я не хочу получать рекламу и другие предложения данного сервиса Яндекса"
          type="main"
        />
      </Column>
    </Row>

    <Row>
      <Column>
        <Paragraph
          view="lead"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, amet cupiditate dicta eaque et eveniet fuga illum ipsum itaque laboriosam laudantium libero minus nisi rerum sed soluta velit. Praesentium."
        />
      </Column>
    </Row>
  </div>
</template>

<script>
import { Row, Column } from "vue-grid-responsive";
import Button from "./components/Button.vue";
import TextInput from "./components/TextInput.vue";
import Heading from "./components/Heading.vue";
import PhoneInput from "./components/PhoneInput";
import Checkbox from "./components/Checkbox";
import Paragraph from "./components/Paragraph";

export default {
  name: "Home",
  components: {
    Checkbox,
    PhoneInput,
    Button,
    Row,
    Column,
    TextInput,
    Heading,
    Paragraph,
  },
};
</script>

<style lang="scss">
@import "assets/styles/global";

#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

.home {
  max-width: 300px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
