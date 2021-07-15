# Checkbox Block

```js
import CheckboxBlock from "eduprog-ds/src/components/CheckboxBlock.vue";
```

## Properties

| Properties | Values                                                  | Description                   |
| ---------- | ------------------------------------------------------- | ----------------------------- |
| options    | ```[{icon: 'path_to_icon', content: 'button_title'}]``` | Options to CheckboxBlock List |

## Example

![Example](https://i.imgur.com/L5XRGuH.gif)

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
