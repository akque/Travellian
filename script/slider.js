const sliderContainer = document.querySelector(".dest_list")
const sliderButtonLeft = document.querySelector(".btn_left")
const sliderButtonRight = document.querySelector(".btn_right")
const count = {
    destCount : 0
}


function scrollSlide (next, gap, sliderContainer, nameCount) {
    const slideWidth = sliderContainer.querySelector(".list_bg").clientWidth
    const sliderContainerWidth = sliderContainer.clientWidth
    const maxCount = sliderContainer.children.length - Math.floor(sliderContainerWidth / slideWidth) 
    if(next){
        count[nameCount] < maxCount ? count[nameCount]++ : count[nameCount] = 0
    } else {
        count[nameCount] > 0 ? count[nameCount]-- : count[nameCount] = maxCount
    }
    sliderContainer.scroll({
        top: 0, left: (slideWidth + gap) * count[nameCount], behavior: "smooth"
    })
}

sliderButtonRight.addEventListener("click", () => scrollSlide(true, 32, sliderContainer, 'destCount'))
sliderButtonLeft.addEventListener("click", () => scrollSlide(false, 32, sliderContainer, 'destCount'))