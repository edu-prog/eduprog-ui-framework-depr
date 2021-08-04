<h1 align="center">
    Eduprog: Vue design system
</h1>

<div align="center">
    
[![CI](https://github.com/edu-prog/design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/edu-prog/design-system/actions/workflows/ci.yml)

</div>

В дизайн системе предоставлены все необходимые компоненты и паттерны, которые используются в разработке front-end приложений Eduprog.

## 📦 Установка

```bash
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

## Обновления

Если Вы хотите внести изменение в репозиторий, пожалуйста используйте для этого **GitHub Flow**:

* Создайте ветку
* Добавьте в ветку изменённые файлы
* зафиксируйте изменения
* отправьте в удаленный репозиторий

После этого откройте **pull request** и добавьте другого разработчика, в качестве Reviewer.
