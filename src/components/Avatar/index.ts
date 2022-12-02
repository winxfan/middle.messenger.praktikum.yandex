import Block from '../../utils/Block';
import template from './avatar.hbs';

interface AvatarProps {
  class?: string;
  name: string;
  events?: Record<string, (...args: any) => void>
}

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
