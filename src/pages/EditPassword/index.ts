import Block from '../../utils/Block';
import template from './editPassword.hbs';
import { ReturnBack } from "../../components/ReturnBack";
import { Avatar } from "../../components/Avatar";
import { ProfileInfoEdit } from "../../components/ProfileInfoEdit";
import { Button } from "../../components/Button";

type EditPasswordProps = {
  name: string
}

class EditPassword extends Block<EditPasswordProps> {
  constructor(props: EditPasswordProps) {
    super({...props});
  }

  init() {
    this.children.ReturnBack = new ReturnBack({})

    this.children.Avatar = new Avatar({
      name: "avatar",
      class: "profile--avatar"
    })

    this.children.ProfileInfoEditsArray = [
      new ProfileInfoEdit( {
        title: "Старый пароль",
        type: "password",
        name: "oldPassword",
        edit: "true"
      }),

      new ProfileInfoEdit( {
        title: "Новый пароль",
        type: "password",
        name: "newPassword",
        edit: "true"
      }),

      new ProfileInfoEdit( {
        title: "Повторите новый пароль",
        type: "password",
        name: "repeatPassword",
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

export default EditPassword;
