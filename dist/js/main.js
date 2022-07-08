(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function r(c){let a=(c-n)/o;a>1&&(a=1);let l=e(a);t(l),a<1&&requestAnimationFrame(r)}))},t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");try{if(!o)throw new Error("верните форму!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=new FormData(o),r={},c=o.querySelectorAll("input");var a;e.forEach(((e,t)=>{r[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?r[e.id]=t.textContent:"input"===e.type&&(r[e.id]=t.value)})),n.textContent="Загрузка...",o.append(n),(a=r,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.textContent="Спасибо! Наш менеджер свяжется с Вами",c.forEach((e=>{e.value="",e.style.border="none"}))})).catch((e=>{n.textContent="Ошибка ..."}))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),r=()=>{let e=function(){let e=(new Date("24 june 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}}();const c=e=>e<10?"0"+e:e;t.textContent=c(e.hours),o.textContent=c(e.minutes),n.textContent=c(e.seconds);let a=setInterval(r,1e3);e.timeRemaining<=0&&(t.textContent="00",o.textContent="00",n.textContent="00",clearInterval(a))};r()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=(document.querySelector("body"),()=>{t.classList.toggle("active-menu")});e.addEventListener("click",(e=>{e.target.closest(".menu")&&o()})),t.addEventListener("click",(e=>{"A"===e.target.tagName&&o()}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),n=(o.querySelector(".popup-close"),document.querySelector(".popup-content"));t.forEach((t=>{t.addEventListener("click",(()=>{screen.width<=768?o.style.display="block":(o.style.display="block",e({duration:1e3,timing:e=>Math.pow(e,2),draw(e){n.style.top=200*e+"px"}}))}))})),o.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(o.style.display="none")}))})(),(()=>{const e=document.querySelector("main > a");[...document.querySelectorAll("menu>ul>li>a"),e].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href").substring(1),n=document.getElementById(o);n&&n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}))}))})(),(()=>{const e=document.querySelectorAll(".calc-block >input"),t=document.querySelectorAll("form [type=text]"),o=document.querySelector('form [placeholder="Ваше сообщение"]'),n=document.querySelectorAll("form [type=email]"),r=document.querySelectorAll("form [type=tel]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я -]/gi,"")}))})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я -]/gi,"")})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/gi,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^()-\d]/g,"")}))}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),o=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{if(t.target.closest(".service-header-tab")){const n=t.target.closest(".service-header-tab");o.forEach(((t,o)=>{t===n?(t.classList.add("active"),e[o].classList.remove("d-none")):(t.classList.remove("active"),e[o].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,r=0;t.forEach((e=>{const t=document.createElement("li");t.classList.add("dot"),o.append(t)}));const c=document.querySelectorAll(".dot"),a=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},i=()=>{a(t,r,"portfolio-item-active"),a(c,r,"dot-active"),r++,r>=t.length&&(r=0),l(t,r,"portfolio-item-active"),l(c,r,"dot-active")},s=(e=1500)=>{n=setInterval(i,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot,.portfolio-btn")&&(a(t,r,"portfolio-item-active"),a(c,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&c.forEach(((t,o)=>{e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),l(t,r,"portfolio-item-active"),l(c,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),s(2e3)})(),((t=100)=>{const o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),l=document.getElementById("total");o.addEventListener("input",(o=>{o.target!==n&&o.target!==r&&o.target!==c&&o.target!==a||(()=>{const o=+n.options[n.selectedIndex].value,i=r.value;let s=0,d=1,u=1;c.value>1&&(d+=+c.value/10),a.value<5&&a.value?u=2:a.value<10&&a.value&&(u=1.5),o&&i?(s=t*o*i*d*u,e({duration:500,timing:e=>e,draw(e){l.textContent=Math.trunc(s*Math.trunc(10*e)/10)}})):s=0,l.textContent=s})()}))})(),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]})})();