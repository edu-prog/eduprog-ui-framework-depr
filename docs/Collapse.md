# Collapse

```js
import Collapse from "eduprog-ds/src/components/Collapse.vue";
```

## Описание

Компонент создан для показа контента пользователю при клике на элемент. (Проще осознать на примере).
В компоненте есть два слота: `target`, `content`:
`target` - элемент, при нажатии на который, будет показан/скрыт контент.
`content` - контент, который вы хотите выдать пользователю.

## Пример

![example](https://i.imgur.com/Crw5Icd.gif)

```vue
<Row>
  <Column>
    <Collapse transition="fade">
      <template #target>
        <Button>Open</Button>
      </template>

      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
        cupiditate debitis, eum expedita, hic incidunt, ipsum necessitatibus
        nesciunt nihil nobis porro quibusdam quod reiciendis reprehenderit
        vitae voluptas voluptatem! Asperiores beatae doloremque laudantium
        libero magnam maiores placeat repellendus sint ullam velit.
        Architecto blanditiis consectetur corporis distinctio doloremque eos
        explicabo, facilis, illo impedit in incidunt ipsam itaque iure
        laboriosam magnam maiores molestias neque non omnis optio qui quia
        quibusdam quisquam reprehenderit saepe similique temporibus, ullam
        vero vitae voluptatibus? Ad minus nisi numquam repudiandae suscipit
        tempora temporibus vel, veniam. Consequuntur earum facere hic odit
        officia perferendis perspiciatis quam quasi sunt unde. Asperiores,
        minus?
      </template>
    </Collapse>
  </Column>
</Row>
```