# Paragraph

```js
import Paragraph from "eduprog-ds/src/components/Paragraph.vue";
```

## Свойства

| Свойство   | Значения              | Описание                           |
| ---------- | --------------------- | ---------------------------------- |
| children   | string                | текст параграфа                    |
| type       | {small, normal, lead} | тип параграфа                      |
| align      | {left, center, right} | выравнивание параграфа             |
| text-color | string                | цвет параграфа                     |
| wrap       | boolean               | переносится ли параграф по-строчно |

## Пример

![Пример](https://i.imgur.com/mw9Pd2b.png)

```vue
<Row>
  <Column>
    <Paragraph type="small">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      dolore, dolorem doloremque ducimus error excepturi fugit ipsam
      laborum, minima necessitatibus omnis perspiciatis porro reiciendis
      suscipit vel! Aliquid deserunt magnam neque!
    </Paragraph>
  </Column>
</Row>
<Row>
  <Column>
    <Paragraph type="normal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      dolore, dolorem doloremque ducimus error excepturi fugit ipsam
      laborum, minima necessitatibus omnis perspiciatis porro reiciendis
      suscipit vel! Aliquid deserunt magnam neque!
    </Paragraph>
  </Column>
</Row>
<Row>
  <Column>
    <Paragraph type="lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      dolore, dolorem doloremque ducimus error excepturi fugit ipsam
      laborum, minima necessitatibus omnis perspiciatis porro reiciendis
      suscipit vel! Aliquid deserunt magnam neque!
    </Paragraph>
  </Column>
</Row>
```
