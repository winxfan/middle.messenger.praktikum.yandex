import Block from '../../utils/Block';
import template from './dialogMessage.hbs';

interface DialogMessageProps {
  from?: string;
  text: string;
  time: string;
}

export class DialogMessage extends Block<DialogMessageProps> {
  constructor(props: DialogMessageProps) {
    super({...props});
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
