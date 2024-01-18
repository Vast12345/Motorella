const cartButton = document.querySelector(".fa-cart-shopping");
const cartClose = document.querySelector(".close-button");
cartButton.addEventListener("click", () => {
    document.getElementById("overlay").classList.toggle("overlay");
    document.querySelector(".cart-container").classList.toggle("visible");
});
cartClose.addEventListener("click", () => {
    document.querySelector(".cart-container").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("overlay");
})