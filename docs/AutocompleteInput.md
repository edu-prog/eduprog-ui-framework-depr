# AutocompleteInput

```js
import AutocompleteInput from "eduprog-ds/src/components/AutocompleteInput.vue";
```

## Свойства

| Свойство | Значение                         | Описание                                       |
| -------- | -------------------------------- | ---------------------------------------------- |
| label    | string                           | заголовок поля ввода                           |
| options  | `['первое', 'второе', 'третье']` | Опции, которые будут предложены в autocomplete |

## Примеры

![PC](https://i.imgur.com/ydBUxOO.gif)

![Mobile](https://i.imgur.com/2Aunofw.gif)

```vue
<Row>
<Column>
  <AutocompleteInput
      :options="listCounties"
      label="Страна"/>
</Column>
</Row>
```
