// @ts-ignore
import Handlebars from 'handlebars/dist/handlebars.runtime';
import { renderPage } from './utils/render';

import ChatPage from './pages/Chat/index';
import EditPasswordPage from './pages/EditPassword/index';
import HomePage from './pages/Home/index';
import LoginPage from './pages/Login/index'
import NotFoundPage from './pages/NotFound/index'
import ProfilePage from './pages/Profile/index'
import ProfileEditPage from './pages/ProfileEdit/index'
import RegistrationPage from './pages/Registration/index'
import ServerErrorPage from './pages/ServerError/index'

const userInfo = {
  name: "Иван"
}

const PAGES: Record<string, any> = {
  'chat': new ChatPage(),
  'edit-password': new EditPasswordPage(userInfo),
  'home': new HomePage(),
  'login': new LoginPage(),
  'not-found': new NotFoundPage(),
  'profile': new ProfilePage(userInfo),
  'profile-edit': new ProfileEditPage(userInfo),
  'registration': new RegistrationPage(),
  'server-error': new ServerErrorPage(),
}

document.addEventListener("DOMContentLoaded", () => {
  const endpoint = window.location.pathname.slice(1);

  if(!endpoint) {
    renderPage(PAGES['login'])
  } else if(PAGES[endpoint]){
    renderPage(PAGES[endpoint])
  } else {
    renderPage(PAGES['not-found'])
  }
});

document.addEventListener("click",
  (event) => {
    const target = event.target as HTMLElement;
    const closestLink = target?.closest('a');
    const isLink = target?.tagName.toLowerCase() === 'a'

    if (!isLink && !closestLink) {
      return
    }

    event.preventDefault()

    function getHref(): string | null {
      if (isLink) {
        return target.getAttribute('href')
      } else if (closestLink) {
        return closestLink.getAttribute('href')
      }

      return 'notFound'
    }

    if (getHref() === null) {
      return;
    }

    const url = PAGES[getHref()!] ? PAGES[getHref()!] : PAGES['not-found']

    renderPage(url)
  });

(function submitForm(){
  // const forms = document.querySelectorAll('form');
  //
  // console.log(forms)

  document.addEventListener('submit', () => {
    console.log('submit')
  })
})()
