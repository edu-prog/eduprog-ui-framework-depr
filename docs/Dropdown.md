# Dropdown

```js
import Dropdown from "eduprog-ds/src/components/Dropdown.vue";
```

## Свойства

| Свойство  | Значение                                                  | Описание                  |
| --------- | --------------------------------------------------------- | ------------------------- |
| direction | {bottom-[left, center, right], top-[left, center, right]} | Направление Dropdown      |
| left      | number                                                    | Отклонение Dropdown влево |

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
