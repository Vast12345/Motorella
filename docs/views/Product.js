export function addProductItem(data, button) {
    // Event Parents
    const classArray = Array.from(button.classList)
    const productName = classArray[1];

    const myAccString = localStorage.getItem("myAcc");
    const myAcc = JSON.parse(myAccString);
    try {
        data.filter((user) => {
            if (user.name === productName) {
                const existingProduct = myAcc.products.findIndex((product) => product.name === productName);
                if (existingProduct !== -1) {
                    myAcc.products[existingProduct].amount += 1;
                } else {
                    const product = new Object();
                    product.image = user.img;
                    product.name = user.name;
                    product.price = user.price;
                    product.amount = 1;
                    myAcc.products.push(product);
                }
            }
        })
        localStorage.setItem("myAcc", JSON.stringify(myAcc));

        // ADD TO CART

        const productsCartContainer = document.querySelector(".productsCart-container");
        productsCartContainer.addEventListener("click", function (event) {
            if (event.target.classList.contains("remove-icon")) {
                // If the clicked element has the class "remove-icon", handle the removal
                const index = event.target.dataset.index;
                removeProduct(index);
            }
        });
        productsCartContainer.innerHTML = "";

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
    } catch (error) {
        console.error("ERROR: " + error);
    }

}