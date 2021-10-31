# Button

```js
import Button from "eduprog-ds/src/components/Button.vue";
```

## Свойства

| Свойство    | Значение                                       | Описание               |
| ----------- | ---------------------------------------------- | ---------------------- |
| children    | string                                         | заголовок кнопки       |
| type        | {default, action, link, pseudo, clear, raised} | стиль кнопки           |
| size        | {xs, s, m, l, xl}                              | размер кнопки          |
| round       | {true, false}                                  | круглая ли кнопка      |
| rounded     | {true, false}                                  | закругленная ли кнопка |
| badge       | string                                         | текст отметки          |
| badge-type  | {edge, inside}                                 | Тип отметки            |
| badge-color | {primary, secondary, accent, success, danger}  | Цвет отметки           |

## Example

![Пример](https://i.imgur.com/0qVMXRF.png)

```vue
<Row :cols="3">
  <Column>
    <Button type="action">Action</Button>
  </Column>
  <Column>
    <Button type="default">Default</Button>
  </Column>
  <Column>
    <Button type="link">Link</Button>
  </Column>
  <Column>
    <Button type="pseudo">Pseudo</Button>
  </Column>
  <Column>
    <Button type="clear">Clear</Button>
  </Column>
  <Column>
    <Button type="raised">Raised</Button>
  </Column>

  <Column>
    <Button rounded type="action">Action</Button>
  </Column>
  <Column>
    <Button rounded type="default">Default</Button>
  </Column>
  <Column>
    <Button rounded type="link">Link</Button>
  </Column>
  <Column>
    <Button rounded type="pseudo">Pseudo</Button>
  </Column>
  <Column>
    <Button rounded type="clear">Clear</Button>
  </Column>
  <Column>
    <Button rounded type="raised">Raised</Button>
  </Column>

  <Column>
    <Button
      rounded
      type="action"
      badge="100"
      badge_type="edge"
      badge_color="danger"
      >Badge</Button
    >
  </Column>
  <Column>
    <Button
      rounded
      type="action"
      badge="100"
      badge_type="inside"
      badge_color="danger"
      >Badge</Button
    >
  </Column>
</Row>
```
