# Button

```js
import Button from "eduprog-ds/src/components/Button.vue";
```

## Properties

| Properties | Values                             | Description             |
| ---------- | ---------------------------------- | ----------------------- |
| children   | string                             | Button label            |
| type       | {main, secondary, accent, default} | Button type             |
| size       | {xs, s, m, l, xl}                  | Button size             |
| round      | {true, false}                      | Is button round         |
| rounded    | {true, false}                      | Is button rounded       |
| mode       | {outlined}                         | Button modificator type |

## Example

![Example](https://i.imgur.com/UaePjvy.png)

```vue
<Row>
      <Column>
        <Button type="main">Sign in</Button>
      </Column>
      <Column>
        <Button type="secondary">Sign in</Button>
      </Column>
      <Column>
        <Button type="accent">Sign in</Button>
      </Column>
</Row>
<Row>
      <Column>
        <Button type="main" mode="outlined">Sign in</Button>
      </Column>
      <Column>
        <Button type="secondary" mode="outlined">Sign in</Button>
      </Column>
      <Column>
        <Button type="accent" mode="outlined">Sign in</Button>
      </Column>
</Row>
<Row>
      <Column>
        <Button type="main" rounded>Sign in</Button>
      </Column>
      <Column>
        <Button type="secondary" rounded>Sign in</Button>
      </Column>
      <Column>
        <Button type="accent" rounded>Sign in</Button>
      </Column>
</Row>
<Row>
      <Column>
        <Button type="main" round>R</Button>
      </Column>
      <Column>
        <Button type="secondary" round>R</Button>
      </Column>
      <Column>
        <Button type="accent" round>R</Button>
      </Column>
</Row>
```
