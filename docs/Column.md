# Row

```js
import Column from "eduprog-ds/src/components/Column.vue";
```

## Properties

| Properties | Values | Description                                   |
| ---------- | ------ | --------------------------------------------- |
| col        | Number | The number of cells that the column occupies. |

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
