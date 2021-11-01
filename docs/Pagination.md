# Pagination

```js
import Pagination from "eduprog-ds/src/components/Pagination.vue";
```

## Свойства

| Свойство      | Значения | Описание                                 |
| ------------- | -------- | ---------------------------------------- |
| length        | number   | количество страниц в блоке               |
| total-visible | number   | сколько страниц показывать в одном frame |

# Пример

![Example](https://i.imgur.com/hey9vbg.gif)

```vue
<Row>
<Column>
  <Pagination :length="400" :total_visible="10"/>
</Column>
</Row>
```
