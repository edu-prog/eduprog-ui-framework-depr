# TextInput

```js
import TextInput from "eduprog-ds/src/components/TextInput.vue";
```

## Свойства

| Свойство           | Значения                     | Описание                                                       |
| ------------------ | ---------------------------- | -------------------------------------------------------------- |
| label              | string                       | заголовок TextInput                                            |
| mask               | string                       | маска TextInput                                                |
| max-length         | number                       | максимальная длина текст в TextInput                           |
| input-readonly     | boolean                      | неизменяемый TextInput                                         |
| input-type         | {text, tel, email, password} | тип Input в TextInput                                          |
| input-cursor       | {text, pointer}              | курсор при наведении на TextInput                              |
| validation-pattern | RegExpr                      | регулярное выражение для валидации TextInput                   |
| validation-message | string                       | сообщение, которое выведется пользователю при ошибки валидации |

## Пример

![Пример](https://i.imgur.com/Qw2HntY.png)

```vue
<Row>
  <Column>
    <TextInput type="text" label="Номер паспорта" mask="0308 075673" />
  </Column>
</Row>
```
