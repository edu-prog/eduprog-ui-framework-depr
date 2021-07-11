# Row

```js
import PhoneInput from "eduprog-design-system/src/components/Row.vue";
```

## Properties

| Properties | Values | Description                            |
| ---------- | ------ | -------------------------------------- |
| cols       | Number | Maximum number of columns in one line. |

## Examples

![Example](https://i.imgur.com/BriCISU.png)

```vue
<Row :cols="2">
    <Column>
        <Button type="main">Sign in</Button>
    </Column>
    <Column>
        <Button type="secondary">Sign in</Button>
    </Column>
    <Column>
        <Button type="secondary">Sign in</Button>
    </Column>
</Row>
```
