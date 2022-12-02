import Block from '../../utils/Block';
import template from './profileInfoEdit.hbs';


type ProfileInfoEditProps = {
  class?: string,
  title: string,
  type?: string,
  name: string,
  value?: string,
  edit?: string,
  events?: Record<string, (...args: any) => void>
}

export class ProfileInfoEdit extends Block<ProfileInfoEditProps> {
  constructor(props: ProfileInfoEditProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
