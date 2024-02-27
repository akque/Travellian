const preload = document.getElementById("preloader")

function preLoader () {
    preload.style.display = 'none'
}

window.addEventListener("load", preLoader)