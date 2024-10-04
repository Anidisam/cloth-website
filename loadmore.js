const products = [
  {
    image: "./images/fashion1.jpg", 
    name: "trending men's round neck",
    price: "$39.99",
  },
  {
    image: "./images/sweater.webp", 
    name: "men's round neck sweater",
    price: "$59.99",
  },
  {
    image: "./images/women t shirt.jpg", 
    name: "women's T shirt",
    price: "$69.99",
  },
  {
    image: "./images/gown.webp", 
    name: "women gown",
    price: "$89.99",
  },
];

const loadMoreBtn = document.getElementById("loadMoreBtn");
const productContainer = document.querySelector(".popular-products-items");

loadMoreBtn.onclick = function () {
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("popular-products-item");

    productItem.innerHTML = `
      <div class="popular-products-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="popular-products-body">
        <h4>${product.name}</h4>
        <div class="price">
          <label>${product.price}</label>
        </div>
      </div>
    `;

    productContainer.appendChild(productItem);
  });

  // Optionally hide the "More" button after loading all products
  loadMoreBtn.style.display = "none";
};
