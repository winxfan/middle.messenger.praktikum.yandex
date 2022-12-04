import Block from '../../utils/Block';
import template from './login.hbs';
import { Link } from "../../components/Link";
import { Field } from "../../components/Field";
import { Button } from "../../components/Button";
import formOnSubmit from "../../utils/formOnSubmit";
import formValidation from "../../utils/formValidation";

class LoginPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.FieldsArray = [
      new Field({
        name: 'login',
        title: "Логин",
        hint: 'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
        events: {
          'focus': () => {
            formValidation(document.querySelector('input[name="login"]'))
          },
          'blur': () => {
            formValidation(document.querySelector('input[name="login"]'))
          }
        }
      }),

      new Field({
        name: 'password',
        type: 'password',
        title: "Пароль",
        hint: "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
        events: {
          'focus': () => {
            formValidation(document.querySelector('input[name="password"]'))
          },
          'blur': () => {
            formValidation(document.querySelector('input[name="password"]'))
          }
        }
      }),
    ]

    this.children.LinksArray = [
      new Button({
        title: "Авторизоваться",
        type: 'submit',
        class: "button w-100",
        events: {
          'click': formOnSubmit
        }
      }),
      new Link({
        title: "Нет аккаунта?",
        href: 'registration',
        class: "button w-100 white no-border"
      }),

      new Link({
        title: "Открыть чат",
        href: 'chat',
        class: "button w-100 white no-border"
      }),
    ]
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

export default LoginPage;
