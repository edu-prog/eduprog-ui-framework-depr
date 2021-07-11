# Card

```js
import Card from "eduprog-design-system/src/components/Card";
```

## Properties

| Properties | Values                | Description   |
| ---------- | --------------------- | ------------- |
| children   | string                | Card children |
| type       | {shadow, border}      | Card type     |
| size       | {xs, s, m, l, xl}     | Card size     |
| align      | {left, center, right} | Card align    |

## Example

![Example](https://i.imgur.com/Px9Zvf4.png)

```vue
<Card size="m" type="border">
  <Row container>
    <Column>
      <Heading size="xl">Регистрация</Heading>
    </Column>
  </Row>

  <Row container>
    <Column>
      <PhoneInput />
    </Column>
  </Row>

  <Row container>
    <Column>
      <TextInput type="text" label="Фамилия и Имя" mask="Иванов Иван" />
    </Column>
  </Row>

  <Row container>
    <Column>
      <TextInput type="password" label="Пароль" />
    </Column>
  </Row>

  <Row container>
    <Column>
      <Button type="main" size="l" mode="block"> Регистрация </Button>
    </Column>
  </Row>

  <Row container style="margin-top: 10px">
    <Column>
      <Checkbox :check="true" position="left" type="main">
        Я принимаю условия Пользовательского соглашения и даю своё согласие
        Яндексу на обработку моей персональной информации на условиях,
        определенных Политикой конфиденциальности.
      </Checkbox>
    </Column>
  </Row>

  <Row container style="margin-top: 10px">
    <Column>
      <Checkbox position="left" type="main">
        Я не хочу получать рекламу и другие предложения данного сервиса
        Яндекса
      </Checkbox>
    </Column>
  </Row>

  <Row>
    <Column>
      <Paragraph type="normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
        consequatur cupiditate doloremque expedita fugit illo iste magnam
        minima nostrum, pariatur perferendis porro quam quasi, qui ratione
        sapiente sed. Illo, quod.
      </Paragraph>
    </Column>
  </Row>
</Card>
```