<template>
  <div id="app">
    <div class="home">
      <Card size="m" type="border">
        <Row container>
          <Column>
            <Heading size="xl" align="right">Регистрация</Heading>
          </Column>
        </Row>

        <Row container>
          <Column>
            <PhoneInput
              label="Мобильный телефон"
              validation_message="Укажите номер телефона"
              :validation_pattern="/^[^\s*$]/"
            />
          </Column>
        </Row>

        <Row container>
          <Column>
            <TextInput
              type="text"
              label="Фамилия и Имя"
              mask="Иванов Иван"
              validation_message="Укажите фамилию и имя"
              :validation_pattern="/[А-Я][а-я]+\s[А-Я][а-я]+/"
            />
          </Column>
        </Row>

        <Row container>
          <Column>
            <TextInput
              type="password"
              label="Пароль"
              :validation_pattern="
                /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/
              "
            />
          </Column>
        </Row>

        <Row container>
          <Column>
            <Button type="action" size="l" mode="max-width">
              Регистрация
            </Button>
          </Column>
        </Row>

        <Row container style="margin-top: 10px">
          <Column>
            <Checkbox checked position="left" type="main">
              Я принимаю условия Пользовательского соглашения и даю своё
              согласие Яндексу на обработку моей персональной информации на
              условиях, определенных Политикой конфиденциальности.
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
            <Paragraph type="normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              eligendi excepturi incidunt, iste maxime pariatur, porro provident
              quas qui repellat sint sunt tempore, voluptas? Aliquid at ipsum
              natus non recusandae.
            </Paragraph>
          </Column>
        </Row>
      </Card>
      <IconButton icon_name="chat" width="m" height="m" round></IconButton>

      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column>
            <Button type="action">Sign in</Button>
          </Column>
          <Column>
            <Button type="default">Sign in</Button>
          </Column>
          <Column>
            <Button type="link">Sign in</Button>
          </Column>
        </Row>
        <Row style="margin-top: 10px">
          <Column>
            <Button type="action" mode="outlined">Sign in</Button>
          </Column>
          <Column>
            <Button type="default" mode="outlined">Sign in</Button>
          </Column>
          <Column>
            <Button type="link" mode="outlined">Sign in</Button>
          </Column>
        </Row>
        <Row style="margin-top: 10px">
          <Column>
            <Button type="action" rounded>Sign in</Button>
          </Column>
          <Column>
            <Button type="default" rounded>Sign in</Button>
          </Column>
          <Column>
            <Button type="link" rounded>Sign in</Button>
          </Column>
        </Row>
        <Row style="margin-top: 10px">
          <Column>
            <Button type="action" round>R</Button>
          </Column>
          <Column>
            <Button type="default" round>R</Button>
          </Column>
          <Column>
            <Button type="link" round>R</Button>
          </Column>
        </Row>
      </div>

      <div style="width: 300px; margin: 20px auto">
        <Row style="margin-top: 10px">
          <Column>
            <Checkbox type="main" position="left" ref="checkbox_1" checked
              >Test</Checkbox
            >
          </Column>
          <Column>
            <Checkbox type="secondary" position="left" ref="checkbox_2" checked
              >Test</Checkbox
            >
          </Column>
          <Column>
            <Checkbox type="accent" position="left" ref="checkbox_3" checked
              >Test</Checkbox
            >
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

      <div style="width: 300px; margin: 20px auto">
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

      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column>
            <Paragraph type="small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              dolore, dolorem doloremque ducimus error excepturi fugit ipsam
              laborum, minima necessitatibus omnis perspiciatis porro reiciendis
              suscipit vel! Aliquid deserunt magnam neque!
            </Paragraph>
          </Column>
        </Row>
        <Row>
          <Column>
            <Paragraph type="normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              dolore, dolorem doloremque ducimus error excepturi fugit ipsam
              laborum, minima necessitatibus omnis perspiciatis porro reiciendis
              suscipit vel! Aliquid deserunt magnam neque!
            </Paragraph>
          </Column>
        </Row>
        <Row>
          <Column>
            <Paragraph type="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              dolore, dolorem doloremque ducimus error excepturi fugit ipsam
              laborum, minima necessitatibus omnis perspiciatis porro reiciendis
              suscipit vel! Aliquid deserunt magnam neque!
            </Paragraph>
          </Column>
        </Row>
      </div>

      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column>
            <PhoneInput />
          </Column>
        </Row>
      </div>

      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column>
            <TextInput type="text" label="Номер паспорта" mask="0308 075673" />
          </Column>
        </Row>
      </div>
      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column>
            <Progress
              ref="progress"
              :values="[
                { value: 10, color: '#6320EE' },
                { value: 40, color: '#8075FF' },
                { value: 50, color: '#50C878' },
              ]"
            />
          </Column>
        </Row>
      </div>
      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column>
            <Select
              v-model="debug_info"
              label="Гражданство"
              :options="['Имею гражданство РФ', 'Не имею гражданство РФ']"
            />
          </Column>
        </Row>
      </div>
      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column>
            <Select
              v-model="debug_info"
              label="Выберите повышенный Кэшбэк"
              :options="[
                'Аптеки',
                'Ozon.ru',
                'Пятёрочка',
                'Спорттовары',
                'Такси',
                'Рестораны',
              ]"
              ref="cashback_selector"
              :max_selected="3"
              multiple
            />
          </Column>
        </Row>
      </div>
      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column>
            <Paragraph type="lead"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              consequuntur eaque et expedita explicabo illum impedit incidunt,
              ipsam laboriosam libero minus numquam obcaecati, perferendis
              provident quos? Nulla rerum unde ut!</Paragraph
            >
          </Column>
        </Row>
      </div>
      <div style="width: 300px; margin: 20px auto">
        <Link link="/connect" target="_blank">Подключиться</Link>
      </div>

      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column>
            <TextInput label="Полное имя" v-model="fullName" type="text" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Paragraph type="lead">{{ fullName }}</Paragraph>
          </Column>
        </Row>
      </div>

      <div style="width: 300px; margin: 20px auto">
        <CheckboxBlock
          v-model="debug_info"
          :options="[
            {
              icon: './assets/icons/front-end-development.svg',
              content: 'Front-end development',
            },
            {
              icon: './assets/icons/front-end-development.svg',
              content: 'Back-end development',
            },
            {
              icon: './assets/icons/front-end-development.svg',
              content: 'Algorithms and data structures',
            },
          ]"
        >
        </CheckboxBlock>

        <Paragraph>{{ debug_info }}</Paragraph>
      </div>

      <div style="width: 300px; margin: 20px auto">
        <Row>
          <Column><Spinner mode="border" type="primary"></Spinner></Column>
          <Column><Spinner mode="border" type="secondary"></Spinner></Column>
          <Column><Spinner mode="border" type="accent"></Spinner></Column>
        </Row>

        <Row style="margin-top: 10px">
          <Column><Spinner mode="growing" type="primary"></Spinner></Column>
          <Column><Spinner mode="growing" type="secondary"></Spinner></Column>
          <Column><Spinner mode="growing" type="accent"></Spinner></Column>
        </Row>
      </div>
    </div>

    <div style="width: 300px; margin: 20px auto">
      <Row>
        <Column
          ><PhoneInput type="text" v-model="debug_info" label="Тестовое поле"
        /></Column>
      </Row>
      <Row>
        <Column>
          <Paragraph>{{ debug_info }}</Paragraph></Column
        >
      </Row>
    </div>

    <div style="width: 300px; margin: 20px auto">
      <Row>
        <Column
          ><Checkbox v-model="debug_info" position="left" type="main" checked
        /></Column>
      </Row>
      <Row>
        <Column>
          <Paragraph>{{ debug_info }}</Paragraph></Column
        >
      </Row>
    </div>
  </div>
</template>

<script>
import { Column, Row } from "./components/Grid.vue";
import Button from "./components/Button.vue";
import TextInput from "./components/TextInput.vue";
import Heading from "./components/Heading.vue";
import PhoneInput from "./components/PhoneInput";
import Checkbox from "./components/Checkbox";
import Paragraph from "./components/Paragraph";
import Card from "./components/Card";
import IconButton from "./components/IconButton";
import Progress from "./components/Progress";
import Select from "./components/Select";
import Link from "./components/Link";
import CheckboxBlock from "./components/CheckboxBlock";
import Spinner from "./components/Spinner";

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
    Progress,
    Select,
    Link,
    CheckboxBlock,
    Spinner,
  },
  data() {
    return {
      fullName: "",
      debug_info: "",
    };
  },
};
</script>

<style lang="scss">
@import "assets/styles/global";

body {
  margin: 0;
}
#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
.home {
  margin-left: auto;
  margin-right: auto;
}
</style>
