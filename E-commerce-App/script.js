document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { id: 1, name: "Product 1", price: 45 },
    { id: 2, name: "Product 2", price: 95 },
    { id: 3, name: "Product 3", price: 435 },
    { id: 4, name: "Product 4", price: 40 },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name}  - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const item = products.find((p) => p.id === productId);
      addToCart(item);
    }
  });

  function addToCart(product) {
    cart.push(product);
    // console.log(cart);
    renderTask();
  }

  function renderTask() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");

      cart.forEach((item, index) => {
        totalPrice = totalPrice + item.price;

        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - ${item.price.toFixed(2)}
        `;

        cartItems.appendChild(cartItem)
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`
    }
  }


  checkoutBtn.addEventListener('click', function(){
    cart.length = 0;
    alert("checkout successfull")
    renderTask()
  })
});
