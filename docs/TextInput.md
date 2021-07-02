# TextInput

## Properties

| Properties | Values            | Description           |
| ---------- | ----------------- | --------------------- |
| type       | {text, password}  | Input type            |
| label      | string            | Input label           |
| size       | {xs, s, m, l, xl} | Input size            |
| mask       | string            | Input mask            |
| max_length | number            | Input max text length |


## Example

![Example](https://i.imgur.com/Qw2HntY.png)

```vue
<Row>
    <Column>
    <TextInput type="text" label="Номер паспорта" mask="0308 075673" />
    </Column>
</Row>
```