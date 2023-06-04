document.addEventListener("DOMContentLoaded",()=>{var e=document.querySelector(".shipping-form");const o=document.getElementById("customer-name").value,n=document.getElementById("email-address").value;e.addEventListener("submit",e=>{e.preventDefault();var e=o,t=n;console.log(t,e),sessionStorage.setItem("storedName",e),sessionStorage.setItem("storedEmail",t),window.location.href="/success"})});const productName=sessionStorage.getItem("productName"),productPrice=parseInt(sessionStorage.getItem("productPrice"));if(productPrice||productName){const g=document.getElementById("price"),h=document.getElementById("name");h.value=productName,g.value=productPrice}else console.log("nothing found in session storage");const nameHeading=document.getElementById("customer-name"),productInfoWrap=document.getElementById("product-name"),customerName=sessionStorage.getItem("storedName"),customerEmail=sessionStorage.getItem("storedEmail"),productInfo=sessionStorage.getItem("productName");function renderProduct(e){var t=document.getElementById("product-container"),o=`
    <section class="product">

			<div class="wrap">
				<div class="product-image-wrap">
					<img class"product-img" src="${e.productImage}" alt="${e.name}">
				</div>

				<div class="product-info">
					<h1 id="product-name" value="${e.name}" class="heading">${e.name}</h1>
					<p id="product-price" value="${e.price}" class="price-text">Price: $${e.price}</p>
				</div>
			</div>

			<!-- ***comment*** product description -->
			<!-- <div class="product-desc-wrap">
				<p>${e.description}</p>
			</div> -->

			<div class="payment-box">
				<form class="form-wrap" action="#" method="post" netlify>

					<div class="location-wrap">
						<label>Ship to:</label>

						<span><i class="fa-solid fa-location-dot"></i> <input placeholder="Nigeria" ></span>
						
					</div>

				
				<button class="btn" id="getToFormPageBtn">Order now</button>
				</form>
				
			</div>
    </section>
  `;t.innerHTML=o;const n=""+e.name,d=""+e.price;document.getElementById("getToFormPageBtn").addEventListener("click",e=>{e.preventDefault(),sessionStorage.setItem("productName",n),sessionStorage.setItem("productPrice",d),window.location.href="/shipping-info"})}productInfoWrap||nameHeading?nameHeading.textContent=customerName:console.log("nothing"),document.addEventListener("DOMContentLoaded",()=>{var e=document.getElementById("nav-btn");const t=document.getElementById("nav-toggle");e.addEventListener("click",()=>{t.classList.toggle("openNav")})}),document.addEventListener("DOMContentLoaded",()=>{fetch("/frontend/json/product-data.json").then(e=>e.json()).then(o=>{var t=document.querySelectorAll(".order-btn");for(let e=0;e<t.length;e++){const d=t[e];var n=o.products[e].id;d.dataset.prodId=n,d.addEventListener("click",()=>{const t=d.dataset.prodId;o.products.find(e=>e.id===t);sessionStorage.setItem("productId",t),window.location.href="/product-description"})}}).catch(e=>{console.error("Error:",e)})}),document.addEventListener("DOMContentLoaded",()=>{const t=sessionStorage.getItem("productId");t?fetch("/frontend/json/product-data.json").then(e=>e.json()).then(e=>{e=e.products.find(e=>e.id===t);e?renderProduct(e):console.log("Product not found")}).catch(e=>{console.error("Error:",e)}):console.log("Product ID not found in session storage")});