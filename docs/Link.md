# Link

```js
import Link from "eduprog-ds/src/components/Link.vue";
```

## Свойства

| Свойство | Значения | Описание                                                              |
| -------- | -------- | --------------------------------------------------------------------- |
| link     | string   | ссылка для переадресации                                              |
| target   | string   | [target](http://htmlbook.ru/html/a/target) ссылки                     |
| title    | string   | Заголовок, который будет отображаться при наведении курсора на ссылку |

## Пример

```vue
<Row>
  <Column>
    <Link link="/connect" target="_blank">Подключиться</Link>
  </Column>
</Row>
```

![Пример](https://i.imgur.com/zsah5Eb.png)
