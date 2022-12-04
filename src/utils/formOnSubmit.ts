import formValidation from "./formValidation";

const formOnSubmit = (event: Event) => {
  event.preventDefault()

  const target = event.target as HTMLElement;
  const closestForm = target?.closest('form');

  if (closestForm === null) return

  const formInputs = [...closestForm?.querySelectorAll('input')]

  const data = formInputs.reduce((acc: Record<string, any>, item, index) => {
    const name: string = item.name ? item.name : index.toString()
    acc[name] = item.value

    return acc
  }, {})

  const validation = formInputs.forEach((item) => {
    formValidation(item)
  })

  console.log(data)
  console.log('validation', validation)
}

export default formOnSubmit;
