import Block from '../../utils/Block';
import template from './dialog.hbs';
import { DialogMessage } from "../DialogMessage";
import { Input } from "../Input";

export class Dialog extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.Messages = [
      new DialogMessage({
        text: "Привет сын",
        time: "11:23"
      }),

      new DialogMessage({
        text: "Привет пап",
        time: "11:23",
        from: "me"
      }),

      new DialogMessage({
        text: "Ты что пьян?!",
        time: "11:23"
      }),
    ]

    this.children.Input = new Input({
      name: 'send-message',
      class: "dialog-control--input",
      placeholder: "Сообщение"
    })
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
