# Checkbox Block

```js
import CheckboxBlock from "eduprog-ds/src/components/CheckboxBlock.vue";
```

## Свойства

| Свойство | Значения                                            | Описание                         |
| -------- | --------------------------------------------------- | -------------------------------- |
| options  | `[{icon: 'path_to_icon', content: 'button_title'}]` | Список опций для блока чекбоксов |

## Пример

![Пример](https://i.imgur.com/L5XRGuH.gif)

```vue
<Row>
<Column>
  <CheckboxBlock
      :options="[
            {
              icon: require('@/assets/icons/back-end-development.svg'),
              content: 'Front-end development',
            },
            {
              icon: require('@/assets/icons/front-end-development.svg'),
              content: 'Back-end development',
            },
            {
              icon: require('@/assets/icons/front-end-development.svg'),
              content: 'Algorithms and data structures',
            },
          ]"
  >
  </CheckboxBlock>
</Column>
</Row>
```
