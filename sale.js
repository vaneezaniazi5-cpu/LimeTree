const productGrid = document.getElementById("productGrid");

const saleProducts = products.filter(product =>
    product.category.includes("sale")
);

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

<div class="product-buttons">

<button class="cart-btn"
onclick="addToCart('${product.name}',${product.price})">
🛒 Cart
</button>

<a class="btn"
href="order.html?product=${encodeURIComponent(product.name)}&price=${product.price}">
Order Now
</a>

</div>

</div>

</div>

`;

});

initializeSliders();

function initializeSliders(){

document.querySelectorAll(".slider").forEach(slider=>{

const slides = slider.querySelectorAll(".slide");

let current = 0;

function showSlide(index){
slides.forEach((slide,i)=>{
slide.style.display = i===index ? "block" : "none";
});
}

showSlide(current);

slider.addEventListener("click",function(){
current=(current+1)%slides.length;
showSlide(current);
});

let startX=0;

slider.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX;
});

slider.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX;

if(Math.abs(startX-endX)>40){

if(endX<startX){
current=(current+1)%slides.length;
}else{
current=(current-1+slides.length)%slides.length;
}

showSlide(current);

}

});

});

    }
