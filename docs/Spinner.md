# Spinner

```js
import PhoneInput from "eduprog-design-system/src/components/Spinner.vue";
```

## Properties

| Properties | Values                       | Description   |
| ---------- | ---------------------------- | ------------- |
| type       | {primary, secondary, accent} | Spinner color |
| mode       | {border, growing}            | Spinner mode  |

## Example

![Example](https://i.imgur.com/RBY70LU.gif)

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
