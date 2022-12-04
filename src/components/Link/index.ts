import Block from '../../utils/Block';
import template from './link.hbs';


interface LinkProps {
  class?: string;
  href: string;
  title: string;
  events?: Record<string, (...args: any) => void>
}

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
