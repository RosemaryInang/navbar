const showBurger = document.querySelector(".burger")
const menu = document.querySelector(".nav-show")

showBurger.addEventListener("click", () => {
    menu.classList.toggle('show')
})