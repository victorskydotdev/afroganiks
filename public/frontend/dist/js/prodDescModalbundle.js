(()=>{var t=sessionStorage.getItem("productId"),n=document.querySelector(".prodDescModal"),c=document.querySelector(".content"),o=document.getElementById("product-container"),i=new MutationObserver((function(o){var a=document.getElementById("lm-btn");a?(a.addEventListener("click",(function(){n.style.display="block",console.log(a),fetch("/frontend/json/product-data.json").then((function(t){return t.json()})).then((function(n){var o=n.products.find((function(n){return n.id===t})),i='\n            <section class="product-description">\n              <div class="container">\n                <h3 class="text-heading">'.concat(o.name,'</h3>\n              \n\n\t\t\t\t\t\t\t\t\x3c!-- pharmacology --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Pharmacology:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.pharmacology[0]?"<p>".concat(o.pharmacology[0],"</p>"):"","</p>\n\n\t\t\t\t\t\t\t\t\t<p>").concat(void 0!==o.pharmacology[1]?"<p>".concat(o.pharmacology[1],"</p>"):"","</p>\n\n\t\t\t\t\t\t\t\t\t<p>").concat(void 0!==o.pharmacology[2]?"<p>".concat(o.pharmacology[2],"</p>"):"","</p>\n\n\t\t\t\t\t\t\t\t\t<p>").concat(void 0!==o.pharmacology[3]?"<p>".concat(o.pharmacology[3],"</p>"):"","</p>\n\n\t\t\t\t\t\t\t\t\t<p>").concat(void 0!==o.pharmacology[4]?"<p>".concat(o.pharmacology[4],"</p>"):"","</p>\n\n\t\t\t\t\t\t\t\t\t<p>").concat(void 0!==o.pharmacology[5]?"<p>".concat(o.pharmacology[5],"</p>"):"","</p>\n\n\t\t\t\t\t\t\t\t\t<p>").concat(void 0!==o.pharmacology[6]?"<p>".concat(o.pharmacology[6],"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of pharmacology --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- active ingredients --\x3e\n                <div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Active Ingredients:</h4>\n\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>').concat(void 0!==o.active_ingredients[0]?'<p class="description-text">'.concat(o.active_ingredients[0],"</p>"):"","</li>\n\t\t\t\t\t\t\t\t\t\t<li>").concat(void 0!==o.active_ingredients[1]?'<p class="description-text">'.concat(o.active_ingredients[1],"</p>"):"","</li>\n\t\t\t\t\t\t\t\t\t\t<li>").concat(void 0!==o.active_ingredients[2]?'<p class="description-text">'.concat(o.active_ingredients[2],"</p>"):"",'</li>\n\t\t\t\t\t\t\t\t\t</ul> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of active ingredients --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- pack size --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Pack size:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.pack_size?"<p>".concat(o.pack_size,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of pack size --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- dosage form composition --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Dosage form composition:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.dosage_form_compoisition?"<p>".concat(o.dosage_form_composition,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of dosage form composition --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- therapeutic class --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Therapeutic class:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.therapeutic_class?"<p>".concat(o.therapeutic_class,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of therapeutic class --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- dosage administration --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Dosage administation:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.dosage_administration?"<p>".concat(o.dosage_administration,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of dosage administration --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- directions for use --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Directions for use:</h4>\n\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>').concat(void 0!==o.direction_for_use[0]?'<p class="description-text">'.concat(o.direction_for_use[0],"</p>"):"","</li>\n\t\t\t\t\t\t\t\t\t\t<li>").concat(void 0!==o.direction_for_use[1]?'<p class="description-text">'.concat(o.direction_for_use[1],"</p>"):"","</li>\n\t\t\t\t\t\t\t\t\t\t<li>").concat(void 0!==o.direction_for_use[2]?'<p class="description-text">'.concat(o.direction_for_use[2],"</p>"):"",'</li>\n\t\t\t\t\t\t\t\t\t</ul> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of directions for use --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- indications --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Indications:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.indications?"<p>".concat(o.indications,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of indications --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- contraindications --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Contra-indications:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.contraindications?"<p>".concat(o.contraindications,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of contraindications --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- precautions and warnings --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Precautions/warnings:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.precautions_warnings?"<p>".concat(o.precautions_warnings,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of precautions and warnings --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- adverse effects and reactions --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Adverse effects/reactions:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.adverse_effects_reactions?"<p>".concat(o.adverse_effects_reactions,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of adverse effects and reactions --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- reg number --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">NAFDAC reg no:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.reg_no?"<p>".concat(o.reg_no,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- reg number --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- storage_condition --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Storage condition:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.storage_condition?"<p>".concat(o.storage_condition,"</p>"):"",'</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of storage condition --\x3e\n\n\t\t\t\t\t\t\t\t\x3c!-- shelf life --\x3e\n\t\t\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t\t\t<h4 class="heading">Shelf life:</h4>\n\n\t\t\t\t\t\t\t\t\t<p>').concat(void 0!==o.shelf_life?"<p>".concat(o.shelf_life,"</p>"):"","</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\x3c!-- end of shelf life --\x3e\n\n              </div>\n            </section>\n          ");c.innerHTML=i}))})),i.disconnect()):console.log("nothing is being observed")}));i.observe(o,{childList:!0})})();