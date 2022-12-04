import Block from '../../utils/Block';
import template from './home.hbs';
import { Link } from "../../components/Link";

class Home extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.LinksArray = [
      new Link( {
        title: "login",
        class: "button",
        href: "login"
      }),

      new Link( {
        title: "registration",
        class: "button",
        href: "registration"
      }),

      new Link( {
        title: "NotFound",
        class: "button",
        href: "not-found"
      }),

      new Link( {
        title: "ServerError",
        class: "button",
        href: "server-error"
      }),

      new Link( {
        title: "chat",
        class: "button",
        href: "chat"
      }),

      new Link( {
        title: "profile",
        class: "button",
        href: "profile"
      }),

      new Link( {
        title: "edit-profile",
        class: "button",
        href: "profile-edit"
      }),

      new Link( {
        title: "edit-password",
        class: "button",
        href: "edit-password"
      }),
    ]
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

export default Home;
