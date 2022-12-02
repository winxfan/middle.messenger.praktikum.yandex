import Block from '../../utils/Block';
import template from './arrowLink.hbs';

interface ArrowLinkProps {
  class?: string;
  href: string;
  title: string;
  events?: Record<string, (...args: any) => void>
}

export class ArrowLink extends Block<ArrowLinkProps> {
  constructor(props: ArrowLinkProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
