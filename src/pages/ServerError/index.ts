import Block from '../../utils/Block';
import template from './serverError.hbs';
import { ErrorModule } from "../../components/ErrorModule";

class ServerErrorPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.ErrorModule = new ErrorModule({
      code: '500',
      description: 'Мы уже фиксим'
    })
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

export default ServerErrorPage;
