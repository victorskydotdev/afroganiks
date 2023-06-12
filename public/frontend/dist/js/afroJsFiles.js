document.addEventListener("DOMContentLoaded",()=>{var e=document.querySelector(".shipping-form");const n=document.getElementById("customer-name").value,o=document.getElementById("email-address").value;e.addEventListener("submit",e=>{e.preventDefault();var e=n,t=o;console.log(t,e),sessionStorage.setItem("storedName",e),sessionStorage.setItem("storedEmail",t),window.location.href="/success"})});const productName=sessionStorage.getItem("productName"),productPrice=parseInt(sessionStorage.getItem("productPrice"));if(productPrice||productName){const g=document.getElementById("price"),h=document.getElementById("name");h.value=productName,g.value=productPrice}else console.log("nothing found in session storage");const nameHeading=document.getElementById("customer-name"),productInfoWrap=document.getElementById("product-name"),customerName=sessionStorage.getItem("storedName"),customerEmail=sessionStorage.getItem("storedEmail"),productInfo=sessionStorage.getItem("productName"),nigeriaBtn=(productInfoWrap||nameHeading?nameHeading.textContent=customerName:console.log("nothing"),document.getElementById("ng-btn")),ghanaBtn=document.getElementById("gh-btn"),usBtn=document.getElementById("us-btn"),togoBtn=document.getElementById("togo-btn"),ivoryCoastBtn=document.getElementById("iv-btn"),ukBtn=document.getElementById("uk-btn"),camBtn=document.getElementById("cameroon-btn"),LibBtn=document.getElementById("lib-btn"),genBtn=document.querySelectorAll(".click-btn"),modal=document.querySelector(".dist-modal"),modalContainer=document.querySelector(".modal-container"),modalCloseBtn=document.querySelector(".modal-close-btn"),distUrl="/frontend/json/distributor-data.json",checkBtnClicked=()=>{for(let e=0;e<genBtn.length;e++)genBtn[e].addEventListener("click",e=>{e=e.target.id;console.log(e);let t;switch(e){case"ng-btn":t="Nigeria";break;case"gh-btn":t="Ghana";break;case"us-btn":t="USA";break;case"cameroon-btn":t="Cameroon";break;case"lib-btn":t="Liberia";break;case"togo-btn":t="Togo";break;case"iv-btn":t="Ivory Coast";break;case"uk-btn":t="UK"}t&&fetch(distUrl).then(e=>e.json()).then(e=>{var e=e.distributors.filter(e=>e.country===t);0<e.length?(e=e.map(e=>`
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
                  `).join(""),modalContainer.innerHTML=e,modal.style.display="block",modalCloseBtn.addEventListener("click",()=>{modal.style.display="none"})):console.log("No distributors found for "+t)})})};function renderProduct(e){var t=document.getElementById("product-container"),n=`
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

						<span><i class="fa-solid fa-location-dot"></i> <input placeholder="Destination" ></span>
						
					</div>

				
				<button class="btn" id="getToFormPageBtn">Order now</button>
				</form>
				
			</div>
    </section>
  `;t.innerHTML=n;const o=""+e.name,d=""+e.price;document.getElementById("getToFormPageBtn").addEventListener("click",e=>{e.preventDefault(),sessionStorage.setItem("productName",o),sessionStorage.setItem("productPrice",d),window.location.href="/shipping-info"})}checkBtnClicked(),document.addEventListener("DOMContentLoaded",()=>{var e=document.getElementById("nav-btn");const t=document.getElementById("nav-toggle");e.addEventListener("click",()=>{t.classList.toggle("openNav")})}),document.addEventListener("DOMContentLoaded",()=>{fetch("/frontend/json/product-data.json").then(e=>e.json()).then(n=>{var t=document.querySelectorAll(".order-btn");for(let e=0;e<t.length;e++){const d=t[e];var o=n.products[e].id;d.dataset.prodId=o,d.addEventListener("click",()=>{const t=d.dataset.prodId;n.products.find(e=>e.id===t);sessionStorage.setItem("productId",t),window.location.href="/product-description"})}}).catch(e=>{console.error("Error:",e)})}),document.addEventListener("DOMContentLoaded",()=>{const t=sessionStorage.getItem("productId");t?fetch("/frontend/json/product-data.json").then(e=>e.json()).then(e=>{e=e.products.find(e=>e.id===t);e?renderProduct(e):console.log("Product not found")}).catch(e=>{console.error("Error:",e)}):console.log("Product ID not found in session storage")});