# Heading

## Properties

| Properties | Values                | Description   |
| ---------- | --------------------- | ------------- |
| children   | string                | Heading text  |
| size       | {xs, s, m, l, xl}     | Heading size  |
| align      | {left, center, right} | Heading align |

## Example

![Example](https://i.imgur.com/UlUY6pU.png)

```vue
<Row>
    <Column><Heading size="xl">Hello, world!</Heading></Column>
</Row>
<Row>
    <Column><Heading size="l">Hello, world!</Heading></Column>
</Row>
<Row>
    <Column><Heading size="m">Hello, world!</Heading></Column>
</Row>
<Row>
    <Column><Heading size="s">Hello, world!</Heading></Column>
</Row>
<Row>
    <Column><Heading size="xs">Hello, world!</Heading></Column>
</Row>
```

![Example](https://i.imgur.com/OHKo97M.png)

```vue
<Row>
  <Column>
    <Heading size="xl" align="right">Регистрация</Heading>
  </Column>
</Row>
```
