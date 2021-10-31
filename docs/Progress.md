# Progress

```js
import Progress from "eduprog-ds/src/components/Progress.vue";
```

## Свойства

Значения для отрисовки `Progress` берутся из v-model атрибурта. Пример атрибута:

```js
const progressValue = [{ value: 30, color: "#ffbb00" }];
```

## Пример

![Пример](https://i.imgur.com/DXTWPlW.png)

```vue
<Row>
  <Column>
    <Progress
          v-model="progressValue"
    />
  </Column>
</Row>
<!-- 
  При этом, progressValue: 
  const progressValue = [
        { value: 10, color: '#6320EE' },
        { value: 40, color: '#8075FF' },
        { value: 50, color: '#50C878' },
]
-->
```
