# Checkbox

```js
import Checkbox from "eduprog-ds/src/components/Checkbox.vue";
```

## Свойства

| Свойство | Значения                  | Описание                                |
| -------- | ------------------------- | --------------------------------------- |
| children | string                    | заголовок чекбокса                      |
| type     | {main, secondary, accent} | тип чекбокса                            |
| position | {right, left}             | позиция чекбокса относительно заголовка |
| check    | {true, false}             | Выбран ли чекбокс                       |
| disabled | {true, false}             | Выключен ли чекбокс                     |

## Пример

![Пример](https://i.imgur.com/abhxNnC.png)

```vue
<Row>
    <Column>
        <Checkbox type="main" position="left" check>Test</Checkbox>
    </Column>
    <Column>
        <Checkbox type="secondary" position="left" check>Test</Checkbox>
    </Column>
    <Column>
        <Checkbox type="accent" position="left" check>Test</Checkbox>
    </Column>
</Row>
<Row>
    <Column>
        <Checkbox type="main" position="left">Test</Checkbox>
    </Column>
    <Column>
        <Checkbox type="secondary" position="left">Test</Checkbox>
    </Column>
    <Column>
        <Checkbox type="accent" position="left">Test</Checkbox>
    </Column>
</Row>
```
