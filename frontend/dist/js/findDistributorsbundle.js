(()=>{document.getElementById("ng-btn"),document.getElementById("gh-btn"),document.getElementById("us-btn"),document.getElementById("togo-btn"),document.getElementById("iv-btn"),document.getElementById("uk-btn"),document.getElementById("cameroon-btn"),document.getElementById("lib-btn");var t=document.querySelectorAll(".click-btn"),n=document.querySelector(".dist-modal"),e=document.querySelector(".modal-container"),o=document.querySelector(".modal-close-btn");!function(){for(var a=0;a<t.length;a++)t[a].addEventListener("click",(function(t){var a,c=t.target.id;switch(console.log(c),c){case"ng-btn":a="Nigeria";break;case"gh-btn":a="Ghana";break;case"us-btn":a="USA";break;case"cameroon-btn":a="Cameroon";break;case"lib-btn":a="Liberia";break;case"togo-btn":a="Togo";break;case"iv-btn":a="Ivory Coast";break;case"uk-btn":a="UK"}a&&fetch("/frontend/json/distributor-data.json").then((function(t){return t.json()})).then((function(t){var c=t.distributors.filter((function(t){return t.country===a}));if(c.length>0){var s=c.map((function(t){return'\n                    <div class="content-wrap">\n                      <h3 class="dist-name">'.concat(t.name,'</h3>\n                      <div class="sub-elements">\n\t\t\t\t\t\t\t\t\t\t\t<p>Phone: ').concat(t.phone,"</p>\n                      <p>Address: ").concat(t.address,'</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="call-wrap">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class="dist-call-btn" href="tel:').concat(t.call_line,'"><i class="fa-solid fa-phone"></i> <span class="link-span">Call Distributor</span></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n                    </div>\n                  ')})).join("");e.innerHTML=s,n.style.display="block",o.addEventListener("click",(function(){n.style.display="none"}))}else console.log("No distributors found for ".concat(a))}))}))}()})();