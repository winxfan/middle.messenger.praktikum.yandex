import Block from '../../utils/Block';
import template from './input.hbs';
import { FieldProps } from "../Field";

type InputProps = FieldProps & {
  class?: string,
  placeholder?: string
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
