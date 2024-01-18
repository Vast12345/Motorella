import { addProductItem } from "../views/Product.js"
import { updateProducts } from "../styles-js/updateCart.js"
import { checkOut } from "../models/patch.js"

const user = localStorage.getItem("myAcc");

if (user === null) {
    window.location.href = "Project-Login.html"
}

(async function items() {
    try {
        const productsContainer = document.querySelector(".products-container");
        const response = await fetch('http://localhost:4500/products');
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            let productItem = document.createElement("div");
            productItem.className = "product-item";
            productItem.innerHTML = `<img src="${data[i].img}"" alt="Product${i + 1}"/><h3>${data[i].name}</h3><p>${data[i].price}</p><button class="product-button ${data[i].name}"><i class="fa-solid fa-arrow-right fa-xl"></i></button>`
            productsContainer.appendChild(productItem);
        }

        const buttons = document.querySelectorAll(".product-button");
        buttons.forEach(button => {
            button.addEventListener("click", async (e) => {
                e.preventDefault();
                addProductItem(data, button);
            })
        })
        document.querySelector(".checkout-button").addEventListener("click", (e) => {
            const accString = localStorage.getItem("myAcc");
            const acc = JSON.parse(accString);
            checkOut(acc)
        })
        const myAccString = localStorage.getItem("myAcc");
        const myAcc = JSON.parse(myAccString);
        updateProducts(myAcc);

    } catch (e) {
        console.error("ERROR" + e);
    }
})();