# Row

```js
import { Column } from "eduprog-ds/src/components/Grid.vue";
```

## Свойства

| Свойство | Значение | Описание                                    |
| -------- | -------- | ------------------------------------------- |
| col      | Number   | Количество ячеек, которые занимает столбец. |

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
