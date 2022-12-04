import Block from '../../utils/Block';
import template from './field.hbs';
import { Input } from "../Input";

export interface FieldProps {
  type?: string;
  name: string;
  title?: string;
  hint?: string;
  events?: Record<string, (...args: any) => void>
}

export class Field extends Block<FieldProps> {
  constructor(props: FieldProps) {
    super({ ...props });
  };

  init() {
    this.children.Input = new Input({
      ...this.props,
      class: "field--input"
    });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
