<h1 align="center">
    Eduprog: Vue design system
</h1>

[![Eduprog DS Build](https://github.com/edu-prog/design-system/actions/workflows/node.js.yml/badge.svg)](https://github.com/edu-prog/design-system/actions/workflows/node.js.yml)

## 📦 Installation

VueJs-design-system is avaliable as an npm package.

```sh
// with npm
npm install edu-prog/design-system --save

// with yarn
yarn add edu-prog/design-system --save
```

## 🚗 Usage

Here is a quick example to get you started, it's all you need:

```vue
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
import Button from "eduprog-ds/src/components/Button.vue";
import Heading from "eduprog-ds/src/components/Heading.vue";
import TextInput from "eduprog-ds/src/components/TextInput.vue";

import { Row, Column } from "eduprog-ds/src/components/Grid.vue";

export default {
  name: "Home",
  components: {
    Button,
    Row,
    Column,
    TextInput,
    Heading,
  },
};
</script>
```
