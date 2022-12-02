import Block from '../../utils/Block';
import template from './profileInfo.hbs';


interface ProfileInfoProps {
  class?: string;
  title: string;
  content: string;
  events?: Record<string, (...args: any) => void>
}

export class ProfileInfo extends Block<ProfileInfoProps> {
  constructor(props: ProfileInfoProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
