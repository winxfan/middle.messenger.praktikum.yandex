import Block from '../../utils/Block';
import template from './chat.hbs';
import { ArrowLink } from "../../components/ArrowLink";
import { Search } from "../../components/Search";
import { ChatListItem } from "../../components/ChatListItem";
import { ChatArea } from "../../components/ChatArea";
import { Dialog } from "../../components/Dialog";

class ChatPage extends Block {
  constructor() {
    super({
      chatSelected: true
    });
  }

  init() {
    this.children.ArrowLink = new ArrowLink({
      title: "Профиль",
      href: 'profile',
      class: "chat--arrow-link"
    })

    this.children.Search = new Search({
      class: "chat--search w-100"
    })

    this.children.ChatListItemsArray = [
      new ChatListItem({
        name: "Андрей",
        text: "Изображение",
        time: "10:49",
        count: "2"
      }),
      new ChatListItem({
        name: "Андрей",
        text: "Изображение",
        time: "10:49",
      }),
    ]

    this.children.ChatArea = new ChatArea()
    this.children.Dialog = new Dialog()
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

export default ChatPage;
