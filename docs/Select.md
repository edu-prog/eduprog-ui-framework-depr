# Select

```js
import Select from "eduprog-ds/src/components/Select.vue";
```

## Свойства

| Свойство | Значения         | Описания             |
| -------- | ---------------- | -------------------- |
| label    | string           | заголовок выборщика  |
| options  | ['opt1', 'ops2'] | опции выборщика      |
| multiple | boolean          | множественный выбор? |

## Пример

![Пример](https://i.imgur.com/mwx3Ncx.gif)

```vue
<Row>
  <Column>
    <Select
      label="Гражданство"
      :options="['Имею гражданство РФ', 'Не имею гражданство РФ']"
    />
  </Column>
</Row>
<Row>
  <Column>
    <Select
      label="Выберите повышенный Кэшбэк"
      :options="[
            'Аптеки',
            'Ozon.ru',
            'Пятёрочка',
            'Спорттовары',
            'Такси',
            'Рестораны',
          ]"
      ref="cashback_selector"
      :max_selected="3"
      multiple
    />
  </Column>
</Row>
```
