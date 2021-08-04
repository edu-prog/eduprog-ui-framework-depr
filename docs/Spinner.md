# Spinner

```js
import Spinner from "eduprog-ds/src/components/Spinner.vue";
```

## Свойства

| Свойство | Значения                     | Описание            |
| -------- | ---------------------------- | ------------------- |
| type     | {primary, secondary, accent} | цвет Spinner        |
| mode     | {border, growing}            | модификация Spinner |

## Пример

![Пример](https://i.imgur.com/RBY70LU.gif)

```vue
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
```
