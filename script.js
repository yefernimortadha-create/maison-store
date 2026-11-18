const products = [];

// Add your own products here later.

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");

function displayProducts() {
  productCount.textContent = `${products.length} ITEMS`;

  if (products.length === 0) {
    productGrid.innerHTML = `
      <p class="empty-message">
        YOUR COLLECTION WILL APPEAR HERE.
      </p>
    `;
    return;
  }

  productGrid.innerHTML = products.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    </article>
  `).join("");
}

displayProducts();

document.getElementById("newsletterForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for subscribing!");
  });

document.getElementById("menuButton")
  .addEventListener("click", function() {
    const nav = document.querySelector("nav");

    nav.style.display =
      nav.style.display === "flex" ? "none" : "flex";

    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "130px";
    nav.style.right = "6%";
    nav.style.background = "#171717";
    nav.style.padding = "25px";
    nav.style.zIndex = "10";
  });