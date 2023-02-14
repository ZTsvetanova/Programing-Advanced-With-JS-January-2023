function solve() {
  let shoppingCart = document.getElementsByClassName("shopping-cart")[0];
  let res = document.getElementsByTagName("textarea")[0];
  let allProducts = [];
  let totalPrice = 0;
  let checkoutDone = false;

  shoppingCart.addEventListener("click", addProduct);

  function addProduct(event) {
    if (event.target.nodeName !== "BUTTON" || checkoutDone) {
      return;
    }

    let btn = event.target;
    let arrFromButtons = Array.from(btn.classList);

    if (arrFromButtons.includes("add-product")) {
      let productElement = event.target.parentElement.parentElement;
      let productTitle =
        productElement.querySelectorAll(".product-title")[0].textContent;
      let price = productElement.querySelectorAll(".product-line-price")[0]
        .textContent;

      res.textContent += `Added ${productTitle} for ${price} to the cart.\n`;

      if (!allProducts.includes(productTitle)) {
        allProducts.push(productTitle);
      }

      totalPrice += Number(price);
    } else if (arrFromButtons.includes("checkout")) {
      let listOfProduct = allProducts.join(", ");
      res.textContent += `You bought ${listOfProduct} for ${totalPrice.toFixed(2)}.`
      checkoutDone = true;
    }
  }
}
