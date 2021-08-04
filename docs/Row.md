# Row

```js
import Row from "eduprog-ds/src/components/Row.vue";
```

## Свойства

| Свойство | Значения | Описание                                         |
| -------- | -------- | ------------------------------------------------ |
| cols     | Number   | Максимальное количество столбцов в одной строке. |

## Пример

![Пример](https://i.imgur.com/BriCISU.png)

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
