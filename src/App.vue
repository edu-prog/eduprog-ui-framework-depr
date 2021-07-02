<template>
  <div class="home">
    <Card>
      <Row container>
        <Column>
          <Heading size="xl">Регистрация</Heading>
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
          <Button type="main" size="l" mode="block"> Регистрация </Button>
        </Column>
      </Row>

      <Row container style="margin-top: 10px">
        <Column>
          <Checkbox :check="true" position="left" type="main">
            Я принимаю условия Пользовательского соглашения и даю своё согласие
            Яндексу на обработку моей персональной информации на условиях,
            определенных Политикой конфиденциальности.
          </Checkbox>
        </Column>
      </Row>

      <Row container style="margin-top: 10px">
        <Column>
          <Checkbox position="left" type="main">
            Я не хочу получать рекламу и другие предложения данного сервиса
            Яндекса
          </Checkbox>
        </Column>
      </Row>

      <Row>
        <Column>
          <Paragraph view="normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            consequatur cupiditate doloremque expedita fugit illo iste magnam
            minima nostrum, pariatur perferendis porro quam quasi, qui ratione
            sapiente sed. Illo, quod.
          </Paragraph>
        </Column>
      </Row>
    </Card>

    <IconButton name="chat"></IconButton>
  </div>

  <div
    style="
      width: 300px;
      margin: 20px auto;
    "
  >
    <Row>
      <Column>
        <Button type="main">Sign in</Button>
      </Column>
      <Column>
        <Button type="secondary">Sign in</Button>
      </Column>
      <Column>
        <Button type="accent">Sign in</Button>
      </Column>
    </Row>
    <Row style="margin-top: 10px">
      <Column>
        <Button type="main" mode="outlined">Sign in</Button>
      </Column>
      <Column>
        <Button type="secondary" mode="outlined">Sign in</Button>
      </Column>
      <Column>
        <Button type="accent" mode="outlined">Sign in</Button>
      </Column>
    </Row>
    <Row style="margin-top: 10px">
      <Column>
        <Button type="main" rounded>Sign in</Button>
      </Column>
      <Column>
        <Button type="secondary" rounded>Sign in</Button>
      </Column>
      <Column>
        <Button type="accent" rounded>Sign in</Button>
      </Column>
    </Row>
    <Row style="margin-top: 10px">
      <Column>
        <Button type="main" round>R</Button>
      </Column>
      <Column>
        <Button type="secondary" round>R</Button>
      </Column>
      <Column>
        <Button type="accent" round>R</Button>
      </Column>
    </Row>
  </div>

  <div
    style="
      width: 300px;
      margin: 20px auto;
    "
  >
    <Row style="margin-top: 10px">
      <Column>
        <Checkbox type="main" position="left" check>Test</Checkbox>
      </Column>
      <Column>
        <Checkbox type="secondary" position="left" check>Test</Checkbox>
      </Column>
      <Column>
        <Checkbox type="accent" position="left" check>Test</Checkbox>
      </Column>
    </Row>
    <Row style="margin-top: 10px">
      <Column>
        <Checkbox type="main" position="left">Test</Checkbox>
      </Column>
      <Column>
        <Checkbox type="secondary" position="left">Test</Checkbox>
      </Column>
      <Column>
        <Checkbox type="accent" position="left">Test</Checkbox>
      </Column>
    </Row>
  </div>

  <div
    style="
      width: 300px;
      margin: 20px auto;
    "
  >
    <Row>
      <Column><Heading size="xl">Hello, world!</Heading></Column>
    </Row>
    <Row>
      <Column><Heading size="l">Hello, world!</Heading></Column>
    </Row>
    <Row>
      <Column><Heading size="m">Hello, world!</Heading></Column>
    </Row>
    <Row>
      <Column><Heading size="s">Hello, world!</Heading></Column>
    </Row>
    <Row>
      <Column><Heading size="xs">Hello, world!</Heading></Column>
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
import Card from "./components/Card";
import IconButton from "./components/IconButton";

export default {
  name: "Home",
  components: {
    Card,
    Checkbox,
    PhoneInput,
    Button,
    Row,
    Column,
    TextInput,
    Heading,
    IconButton,
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
