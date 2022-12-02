import Block from '../../utils/Block';
import template from './notFound.hbs';
import { ErrorModule } from "../../components/ErrorModule";

class NotFoundPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.ErrorModule = new ErrorModule({
      code: '404',
      description: 'Не туда попали'
    })
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

export default NotFoundPage;
