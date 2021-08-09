# Modal

## Свойства

| Свойство   | Значения | Описание                        |
| ---------- | -------- | ------------------------------- |
| fullscreen | bool     | модуль на весь экран            |
| fluid      | string   | модуль адаптируемый к view-port |

## Пример

![пример](https://i.imgur.com/sDjBhnI.gif)

```vue
<Modal>
    <template #toggle>
    <Button>Открыть</Button>
    </template>

    <template #modal-content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
    at ea error excepturi, expedita inventore nulla officia omnis qui
    quod! Distinctio fuga inventore nemo odio perspiciatis quas quia
    quis velit!
    </template>

    <template #modal-footer>
    <Row align="right" :cols="2">
        <Column>
        <Button type="clear">Отменить</Button>
        </Column>
        <Column>
        <Button type="default">Хорошо</Button>
        </Column>
    </Row>
    </template>
</Modal>
```
