(()=>{var e=sessionStorage.getItem("loggedProducts"),t=sessionStorage.getItem("total");document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".shipping-form"),t=document.getElementById("customer-name"),o=document.getElementById("email-address"),n=document.getElementById("customer-phone");e?e.addEventListener("submit",(function(e){var s=t.value,a=o.value,r=n.value;console.log(r),sessionStorage.setItem("storedName",s),sessionStorage.setItem("storedEmail",a),sessionStorage.setItem("storedPhone",r),window.location.href="/success"})):console.log("Order form not on this page")}));var o=e,n=parseInt(t);if(sessionStorage.setItem("productName",o),n||o){var s=document.getElementById("price"),a=document.getElementById("name");a&&s&&(a.value=o,s.value=n)}else console.log("Name not being inputted into the product name and price fields. Also this is for shipping info page")})();