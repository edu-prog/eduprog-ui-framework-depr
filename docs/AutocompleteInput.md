# AutocompleteInput

```js
import AutocompleteInput from "eduprog-ds/src/components/AutocompleteInput.vue";
```

## Свойства

| Свойство    | Значение                                       | Описание               |
| ----------- | ---------------------------------------------- | ---------------------- |
| label        | string | заголовок поля ввода           |
| options        | `['первое', 'второе', 'третье']` | заголовок поля ввода           |

## Примеры

![Пример](https://i.imgur.com/qhWxioq.gif)

![Пример](https://i.imgur.com/6bI4rPt.gif)

```vue
<Row>
    <Column>
      <AutocompleteInput
        :options="listCounties"
        label="Страна" />
    </Column>
</Row>
```