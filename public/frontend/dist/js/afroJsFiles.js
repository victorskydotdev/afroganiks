const paymentForm=document.getElementById("paymentForm"),emailInfo=(console.log(paymentForm),document.getElementById("email-address")),productName=sessionStorage.getItem("productName"),productPrice=parseInt(sessionStorage.getItem("productPrice"));if(productPrice||productName){const priceInfo=document.getElementById("price"),a=document.getElementById("name");priceInfo.value=productPrice,a.value=productName}else console.log("nothing found in session storage");function payWithPaystack(e){e.preventDefault(),PaystackPop.setup({key:"pk_test_651b1d0cbcbe5f7d43887faa975ad7abfbdd82fc",email:emailInfo.value,amount:100*priceInfo.value,ref:""+Math.floor(1e9*Math.random()+1),onClose:function(){alert("Window closed.")},callback:function(e){e="Payment complete! Reference: "+e.reference;alert(e)}}).openIframe()}function renderProduct(e){var t=document.getElementById("product-container"),o=`
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
  `;t.innerHTML=o;const n=""+e.name,r=""+e.price;document.getElementById("getToFormPageBtn").addEventListener("click",e=>{e.preventDefault(),sessionStorage.setItem("productName",n),sessionStorage.setItem("productPrice",r),window.location.href="/shipping-info"})}console.log(emailInfo.value),paymentForm.addEventListener("submit",payWithPaystack()),document.addEventListener("DOMContentLoaded",()=>{fetch("/frontend/json/product-data.json").then(e=>e.json()).then(o=>{var t=document.querySelectorAll(".order-btn");for(let e=0;e<t.length;e++){const r=t[e];var n=o.products[e].id;r.dataset.prodId=n,r.addEventListener("click",()=>{const t=r.dataset.prodId;o.products.find(e=>e.id===t);sessionStorage.setItem("productId",t),window.location.href="/product-description"})}}).catch(e=>{console.error("Error:",e)})}),document.addEventListener("DOMContentLoaded",()=>{const t=sessionStorage.getItem("productId");t?fetch("/frontend/json/product-data.json").then(e=>e.json()).then(e=>{e=e.products.find(e=>e.id===t);e?renderProduct(e):console.log("Product not found")}).catch(e=>{console.error("Error:",e)}):console.log("Product ID not found in session storage")});