<template>
  <div class="home">
    <Container size="xs">
      <Row>
        <Column>
          <Heading size="m" align="left">Button</Heading>
        </Column>
      </Row>
      <Row>
        <Column>
          <Heading size="s" align="left">Examples</Heading>
        </Column>
      </Row>
      <Row :cols="3">
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

        <Column>
          <Button type="action" rounded>Action</Button>
        </Column>
        <Column>
          <Button type="default" rounded>Default</Button>
        </Column>
        <Column>
          <Button type="link" rounded>Link</Button>
        </Column>
        <Column>
          <Button type="pseudo" rounded>Pseudo</Button>
        </Column>
        <Column>
          <Button type="clear" rounded>Clear</Button>
        </Column>
        <Column>
          <Button type="raised" rounded>Raised</Button>
        </Column>
      </Row>
    </Container>

    Row>Column

    <Row>
      <Column><Heading size="m" align="left">Typography</Heading></Column>
    </Row>
    <Row>
      <Column><Heading size="s" align="left">Headings</Heading></Column>
    </Row>
    <Row>
      <Column
        ><Paragraph
          >We provide some basic styling on headings tags. In the example, you
          see the the 6 header tags' different sizes.</Paragraph
        ></Column
      >
    </Row>
    <Card type="border" size="m" align="left" style="margin-top: 2rem">
      <Container>
        <Row>
          <Column><Heading size="xxl" align="left">Heading h1</Heading></Column>
        </Row>
        <Row>
          <Column><Heading size="xl" align="left">Heading h2</Heading></Column>
        </Row>
        <Row>
          <Column><Heading size="l" align="left">Heading h3</Heading></Column>
        </Row>
        <Row>
          <Column><Heading size="m" align="left">Heading h4</Heading></Column>
        </Row>
        <Row>
          <Column><Heading size="s" align="left">Heading h5</Heading></Column>
        </Row>
        <Row>
          <Column><Heading size="xs" align="left">Heading h6</Heading></Column>
        </Row>
      </Container>
    </Card>
    <Row>
      <Column><Heading size="s" align="left">Paragraphs</Heading></Column>
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
          icon: require('./assets/icons/front-end-development.svg'),
          content: 'Front-end development',
        },
        {
          icon: require('./assets/icons/back-end-development.svg'),
          content: 'Back-end development',
        },
        {
          icon: require('./assets/icons/front-end-development.svg'),
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
import Button from "./components/Button.vue";
import Card from "./components/Card";
import CheckboxBlock from "./components/CheckboxBlock";
import { Column, Container, Row } from "./components/Grid.vue";
import Heading from "./components/Heading.vue";
import Link from "./components/Link";
import Paragraph from "./components/Paragraph";
import PhoneInput from "./components/PhoneInput";
import Progress from "./components/Progress";
import Select from "./components/Select";
import Spinner from "./components/Spinner";
import TextInput from "./components/TextInput.vue";

export default {
  name: "Home",
  components: {
    Card,
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

.home {
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: $font-family;
  .grid-row {
    .grid-col {
      margin-top: 10px;
    }
  }
}
</style>
