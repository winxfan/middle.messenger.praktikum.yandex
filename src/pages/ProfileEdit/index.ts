import Block from '../../utils/Block';
import template from './profileEdit.hbs';
import { ReturnBack } from "../../components/ReturnBack";
import { Avatar } from "../../components/Avatar";
import { ProfileInfoEdit } from "../../components/ProfileInfoEdit";
import { Button } from "../../components/Button";

type ProfileEditProps = {
  name: string
}

class ProfileEdit extends Block<ProfileEditProps> {
  constructor(props: ProfileEditProps) {
    super({...props});
  }

  init() {
    this.children.ReturnBack = new ReturnBack({})

    this.children.Avatar = new Avatar({
      name: "avatar",
      class: "profile--avatar"
    })

    this.children.ProfileInfoEditArray = [
      new ProfileInfoEdit( {
        title: "Почта",
        value: "pochta@yandex.ru",
        name: "email",
        edit: "true"
      }),

      new ProfileInfoEdit( {
        title: "Логин",
        value: "ivanivanov",
        name: "login",
        edit: "true"
      }),

      new ProfileInfoEdit( {
        title: "Имя",
        value: "Иван",
        name: "first_name",
        edit: "true"
      }),

      new ProfileInfoEdit( {
        title: "Фамилия",
        value: "Иванов",
        name: "second_name",
        edit: "true"
      }),

      new ProfileInfoEdit( {
        title: "Имя в чате",
        value: "Иван",
        name: "display_name",
        edit: "true"
      }),

      new ProfileInfoEdit( {
        title: "Телефон",
        value: "+7 (909) 967 30 30",
        name: "phone",
        edit: "true"
      }),
    ]

    this.children.Button = new Button({
      class: "margin-0-auto",
      title: "Сохранить данные"
    })
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

export default ProfileEdit;
