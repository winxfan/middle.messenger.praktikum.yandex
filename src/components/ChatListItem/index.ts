import Block from '../../utils/Block';
import template from './chatListItem.hbs';


interface ChatListItemProps {
  name: string;
  text: string;
  time: string;
  count?: string;
  events?: Record<string, (...args: any) => void>
}

export class ChatListItem extends Block<ChatListItemProps> {
  constructor(props: ChatListItemProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
