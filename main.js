(()=>{"use strict";function e(){const e=document.querySelector(".income");if(!e)return;let t=0,o=0;const n=e.querySelectorAll(".input-realty");n&&n.length&&n.forEach((e=>{t+=parseFloat(e.value)||0}));const u=e.querySelectorAll(".input-business");u&&u.length&&u.forEach((e=>{o+=parseFloat(e.value)||0}));const c=t+o;console.log("sumPass: ",c),document.querySelector(".passive-income-output").textContent=c;const l=c+(parseFloat(document.querySelector(".input-income").value)||0);document.querySelector(".output-total-income").textContent=l;const r=.1*(parseFloat(document.querySelector(".bank-loan").value)||0);document.querySelector(".bank-loan-payment").textContent=r;const a=parseFloat(document.querySelector(".coll-kids").value)||0,s=parseFloat(document.querySelector(".expenses-children-input").value)||0;document.querySelector(".expenses-children").textContent=s*a;const i=document.querySelector(".expenses"),d=i.querySelectorAll(".expenses-name");let p=0;d.forEach((e=>{p+=parseFloat(e.value||0)}));let y=0;const m=i.querySelectorAll(".expenses-output");y=Array.from(m).reduce(((e,t)=>e+(parseFloat(t.value)||0)),0),console.log("totalIconomTotalConsumptionOutput: ",y);const S=p+y;document.querySelector(".total-consumption-output").textContent=S;const q=l-S;document.querySelector(".monthly-income").textContent=q}function t(t="input",o=".button-field-input-js"){document.querySelectorAll(o).forEach((o=>{o.addEventListener("click",(()=>{const n=o.parentNode.querySelector("input[data-type]"),u=n.getAttribute("data-type");n.value=0,document.querySelector(".expenses").querySelector(t+"[data-type="+u+"]").value=0,e()}))}))}function o(e){const t=e.target,o=document.querySelector(".mainBG").querySelectorAll(".input-business"),n=document.querySelector(".output-win-pass");let u=0;n&&(u=parseFloat(n.value)||0);let c=u;o.forEach((e=>{c+=parseFloat(e.value)||0})),console.log("sumBusiness: ",c);const l=t.closest(".column2-field-bc").nextElementSibling.querySelector("output");l&&(l.textContent=c)}const n=document.querySelector(".mainBG");n&&n.querySelectorAll(".input-business").forEach((e=>{e.addEventListener("input",o)})),document.querySelectorAll('input[name="name-expenses"]').forEach((t=>{t.addEventListener("change",e)})),document.querySelectorAll('input[type="number"]').forEach((t=>{t.addEventListener("input",e)})),document.querySelectorAll('input[type="text"]').forEach((t=>{t.addEventListener("change",e)})),document.addEventListener("DOMContentLoaded",(()=>{!function(e="JSON"){const t=localStorage.getItem(e);if(!t)return{};const o=JSON.parse(t.toString());Object.keys(o).forEach((e=>{document.getElementById(`${e}-output`)&&o[e]&&(document.getElementById(`${e}-output`).value=o[e])}))}(),t(),t("output",".button-field-input-8"),document.querySelectorAll(".button-field-input-active").forEach((t=>{t.addEventListener("click",(()=>{const o=t.parentNode.querySelector("input[data-type]");if(document.querySelector(".assets")){const e=o.getAttribute("data-type");document.querySelector(".assets").querySelector("input[data-type="+e+"]").value=0;const n=t.closest(".field");n.querySelector("input[data-type_2]").value=0,n.querySelector("input[data-type_3]").value=0}e()}))})),document.querySelectorAll(".button-field-input-income").forEach((t=>{t.addEventListener("click",(()=>{const o=t.parentNode.querySelector("input[data-type]");console.log("inputIncome: ",o),o.value=0;const n=t.closest(".field");console.log("fieldContainer: ",n),n.querySelector("input[data-type]").value="",e()}))})),document.querySelectorAll(".field-input").forEach((e=>{e.addEventListener("focus",(()=>{e.value=""}))})),document.querySelector(".button-footer").addEventListener("click",(()=>{!function(e={},t="JSON"){localStorage.setItem(t,JSON.stringify(e))}({profession:document.getElementById("profession-input").value,player:document.getElementById("player-input").value,auditor:document.getElementById("auditor-input").value,passiveIncome:parseFloat(document.getElementById("passive-income-output").value||0)})})),function(){const e=document.querySelector(".new-passBG");if(!e)return;const t=100*e.querySelector(".old-pass").value;document.querySelector(".output-new-pass").textContent=t,document.querySelector(".output-new-win-pass").textContent=t;const o=t+5e4;document.querySelector(".output-win-pass").textContent=o}()}))})();