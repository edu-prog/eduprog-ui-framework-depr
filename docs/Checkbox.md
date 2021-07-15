# Checkbox

```js
import Checkbox from "eduprog-ds/src/components/Checkbox.vue";
```

## Properties

| Properties | Values                    | Description             |
| ---------- | ------------------------- | ----------------------- |
| children   | string                    | Checkbox label          |
| type       | {main, secondary, accent} | Checkbox type           |
| position   | {right, left}             | Checkbox position       |
| check      | {true, false}             | Checkbox checked status |
| disabled   | {true, false}             | Is checkbox disabled    |

## Examples

![example](https://i.imgur.com/abhxNnC.png)

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
