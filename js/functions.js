function showCategories() {
  const parent = document.getElementById("categories");
  data.forEach((category) => {
    const myCategoryElement = document.createElement("div");
    myCategoryElement.textContent = category.name;
    myCategoryElement.setAttribute("data-category", category.key);
    parent.appendChild(myCategoryElement);
  });
}

function showProductsByCategory(categoryId) {
  const selectedCategory = data.find((category) => category.key === categoryId);
  const parent = document.getElementById("products");
  const buyInfo = document.getElementById("buy-info");
  if (buyInfo) {
    buyInfo.remove();
  }
  parent.innerHTML = "";
  selectedCategory.products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.textContent = product.name;
    productElement.setAttribute("data-product", product.id);
    productElement.setAttribute("data-category", categoryId);

    parent.appendChild(productElement);
  });
}

function showProductInfo(categoryId, productId) {
  const selectedCategory = data.find((category) => category.key === categoryId);
  const selectedProduct = selectedCategory.products.find(
    (product) => product.id == productId
  );

  const parent = document.getElementById("product");
  parent.innerHTML = `
 <h2>${selectedProduct.name}</h2>
 <p>Price: $${selectedProduct.price}</p>
 <p>${selectedProduct.description}</p>
 `;

  const buyButton = document.createElement("input");
  buyButton.setAttribute("type", "button");
  buyButton.setAttribute("value", "Buy");
  buyButton.setAttribute("style", "width: 120px; align-self: center;");
  buyButton.addEventListener("click", () => {
    makeSuccessfulBuy(categoryId, productId);
  });

  parent.appendChild(buyButton);
}

function makeSuccessfulBuy(categoryId, productId) {
  const buyInfo = document.createElement("div");
  const selectedCategory = data.find((category) => category.key === categoryId);
  const selectedProduct = selectedCategory.products.find(
    (product) => product.id == productId
  );
  buyInfo.setAttribute("id", "buy-info");
  buyInfo.innerHTML = `
  <h1 style="text-align: center; color: white">Спасибо за покупку <br>${selectedProduct.name}</h1>
  `;
  document.body.appendChild(buyInfo);
  products.innerHTML = "";
  product.innerHTML = "";
}
