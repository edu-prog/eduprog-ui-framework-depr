# Checkbox Block

```js
import CheckboxBlock from "eduprog-ds/src/components/CheckboxBlock.vue";
```

## Свойства

| Свойство | Значения                                                | Описание                         |
| -------- | ------------------------------------------------------- | -------------------------------- |
| options  | ```[{icon: 'path_to_icon', content: 'button_title'}]``` | Список опций для блока чекбоксов |

## Пример

![Пример](https://i.imgur.com/L5XRGuH.gif)

```vue
<CheckboxBlock
  :options="[
    {
      icon: './assets/icons/front-end-development.svg',
      content: 'Front-end development',
    },
    {
      icon: './assets/icons/front-end-development.svg',
      content: 'Back-end development',
    },
    {
      icon: './assets/icons/front-end-development.svg',
      content: 'Algorithms and data structures',
    },
  ]"
>
</CheckboxBlock>
```
