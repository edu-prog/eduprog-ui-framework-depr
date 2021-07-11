# Paragraph

```js
import Paragraph from "eduprog-design-system/src/components/Paragraph.vue";
```

## Properties

| Properties | Values                | Description        |
| ---------- | --------------------- | ------------------ |
| children   | string                | Paragraph children |
| type       | {small, normal, lead} | Paragraph type     |
| align      | {left, center, right} | Paragraph align    |

## Example

![Example](https://i.imgur.com/mw9Pd2b.png)

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
