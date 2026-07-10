const productGrid = document.getElementById("productGrid");

saleProducts.forEach(product => {

let badgeClass = "new";

if(product.badge === "SALE"){
    badgeClass = "sale";
}

productGrid.innerHTML += `

<div class="product-card">

${product.badge ? `<span class="badge ${badgeClass}">${product.badge}</span>` : ""}

<div class="slider">

<img class="slide active" src="${product.front}">
<img class="slide" src="${product.back}">

</div>

<div class="dots">
<span class="dot active"></span>
<span class="dot"></span>
</div>

<div class="product-info">

<h3>${product.name}</h3>

<p class="fabric">
${product.fabric}
</p>

<p class="price">

${product.oldPrice ? `<del>Rs. ${product.oldPrice}</del><br>` : ""}

<strong>Rs. ${product.price}</strong>

</p>

<button class="btn"
onclick="addToCart('${product.name}',${product.price})">
Add to Cart
</button>

<a class="btn"
href="order.html?product=${encodeURIComponent(product.name)}&price=${product.price}">
Order Now
</a>

</div>

</div>

`;

});
