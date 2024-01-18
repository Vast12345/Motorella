export function updateProducts(myAcc) {
    const productsCartContainer = document.querySelector(".productsCart-container");
    productsCartContainer.innerHTML = "";

    productsCartContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-icon")) {
            // If the clicked element has the class "remove-icon", handle the removal
            const index = event.target.dataset.index;
            removeProduct(index);
        }
    });

    // Create a list of items
    myAcc.products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-cart-item");

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <span>${product.name}</span>
            <span>${product.price}</span>
            <span>Quantity: ${product.amount}</span>
            <span class="remove-icon" data-index="${index}">&#10006;</span>
        `;

        productsCartContainer.appendChild(productItem);
    });
    const removeButton = document.querySelector(".remove-icon");
    removeButton.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-icon")) {
            // If the clicked element has the class "remove-icon", handle the removal
            console.log(event)
            const index = event.target.dataset.index;
            removeProduct(index);
        }
    })

    function removeProduct(index) {
        myAcc.products[index].amount = 0;
        myAcc.products.splice(index, 1);
    
        // Update the displayed products
        updateProducts();
        localStorage.setItem("myAcc", JSON.stringify(myAcc));
    }

    function updateProducts() {
        // Create a new list of items

        productsCartContainer.innerHTML = "";
        myAcc.products.forEach((product, index) => {
            const productItem = document.createElement("div");
            productItem.classList.add("product-cart-item");
    
            productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <span>${product.name}</span>
                    <span>${product.price}</span>
                    <span>Quantity: ${product.amount}</span>
                    <span class="remove-icon" data-index="${index}">&#10006;</span>
                `;
    
            productsCartContainer.appendChild(productItem);
        });
    }
}
