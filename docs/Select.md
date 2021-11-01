# Select

```js
import Select from "eduprog-ds/src/components/Select.vue";
```

## Свойства

| Свойство | Значения      | Описания            |
| -------- | ------------- | ------------------- |
| label    | string        | заголовок селекотра |
| options  | Array<string> | опции селектора     |

## Пример

![Пример](https://i.imgur.com/etljtuy.gif)

```vue
<Row>
  <Column>
    <Select
      label="Гражданство"
      :options="['Имею гражданство РФ', 'Не имею гражданство РФ']"
    />
  </Column>
</Row>
```
