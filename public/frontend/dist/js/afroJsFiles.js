function renderProduct(o){var t=document.getElementById("product-container"),o=`
    <section class="product">

			<div class="product-image-wrap">
				<img class"product-img" src="${o.productImage}" alt="${o.name}">
			</div>

      <div class="product-content">
				<h1 class="heading">${o.name}</h1>
				<p class="price-text">Price: $${o.price}</p>
			</div>

			<!-- ***comment*** product description -->
			<!-- <div class="product-desc-wrap">
				<p>${o.description}</p>
			</div> -->

			<div class="payment-box">
				<form class="form-wrap" action="#" method="post" netlify>

					<div class="location-wrap">
						<label>Ship to:</label>

						<span><i class="fa-solid fa-location-dot"></i> <input placeholder="Nigeria" ></span>
						
					</div>

				
				<button class="btn">Order now</button>
				</form>
				
			</div>
    </section>
  `;t.innerHTML=o}document.addEventListener("DOMContentLoaded",()=>{fetch("/frontend/json/product-data.json").then(o=>o.json()).then(e=>{var t=document.querySelectorAll(".order-btn");for(let o=0;o<t.length;o++){const d=t[o];var n=e.products[o].id;d.dataset.prodId=n,d.addEventListener("click",()=>{const t=d.dataset.prodId;e.products.find(o=>o.id===t);sessionStorage.setItem("productId",t),window.location.href="/product-description"})}}).catch(o=>{console.error("Error:",o)})}),document.addEventListener("DOMContentLoaded",()=>{const t=sessionStorage.getItem("productId");console.log(t),t?fetch("/frontend/json/product-data.json").then(o=>o.json()).then(o=>{o=o.products.find(o=>o.id===t);o?renderProduct(o):console.log("Product not found")}).catch(o=>{console.error("Error:",o)}):console.log("Product ID not found in session storage")});