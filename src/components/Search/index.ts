import Block from '../../utils/Block';
import template from './search.hbs';


interface SearchProps {
  class?: string;
  events?: Record<string, (...args: any) => void>
}

export class Search extends Block<SearchProps> {
  constructor(props: SearchProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
