import regExp from "./regExp";

const formValidation = (element: HTMLInputElement | null) => {
  console.log(element)
  if (element === null) {
    return
  }

  const name = element.name;
  const value = element.value;
  const isValid = regExp[name]?.test(value)
  const closestField = element.closest('.field');
  const hint = closestField?.querySelector('.field--hint')

  console.log(hint)

  if (hint === null) {
    throw new Error('Not found hint')
  }

  if (!isValid) {
    hint?.classList.add('active')
    return false
  } else {
    hint?.classList.remove('active')
    return true
  }
}

export default formValidation;
