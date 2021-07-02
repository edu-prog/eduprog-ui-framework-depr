# Button

## Properties

| Properties | Values                             | Description             |
| ---------- | ---------------------------------- | ----------------------- |
| type       | {main, secondary, accent, default} | Button type             |
| size       | {xs, s, m, l, xl}                  | Button size             |
| round      | {true, false}                      | Is button round         |
| rounded    | {true, false}                      | Is button rounded       |
| mode       | {outlined}                         | Button modificator type |
|            |                                    |                         |

## Example

<div style="text-align: center;">
    <img src="https://i.imgur.com/UaePjvy.png" alt="Example" />
</div>

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