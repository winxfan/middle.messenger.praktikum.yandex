import Block from '../../utils/Block';
import template from './returnBack.hbs';


interface ReturnBackProps {
  class?: string;
  events?: Record<string, (...args: any) => void>
}

export class ReturnBack extends Block<ReturnBackProps> {
  constructor(props: ReturnBackProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
