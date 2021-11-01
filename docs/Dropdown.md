# Dropdown

```js
import Dropdown from "eduprog-ds/src/components/Dropdown.vue";
```

## Свойства

| Свойство     | Значение                                                               | Описание                                            |
| ------------ | ---------------------------------------------------------------------- | --------------------------------------------------- |
| direction    | {bottom-left, top-center, top-right, top-left, top-center, top-right]} | направление Dropdown                                |
| hover        | boolean                                                                | открывается по наведению на `target`                |
| clearly      | boolean                                                                | не показывается стрелочка навигации                 |
| fullView     | boolean                                                                | расстянуть диалог dropdown по вней ширине `target`. |
| closeOnClick | boolean                                                                | закрывать dropdown при клике на dropdown диалог     |

## Пример

![Пример](https://i.imgur.com/mobbMGg.gif)

```vue
<Row>
    <Column>
    <Dropdown direction="top-right">
        <template #toggle>
        <Button>top-right direction</Button>
        </template>
        <template #content>
        <div :style="{ display: 'flex', flexDirection: 'column' }">
            <div :style="{ padding: '0.5rem' }">Label 0</div>
            <div :style="{ padding: '0.5rem' }">Label 1</div>
            <div :style="{ padding: '0.5rem' }">Label 2</div>
            <div :style="{ padding: '0.5rem' }">Label 3</div>
        </div>
        </template>
    </Dropdown>
    </Column>

    <Column>
    <Dropdown direction="top-center">
        <template #toggle>
        <Button>top-center direction</Button>
        </template>
        <template #content>
        <div :style="{ display: 'flex', flexDirection: 'column' }">
            <div :style="{ padding: '0.5rem' }">Label 0</div>
            <div :style="{ padding: '0.5rem' }">Label 1</div>
            <div :style="{ padding: '0.5rem' }">Label 2</div>
            <div :style="{ padding: '0.5rem' }">Label 3</div>
        </div>
        </template>
    </Dropdown>
    </Column>
</Row>
```
