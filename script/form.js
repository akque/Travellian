const form = document.querySelector(".main_form")
const inputForm = form.querySelectorAll(".form_input")

function formSubmit (event) {
    event.preventDefault()
    const obj = {}
    for(let i = 0; i < inputForm.length; i++) {
        obj[inputForm[i].name] = inputForm[i].value
    }
    console.log(obj)
}

form.addEventListener("submit", formSubmit)