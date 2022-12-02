import Block from "./Block";

export function renderElement(rootNode: string | null | undefined, component: Block) {
  if(!rootNode) {
    return
  }

  const root: HTMLElement | null = document.querySelector(rootNode)

  // let template = PAGES['login']
  //
  // if (!template) {
  //   template = PAGES['login']
  // }
  //
  // const html = template()
  //
  // if (app !== null) {
  //   app.innerHTML = html
  // }

  if (!root) {
    throw new Error("Корневой элемент не найден");
  }

  root.innerHTML = ''
  root.append(component.getContent()!);
}

export function renderPage(component: Block) {
  renderElement('#root', component)
}
