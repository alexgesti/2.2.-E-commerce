// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Majora's Mask Shirt",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Mimikyu Hoodie",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Cappy Hat",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

// Exercise 1
const buy = (id) => {
  // Buscar el producto en el array products
  const product = products.find((item) => item.id === id);
  if (!product) return; // Si no existe, no hacemos nada

  // Check if the product is already in the cart
  const itemInCart = cart.find((item) => item.id === id);
  itemInCart ? itemInCart.quantity++ : cart.push({ ...product, quantity: 1 });
  // If it exists, increase the quantity
  // If it doesn't exist, add it to the cart with quantity 1
};

// Exercise 2
const cleanCart = () => {
  // Clear the cart by setting it to an empty array
  cart.length = 0;
};

// Exercise 3
const calculateTotal = () => {
  // Calculate total price of the cart using the "cartList" array
  let total = 0;
  for (const item of cart) {
    total += applyPromotionsCart(item) * item.quantity;
  }
  return total;
};

// Exercise 4
const applyPromotionsCart = (item) => {
  // If they are the same type of product (1), apply a 20% discount if the quantity is greater than or equal to 3.
  if (item.id === 1 && item.quantity >= item.offer.number) {
    const discount = (item.price * item.offer.percent) / 100;
    return item.price - discount;
  }
  // If they are the same type of product (3), apply a 30% discount if the quantity is greater than or equal to 10.
  else if (item.id === 3 && item.quantity >= item.offer.number) {
    const discount = (item.price * item.offer.percent) / 100;
    return item.price - discount;
  } else return item.price;
};

// Exercise 5
const printCart = () => {
  const cartList = document.getElementById("cart_list");
  const totalPrice = document.getElementById("total_price");
  const countProduct = document.getElementById("count_product");

  let totalItems = 0;

  const cartHTML = cart
    .map((item) => {
      const discountedPrice = applyPromotionsCart(item);
      const subtotal = (discountedPrice * item.quantity).toFixed(2);
      totalItems += item.quantity;

      return `
      <tr>
        <th>${item.name}</th>
        <td class="text-center align-middle">$${item.price.toFixed(2)}</td>
        <td class="text-center align-middle">
          <div class="d-flex justify-content-center align-items-center gap-2 flex-nowrap">
            <button class="btn btn-danger btn-sm ms-2 remove-from-cart" data-product-id="${
              item.id
            }"> <i class="fas fa-minus"></i></button>
            <span class="mx-1"> ${item.quantity} </span>
            <button class="btn btn-success btn-sm ms-2 plus-to-cart" data-product-id="${
              item.id
            }"> <i class="fas fa-plus"></i></button>
          </div>
        </td>
        <td class="text-center align-middle">$${subtotal}</td>
      </tr>
    `;
    })
    .join("");

  cartList.innerHTML = cartHTML;
  totalPrice.textContent = calculateTotal().toFixed(2);
  countProduct.textContent = totalItems;

  // Subtract quantity of products from cart
  document.querySelectorAll(".remove-from-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-product-id"));
      removeFromCart(id);
    });
  });

  // Add quantity of products from cart
  document.querySelectorAll(".plus-to-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-product-id"));
      PlusToCart(id);
    });
  });
};

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else cart.splice(index, 1);

    printCart();
  }
};

const PlusToCart = (id) => {
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) {
    if (cart[index].quantity >= 1) cart[index].quantity += 1;

    printCart();
  }
};

const open_modal = () => {
  printCart();
};

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("clean-cart").addEventListener("click", function () {
    cleanCart();
    printCart();
  });

  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-product-id"));
      buy(id);
      printCart();
    });
  });

  // Extra
  // Zoom de imagen de producto
  document.querySelectorAll(".product-card img").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function (e) {
      // Crear overlay
      const overlay = document.createElement("div");
      overlay.className = "product-zoom-overlay";

      // Contenedor interno
      const zoomBox = document.createElement("div");
      zoomBox.className = "zoom-box";

      // Crear texto de zoom
      const zoomText = document.createElement("p");
      zoomText.textContent = this.alt;
      zoomText.className = "zoom-text";
      zoomBox.appendChild(zoomText);

      // Crear imagen ampliada
      const zoomImg = document.createElement("img");
      zoomImg.src = this.src;
      zoomImg.alt = this.alt;
      zoomBox.appendChild(zoomImg);

      overlay.appendChild(zoomBox);
      document.body.appendChild(overlay);

      // Cerrar overlay
      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});
