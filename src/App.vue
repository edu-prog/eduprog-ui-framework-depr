<template>
  <div class="home">
    <Container size="xs">
      <Row>
        <Column>
          <Heading align="left" size="m">Button</Heading>
        </Column>
      </Row>
      <Row>
        <Column>
          <Heading align="left" size="s">Examples</Heading>
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
          <Button rounded type="action">Action</Button>
        </Column>
        <Column>
          <Button rounded type="default">Default</Button>
        </Column>
        <Column>
          <Button rounded type="link">Link</Button>
        </Column>
        <Column>
          <Button rounded type="pseudo">Pseudo</Button>
        </Column>
        <Column>
          <Button rounded type="clear">Clear</Button>
        </Column>
        <Column>
          <Button rounded type="raised">Raised</Button>
        </Column>

        <Column>
          <Button
            badge="100"
            badge_color="danger"
            badge_type="edge"
            rounded
            type="action"
          >Badge
          </Button
          >
        </Column>
        <Column>
          <Button
            badge="100"
            badge_color="danger"
            badge_type="inside"
            rounded
            type="action"
          >Badge
          </Button
          >
        </Column>
      </Row>
    </Container>

    <Container size="m">
      <Row>
        <Column>
          <TextInput label="Первое" type="text" />
        </Column>
      </Row>
      <Row>
        <Column>
          <TextInput label="Второе" type="password" />
        </Column>
      </Row>
      <Row>
        <Column>
          <TextInput
            :validation_message="'Укажите что-то'"
            :validation_pattern="/\D/"
            label="Третье"
            type="text"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <TextInput
            :validation_pattern="/\D/"
            label="Четвертое"
            type="password"
          />
        </Column>
      </Row>
    </Container>

    <Row>
      <Column>
        <Heading align="left" size="m">Typography</Heading>
      </Column>
    </Row>
    <Row>
      <Column>
        <Heading align="left" size="s">Headings</Heading>
      </Column>
    </Row>
    <Row>
      <Column>
        <Paragraph
        >We provide some basic styling on headings tags. In the example, you
          see the the 6 header tags' different sizes.
        </Paragraph>
      </Column>
    </Row>
    <Card align="left" size="m" style="margin-top: 2rem" type="border">
      <Container>
        <Row>
          <Column>
            <Heading align="left" size="xxl">Heading h1</Heading>
          </Column>
        </Row>
        <Row>
          <Column>
            <Heading align="left" size="xl">Heading h2</Heading>
          </Column>
        </Row>
        <Row>
          <Column>
            <Heading align="left" size="l">Heading h3</Heading>
          </Column>
        </Row>
        <Row>
          <Column>
            <Heading align="left" size="m">Heading h4</Heading>
          </Column>
        </Row>
        <Row>
          <Column>
            <Heading align="left" size="s">Heading h5</Heading>
          </Column>
        </Row>
        <Row>
          <Column>
            <Heading align="left" size="xs">Heading h6</Heading>
          </Column>
        </Row>
      </Container>
    </Card>
    <Row>
      <Column>
        <Heading align="left" size="s">Paragraphs</Heading>
      </Column>
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

    <Row :cols="3">
      <Column>
        <Checkbox position="left" type="main">Текст</Checkbox>
      </Column>
      <Column>
        <Checkbox position="left" type="secondary">Текст</Checkbox>
      </Column>
      <Column>
        <Checkbox position="left" type="accent">Текст</Checkbox>
      </Column>
    </Row>

    <Row>
      <Column>
        <PhoneInput />
      </Column>
    </Row>

    <Row>
      <Column>
        <TextInput label="Номер паспорта" mask="0308 075673" type="text" />
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
          :options="['Имею гражданство РФ', 'Не имею гражданство РФ']"
          label="Гражданство"
        />
      </Column>
    </Row>

    <Row>
      <Column>
        <Select
          ref="cashback_selector"
          v-model="debug_info"
          :max_selected="3"
          :options="[
            'Аптеки',
            'Ozon.ru',
            'Пятёрочка',
            'Спорттовары',
            'Такси',
            'Рестораны',
          ]"
          label="Выберите повышенный Кэшбэк"
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
          Nulla rerum unde ut!
        </Paragraph>
      </Column>
    </Row>

    <Link link="/connect" target="_blank">Подключиться</Link>

    <Row>
      <Column>
        <TextInput v-model="fullName" label="Полное имя" type="text" />
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
      <Column>
        <Spinner mode="border" type="primary"></Spinner>
      </Column>
      <Column>
        <Spinner mode="border" type="secondary"></Spinner>
      </Column>
      <Column>
        <Spinner mode="border" type="accent"></Spinner>
      </Column>
    </Row>

    <Row style="margin-top: 10px">
      <Column>
        <Spinner mode="growing" type="primary"></Spinner>
      </Column>
      <Column>
        <Spinner mode="growing" type="secondary"></Spinner>
      </Column>
      <Column>
        <Spinner mode="growing" type="accent"></Spinner>
      </Column>
    </Row>

    <Row>
      <Column>
        <PhoneInput v-model="debug_info" label="Тестовое поле" type="text" />
      </Column>
    </Row>
    <Row>
      <Column>
        <Paragraph>{{ debug_info }}</Paragraph>
      </Column>
    </Row>
    <Row>
      <Column>
        <TextInputButton label="sviridov@sviirdovcomp.ru">
          <template v-slot:left-icon>
            <svg
              fill="none"
              height="36"
              viewBox="0 0 36 36"
              width="36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.0926 28.0462C31.7083 26.1024 32.832 23.798 33.3686
                21.328C33.9053 18.8579 33.8392 16.295 33.1759 13.856C32.5126
                11.4169 31.2716 9.1735 29.5579 7.31551C27.8442 5.45751 25.7081
                4.0396 23.3306 3.18171C20.953 2.32381 18.4037 2.05119 15.8985
                2.38689C13.3932 2.72259 11.0057 3.65674 8.93781 5.11032C6.86994
                6.56389 5.18259 8.49414 4.01849 10.7378C2.85439 12.9814 2.24779
                15.4724 2.25001 18C2.25086 21.6745 3.54572 25.2313 5.90738
                28.0462L5.88488 28.0654C5.96363 28.1599 6.05363 28.2409 6.13463
                28.3342C6.23588 28.4501 6.34501 28.5592 6.44963 28.6717C6.76463
                29.0137 7.08863 29.3422 7.42838 29.6505C7.53188 29.745 7.63876
                29.8327 7.74338 29.9227C8.10338 30.2332 8.47351 30.528 8.85713
                30.8025C8.90663 30.8362 8.95163 30.8801 9.00113 30.915V30.9015C11.636
                32.7557 14.7792 33.7508 18.0011 33.7508C21.223 33.7508 24.3663 32.7557
                27.0011 30.9015V30.915C27.0506 30.8801 27.0945 30.8362 27.1451
                30.8025C27.5276 30.5269 27.8989 30.2332 28.2589 29.9227C28.3635
                29.8327 28.4704 29.7439 28.5739 29.6505C28.9136 29.3411 29.2376
                29.0137 29.5526 28.6717C29.6573 28.5592 29.7653 28.4501 29.8676
                28.3342C29.9475 28.2409 30.0386 28.1599 30.1174 28.0642L30.0926
                28.0462ZM18 9C19.0013 9 19.9801 9.29691 20.8126 9.85318C21.6451
                10.4095 22.294 11.2001 22.6771 12.1252C23.0603 13.0502 23.1606
                14.0681 22.9652 15.0501C22.7699 16.0322 22.2877 16.9342 21.5797
                17.6422C20.8717 18.3502 19.9697 18.8324 18.9877 19.0277C18.0056
                19.2231 16.9877 19.1228 16.0627 18.7396C15.1376 18.3565 14.347
                17.7076 13.7907 16.8751C13.2344 16.0425 12.9375 15.0638 12.9375
                14.0625C12.9375 12.7198 13.4709 11.4322 14.4203 10.4828C15.3697
                9.53337 16.6573 9 18 9ZM9.00788 28.0462C9.0274 26.5691 9.6277
                25.159 10.6789 24.1211C11.7301 23.0831 13.1477 22.5008 14.625
                22.5H21.375C22.8523 22.5008 24.2699 23.0831 25.3211 24.1211C26.3723
                25.159 26.9726 26.5691 26.9921 28.0462C24.5248 30.2696 21.3213
                31.5001 18 31.5001C14.6787 31.5001 11.4752 30.2696 9.00788 28.0462Z"
                fill="#999999"
              />
            </svg>
          </template>

          <template v-slot:right-icon>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.06 5.72667L8 8.78L4.94 5.72667L4 6.66667L8 10.6667L12 6.66667L11.06 5.72667Z"
                fill="#999999"
              />
            </svg>
          </template>
        </TextInputButton>
      </Column>
    </Row>
    <Row>
      <Column>
        <Dropdown :left="6" direction="top-right">
          <template #toggle>
            <Button>top-right direction</Button>
          </template>
          <template #content>
            <div :style="{ display: 'flex', flexDirection: 'column' }">
              <div :style="{ padding: '0.5rem' }">Label 0</div>
              <div :style="{ padding: '0.5rem' }">Label 1</div>
              <div :style="{ padding: '0.5rem' }">Label 2</div>
              <div :style="{ padding: '0.5rem' }">Label 3</div>
            </div>
          </template>
        </Dropdown>
      </Column>

      <Column>
        <Dropdown direction="top-center">
          <template #toggle>
            <Button>top-center direction</Button>
          </template>
          <template #content>
            <div :style="{ display: 'flex', flexDirection: 'column' }">
              <div :style="{ padding: '0.5rem' }">Label 0</div>
              <div :style="{ padding: '0.5rem' }">Label 1</div>
              <div :style="{ padding: '0.5rem' }">Label 2</div>
              <div :style="{ padding: '0.5rem' }">Label 3</div>
            </div>
          </template>
        </Dropdown>
      </Column>
    </Row>

    <Row>
      <Column>
        <Modal>
          <template #toggle>
            <Button>Открыть</Button>
          </template>

          <template #modal-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            at ea error excepturi, expedita inventore nulla officia omnis qui
            quod! Distinctio fuga inventore nemo odio perspiciatis quas quia
            quis velit!
          </template>

          <template #modal-footer>
            <Row :cols="2" align="right">
              <Column>
                <Button type="clear">Отменить</Button>
              </Column>
              <Column>
                <Button type="default">Хорошо</Button>
              </Column>
            </Row>
          </template>
        </Modal>
      </Column>
    </Row>

    <Row>
      <Column>
        <AutocompleteInput v-model="debug_info" :items="['Привет', 'Привет мир', 'привет']" label="Приветствие" />
      </Column>
    </Row>

    <Row>
      <Column>
        <Paragraph>
          {{ debug_info }}
        </Paragraph>
      </Column>
    </Row>

    <Row>
      <Column>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda autem culpa eveniet
          excepturi hic incidunt iusto labore laboriosam laudantium molestiae neque obcaecati recusandae sapiente sequi
          temporibus totam, vitae voluptate?
        </Paragraph>
      </Column>
    </Row>
  </div>
</template>

<script>
import AutocompleteInput from "./components/AutocompleteInput.vue";
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import Checkbox from "./components/Checkbox.vue";
import CheckboxBlock from "./components/CheckboxBlock.vue";
import Dropdown from "./components/Dropdown.vue";
import { Column, Container, Row } from "./components/Grid.vue";
import Heading from "./components/Heading.vue";
import Link from "./components/Link.vue";
import Modal from "./components/Modal.vue";
import Paragraph from "./components/Paragraph.vue";
import PhoneInput from "./components/PhoneInput.vue";
import Progress from "./components/Progress.vue";
import Select from "./components/Select.vue";
import Spinner from "./components/Spinner.vue";
import TextInput from "./components/TextInput.vue";
import TextInputButton from "./components/TextInputButton.vue";

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
    TextInputButton,
    Dropdown,
    Modal,
    Checkbox,
    AutocompleteInput
  },
  data() {
    return {
      fullName: "",
      debug_info: ""
    };
  }
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
