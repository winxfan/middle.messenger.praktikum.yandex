import Handlebars from "handlebars/dist/handlebars.runtime";

import homeTemplate from './pages/home.hbs'
import loginTemplate from './pages/login.hbs'
import registrationTemplate from './pages/registration.hbs'
import notFoundErrorTemplate from './pages/404.hbs'
import serverErrorTemplate from './pages/500.hbs'
import chatTemplate from './pages/chat.hbs'
import profileTemplate from './pages/profile.hbs'

import fieldModule from "./modules/field.hbs"
import buttonModule from "./modules/button.hbs"
import linkModule from "./modules/link.hbs"
import errorModule from './modules/errorModule.hbs'
import chatListItem from './modules/chatListIitem.hbs'
import chatArea from './modules/chatArea.hbs'
import arrowLink from './modules/arrowLink.hbs'
import searchModule from './modules/search.hbs'
import avatarModule from './modules/avatar.hbs'
import profileInfo from './modules/profileInfo.hbs'
import returnBack from './modules/returnBack.hbs'

const PAGES = {
  'home': homeTemplate,
  'login': loginTemplate,
  'registration': registrationTemplate,
  '404': notFoundErrorTemplate,
  '500': serverErrorTemplate,
  'chat': chatTemplate,
  'profile': profileTemplate,
}

function renderPage(name) {
  const app = document.querySelector('#app')
  let template = PAGES[name]

  if (!template) {
    template = PAGES['404']
  }

  const html = template()
  app.innerHTML = html
}

window.renderPage = renderPage;

document.addEventListener("DOMContentLoaded", () => {
  const endpoint = window.location.pathname.slice(1);

  console.log('render')

  if(!endpoint) {
    renderPage('home')
  } else {
    renderPage(endpoint)
  }
});

(function initModules() {
  Handlebars.registerPartial('field', fieldModule)
  Handlebars.registerPartial('button', buttonModule)
  Handlebars.registerPartial('link', linkModule)
  Handlebars.registerPartial('errorModule', errorModule)
  Handlebars.registerPartial('chatListItem', chatListItem)
  Handlebars.registerPartial('arrowLink', arrowLink)
  Handlebars.registerPartial('searchModule', searchModule)
  Handlebars.registerPartial('chatArea', chatArea)
  Handlebars.registerPartial('avatarModule', avatarModule)
  Handlebars.registerPartial('profileInfo', profileInfo)
  Handlebars.registerPartial('returnBack', returnBack)
})();
