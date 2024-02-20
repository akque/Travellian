import { inputForm, formEmailInput } from "./constants.js"

export function formSubmit (event) {
    event.preventDefault()
    const obj = {}
    for(let i = 0; i < inputForm.length; i++) {
        obj[inputForm[i].name] = inputForm[i].value
    }
    console.log(obj)
}

export function formEmailSubmit (event) {
    event.preventDefault()
    const obj = {}
    obj[formEmailInput.name] = formEmailInput.value
    console.log(obj)
}