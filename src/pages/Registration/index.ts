import Block from '../../utils/Block';
import template from './registration.hbs';

import { Link } from "../../components/Link";
import { Field } from "../../components/Field";
import { Button } from "../../components/Button";
import formOnSubmit from "../../utils/formOnSubmit";
import formValidation from "../../utils/formValidation";

class RegistrationPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.FieldsArray = [
      new Field({
        name: 'email',
        title: "Почта",
        hint: "латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.",
        events: {
          'focus': () => {
            formValidation(document.querySelector('input[name="email"]'))
          },
          'blur': () => {
            formValidation(document.querySelector('input[name="email"]'))
          }
        }
      }),

      new Field({
        name: 'login',
        title: "Логин",
        hint: "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).",
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
        name: 'first_name',
        title: "Имя",
        hint: "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).",
        events: {
          'focus': () => {
            formValidation(document.querySelector('input[name="first_name"]'))
          },
          'blur': () => {
            formValidation(document.querySelector('input[name="first_name"]'))
          }
        }
      }),

      new Field({
        name: 'second_name',
        title: "Фамилия",
        hint: "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).",
        events: {
          'focus': () => {
            formValidation(document.querySelector('input[name="second_name"]'))
          },
          'blur': () => {
            formValidation(document.querySelector('input[name="second_name"]'))
          }
        }
      }),

      new Field({
        name: 'phone',
        title: "Телефон",
        hint: "от 10 до 15 символов, состоит из цифр, может начинается с плюса.",
        events: {
          'focus': () => {
            formValidation(document.querySelector('input[name="phone"]'))
          },
          'blur': () => {
            formValidation(document.querySelector('input[name="phone"]'))
          }
        }
      }),

      new Field({
        name: 'password',
        title: "Пароль",
        type: "password",
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

      new Field({
        name: 'password-2',
        title: "Пароль (ещё раз)",
        type: "password",
        hint: "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
        events: {
          'focus': () => {
            formValidation(document.querySelector('input[name="password-2"]'))
          },
          'blur': () => {
            formValidation(document.querySelector('input[name="password-2"]'))
          }
        }
      }),
    ]

    this.children.LinksArray = [
      new Button({
        title: "Зарегистрироваться",
        type: 'submit',
        class: "button w-100",
        events: {
          'click': formOnSubmit
        }
      }),

      new Link({
        title: "Войти",
        href: 'login',
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

export default RegistrationPage;
