# Progress

## Properties

| Properties | Values                                                         | Description        |
| ---------- | -------------------------------------------------------------- | ------------------ |
| Values     | [{value: 10, color: "#ffb000"}, {value: 90, color: "#ffcc00"}] | progress bar value |

## Methods

| Method   | Return Value | Description                                 |
| -------- | ------------ | ------------------------------------------- |
| getValue | string       | Return value that encapsulated in component |

## Example

![Example](https://i.imgur.com/DXTWPlW.png)

```vue
<Row>
  <Column>
    <Progress
      ref="progress"
      :values="[
        { value: 10, color: '#6320EE' },
        { value: 40, color: '#8075FF' },
        { value: 50, color: '#50C878' },
      ]"
    />
  </Column>
</Row>
```
