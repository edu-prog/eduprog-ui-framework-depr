# Progress

```js
import Progress from "eduprog-ds/src/components/Progress.vue";
```

## Свойства

| Свойство | Значение                                                       | Описание               |
| -------- | -------------------------------------------------------------- | ---------------------- |
| Значение | [{value: 10, color: "#ffb000"}, {value: 90, color: "#ffcc00"}] | значения прогресс-бара |

## Пример

![Пример](https://i.imgur.com/DXTWPlW.png)

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
