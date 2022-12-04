import Block from '../../utils/Block';
import template from './profile.hbs';
import { ReturnBack } from "../../components/ReturnBack";
import { Avatar } from "../../components/Avatar";
import { ProfileInfo } from "../../components/ProfileInfo";
import { Link } from "../../components/Link";

type ProfileProps = {
  name: string
}

class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super({ ...props });
  }

  init() {
    this.children.ReturnBack = new ReturnBack({})

    this.children.Avatar = new Avatar({
      name: "avatar",
      class: "profile--avatar"
    })

    this.children.ProfileInfoArray = [
      new ProfileInfo( {
        title: "Почта",
        content: "pochta@yandex.ru"
      }),

      new ProfileInfo( {
        title: "Логин",
        content: "ivanivanov"
      }),

      new ProfileInfo( {
        title: "Имя",
        content: "Иван"
      }),

      new ProfileInfo( {
        title: "Фамилия",
        content: "Иванов"
      }),

      new ProfileInfo( {
        title: "Имя в чате",
        content: "Иван"
      }),

      new ProfileInfo( {
        title: "Телефон",
        content: "+7 (909) 967 30 30"
      }),
    ]

    this.children.LinksArray = [
      new Link( {
        title: "Изменить данные",
        href: "profile-edit",
        class: "text-blue"
      }),

      new Link( {
        title: "Изменить пароль",
        href: "edit-password",
        class: "text-blue"
      }),

      new Link( {
        title: "Выйти",
        href: "login",
        class: "text-red"
      }),
    ]
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

export default Profile;
