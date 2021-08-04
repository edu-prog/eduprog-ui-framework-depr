# Heading

```js
import Heading from "eduprog-ds/src/components/Heading.vue";
```

## Свойства

| Свойство | Значение              | Описание               |
| -------- | --------------------- | ---------------------- |
| children | string                | текст заголовка        |
| size     | {xs, s, m, l, xl}     | размер заголовка       |
| align    | {left, center, right} | выравнивание заголовка |

## Пример

![Пример](https://i.imgur.com/UlUY6pU.png)

```vue
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
```

![Пример](https://i.imgur.com/OHKo97M.png)

```vue
<Row>
  <Column>
    <Heading size="xl" align="right">Регистрация</Heading>
  </Column>
</Row>
```
