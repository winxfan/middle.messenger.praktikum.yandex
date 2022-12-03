import Block from "./Block";

export function renderElement(rootNode: string | null | undefined, component: Block) {
  if(!rootNode || !component) {
    throw new Error("rootNode или component не найден");
  }

  const root: HTMLElement | null = document.querySelector(rootNode)

  if (!root) {
    throw new Error("Корневой элемент не найден");
  }

  root.innerHTML = ''
  root.append(component.getContent()!);
}

export function renderPage(component: Block) {
  renderElement('#root', component)
}
