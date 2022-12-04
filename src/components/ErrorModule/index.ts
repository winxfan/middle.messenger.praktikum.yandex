import Block from '../../utils/Block';
import template from './errorModule.hbs';
import { Link } from "../Link";

interface ErrorModuleProps {
  code: string;
  description: string;
  events?: Record<string, (...args: any) => void>
}

export class ErrorModule extends Block<ErrorModuleProps> {
  constructor(props: ErrorModuleProps) {
    super({ ...props });
  }

  init() {
    this.children.Link = new Link({
      title: "Назад к чатам",
      href: "chat",
      class: "error-template--link text-blue"
    })
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
