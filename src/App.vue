<template>
  <div class="home">
    <Container size="xs">
      <Row>
        <Column>
          <Heading size="xl" align="left">Button</Heading>
        </Column>
      </Row>
      <Row>
        <Column>
          <Heading size="l" align="left">Examples</Heading>
        </Column>
      </Row>
      <Row cols="3">
        <Column>
          <Button type="action">Action</Button>
        </Column>
        <Column>
          <Button type="default">Default</Button>
        </Column>
        <Column>
          <Button type="link">Link</Button>
        </Column>
        <Column>
          <Button type="pseudo">Pseudo</Button>
        </Column>
        <Column>
          <Button type="clear">Clear</Button>
        </Column>
        <Column>
          <Button type="raised">Raised</Button>
        </Column>
      </Row>
    </Container>
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

    <Row>
      <Column>
        <PhoneInput />
      </Column>
    </Row>

    <Row>
      <Column>
        <TextInput type="text" label="Номер паспорта" mask="0308 075673" />
      </Column>
    </Row>

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

    <Row>
      <Column>
        <Select
          v-model="debug_info"
          label="Гражданство"
          :options="['Имею гражданство РФ', 'Не имею гражданство РФ']"
        />
      </Column>
    </Row>

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

    <Row>
      <Column>
        <Paragraph type="lead"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
          consequuntur eaque et expedita explicabo illum impedit incidunt, ipsam
          laboriosam libero minus numquam obcaecati, perferendis provident quos?
          Nulla rerum unde ut!</Paragraph
        >
      </Column>
    </Row>

    <Link link="/connect" target="_blank">Подключиться</Link>

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
</template>

<script>
import { Column, Container, Row } from "./components/Grid.vue";
import Button from "./components/Button.vue";
import TextInput from "./components/TextInput.vue";
import Heading from "./components/Heading.vue";
import PhoneInput from "./components/PhoneInput";
import Checkbox from "./components/Checkbox";
import Paragraph from "./components/Paragraph";
import Progress from "./components/Progress";
import Select from "./components/Select";
import Link from "./components/Link";
import CheckboxBlock from "./components/CheckboxBlock";
import Spinner from "./components/Spinner";

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
    Progress,
    Select,
    Link,
    CheckboxBlock,
    Spinner,
    Container,
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
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
