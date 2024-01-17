export function addProductItem(event) {
    // Event Parents
    console.log(event)
    const parentButton = event.target.parentNode.children;
    console.log(parentButton[1].textContent);

    let cartArray = [parentButton[0], parentButton[1], parentButton[2]]
    const account = localStorage.getItem("myAcc")
    console.log(account)

    const cart = account.products
    console.log(cart);
    cart.set(cartArray);
    console.log(cart);

}