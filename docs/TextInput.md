# TextInput

```js
import TextInput from "eduprog-ds/src/components/TextInput.vue";
```

## Свойства

| Свойство   | Значения          | Описание                   |
| ---------- | ----------------- | -------------------------- |
| type       | {text, password}  | тип Input'а                |
| label      | string            | заголовок Input'а          |
| size       | {xs, s, m, l, xl} | размер Input'а             |
| mask       | string            | маска Input'а              |
| max_length | number            | максимальная длина Input'a |
| readonly   | boolean           | Только для чтения?         |

## Пример

![Пример](https://i.imgur.com/Qw2HntY.png)

```vue
<Row>
    <Column>
    <TextInput type="text" label="Номер паспорта" mask="0308 075673" />
    </Column>
</Row>
```
