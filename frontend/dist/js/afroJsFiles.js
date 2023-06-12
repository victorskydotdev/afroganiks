document.addEventListener("DOMContentLoaded",()=>{var e=document.querySelector(".shipping-form"),t=document.querySelector(".country-input");const o=document.getElementById("customer-name"),n=document.getElementById("email-address");var a=sessionStorage.getItem("destData");t.value="Your shipping destination has been set to: "+a,e.addEventListener("submit",e=>{e.preventDefault();var e=o.value,t=n.value;sessionStorage.setItem("storedName",e),sessionStorage.setItem("storedEmail",t),window.location.href="/success"})});const productName=sessionStorage.getItem("productName"),productPrice=parseInt(sessionStorage.getItem("productPrice"));if(productPrice||productName){const i=document.getElementById("price"),j=document.getElementById("name");j.value=productName,i.value=productPrice}else console.log("nothing found in session storage");const nigeriaBtn=document.getElementById("ng-btn"),ghanaBtn=document.getElementById("gh-btn"),usBtn=document.getElementById("us-btn"),togoBtn=document.getElementById("togo-btn"),ivoryCoastBtn=document.getElementById("iv-btn"),ukBtn=document.getElementById("uk-btn"),camBtn=document.getElementById("cameroon-btn"),LibBtn=document.getElementById("lib-btn"),genBtn=document.querySelectorAll(".click-btn"),modal=document.querySelector(".dist-modal"),modalContainer=document.querySelector(".modal-container"),modalCloseBtn=document.querySelector(".modal-close-btn"),distUrl="/frontend/json/distributor-data.json",checkBtnClicked=()=>{for(let e=0;e<genBtn.length;e++)genBtn[e].addEventListener("click",e=>{e=e.target.id;console.log(e);let t;switch(e){case"ng-btn":t="Nigeria";break;case"gh-btn":t="Ghana";break;case"us-btn":t="USA";break;case"cameroon-btn":t="Cameroon";break;case"lib-btn":t="Liberia";break;case"togo-btn":t="Togo";break;case"iv-btn":t="Ivory Coast";break;case"uk-btn":t="UK"}t&&fetch(distUrl).then(e=>e.json()).then(e=>{var e=e.distributors.filter(e=>e.country===t);0<e.length?(e=e.map(e=>`
                    <div class="content-wrap">
                      <h3 class="dist-name">${e.name}</h3>
                      <div class="sub-elements">
											<p>Phone: ${e.phone}</p>
                      <p>Address: ${e.address}</p>
											</div>
											<div class="call-wrap">
												<a class="dist-call-btn" href="tel:${e.callLine}"><i class="fa-solid fa-phone"></i> <span class="link-span">Call Distributor</span></a>
											</div>
                    </div>
                  `).join(""),modalContainer.innerHTML=e,modal.style.display="block",modalCloseBtn.addEventListener("click",()=>{modal.style.display="none"})):console.log("No distributors found for "+t)})})},customerNameField=(checkBtnClicked(),document.addEventListener("DOMContentLoaded",()=>{var e=document.getElementById("nav-btn");const t=document.getElementById("nav-toggle");e.addEventListener("click",()=>{t.classList.toggle("openNav")})}),document.getElementById("customer-name")),productNameField=document.getElementById("product-name"),capturedCustomerName=sessionStorage.getItem("storedName"),capturedProductName=sessionStorage.getItem("productName"),emailValue=sessionStorage.getItem("storedEmail"),priceValue=(console.log(emailValue),parseInt(sessionStorage.getItem("productPrice"))),paymentForm=(console.log(priceValue),customerNameField.textContent=capturedCustomerName,productNameField.textContent=capturedProductName,document.getElementById("payment"));function payWithPaystack(e){e.preventDefault(),PaystackPop.setup({key:"pk_test_51d682f716acbcc54d5ebb0ec9c1dffa715d40d1",email:emailValue,amount:100*priceValue,ref:""+Math.floor(1e9*Math.random()+1),onClose:function(){alert("Window closed.")},callback:function(e){e="Payment complete! Reference: "+e.reference;alert(e),window.location.href="/"}}).openIframe()}function renderProduct(e){var t=document.getElementById("product-container"),o=`
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

						<span><i class="fa-solid fa-location-dot"></i> <input type="text" id="userDest" placeholder="Destination" value="" ></span>
						
					</div>

				
				<button class="btn" id="getToFormPageBtn">Order now</button>
				</form>
				
			</div>
    </section>
  `;t.innerHTML=o;const n=""+e.name,a=""+e.price;{t=document.getElementById("getToFormPageBtn"),console.log(t);const s=document.getElementById("userDest");t.addEventListener("click",e=>{e.preventDefault();e=s.value;sessionStorage.setItem("destData",e),sessionStorage.setItem("productName",n),sessionStorage.setItem("productPrice",a),n&&a&&e?(console.log("these are available"),window.location.href="/shipping-info"):console.log("not available")})}}paymentForm.addEventListener("submit",payWithPaystack,!1),document.addEventListener("DOMContentLoaded",()=>{fetch("/frontend/json/product-data.json").then(e=>e.json()).then(o=>{var t=document.querySelectorAll(".order-btn");for(let e=0;e<t.length;e++){const a=t[e];var n=o.products[e].id;a.dataset.prodId=n,a.addEventListener("click",()=>{const t=a.dataset.prodId;o.products.find(e=>e.id===t);sessionStorage.setItem("productId",t),window.location.href="/product-description"})}}).catch(e=>{console.error("Error:",e)})}),document.addEventListener("DOMContentLoaded",()=>{const t=sessionStorage.getItem("productId");t?fetch("/frontend/json/product-data.json").then(e=>e.json()).then(e=>{e=e.products.find(e=>e.id===t);e?renderProduct(e):console.log("Product not found")}).catch(e=>{console.error("Error:",e)}):console.log("Product ID not found in session storage")});