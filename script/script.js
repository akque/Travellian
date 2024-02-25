import { scrollSlide } from "./slider.js"
import { formSubmit, formEmailSubmit } from "./form.js"
import { sliderButtonRight, sliderButtonLeft, form, sliderContainer, formEmail, preloader } from "./constants.js"
import { preloader } from "./preloader.js"



sliderButtonRight.addEventListener("click", () => scrollSlide(true, 32, sliderContainer, 'destCount'))
sliderButtonLeft.addEventListener("click", () => scrollSlide(false, 32, sliderContainer, 'destCount'))
form.addEventListener("submit", formSubmit)
formEmail.addEventListener("submit", formEmailSubmit)
window.addEventListener("load", preloader)