import { scrollSlide } from "./slider.js"
import { formSubmit, formEmailSubmit } from "./form.js"
import { sliderButtonRight, sliderButtonLeft, form, sliderContainer, formEmail } from "./constants.js"



sliderButtonRight.addEventListener("click", () => scrollSlide(true, 32, sliderContainer, 'destCount'))
sliderButtonLeft.addEventListener("click", () => scrollSlide(false, 32, sliderContainer, 'destCount'))
form.addEventListener("submit", formSubmit)
formEmail.addEventListener("submit", formEmailSubmit)
window.addEventListener("scroll", (e) => {
    console.log(e.target);
})