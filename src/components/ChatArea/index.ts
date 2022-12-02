import Block from '../../utils/Block';
import template from './chatArea.hbs';


export class ChatArea extends Block {
  constructor() {
    super({});
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
