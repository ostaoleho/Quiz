(()=>{"use strict";var e={91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},447:(e,t,n)=>{e.exports=n.p+"assets/b2d9f94e226db1aa28fa.js"}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(91),t=n.n(e),r=new URL(n(447),n.b);t()(r);const c=[],o={currentQuestion:0,questionsData:[]},u=[["Well Done","Amazing"],["Good","Not Bad"],["U can Better","Try another time"]];const i=document.querySelector("main");function s(e){i.replaceChildren(),i.classList.add(e)}async function a(){s("question");const e=function(e){const t=l("title-div"),n=document.createElement("h2");return n.classList.add("title"),n.innerHTML="Quiz Game",t.appendChild(n),t}();i.appendChild(e);const t=function(e){const t=l("count-div"),n=document.createElement("p");return n.innerHTML=`${e+1} / ${c.length}`,t.appendChild(n),t}(o.currentQuestion);i.appendChild(t);const n=function(e){const t=l("question-div"),n=document.createElement("h2");n.innerHTML=c[e].question,t.appendChild(n);const r=document.createElement("p");return r.innerHTML=c[e].category,t.appendChild(r),t}(o.currentQuestion);i.appendChild(n);const r=function(e){const t=l("answers-div"),n=c[e].incorrect_answers,r=c[e].correct_answer;return function(e){let t,n=e.length;for(;0!=n;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e}(n.concat(r)).forEach((e=>{const n=document.createElement("button");n.innerHTML=e,t.appendChild(n)})),t}(o.currentQuestion);i.appendChild(r);const d=function(){const e=l("notification"),t=document.createElement("p");return t.innerHTML=u[0],e.appendChild(t),e}();i.appendChild(d);const p=document.createElement("button");p.classList.add("check-btn"),p.innerHTML="Check Answer",p.addEventListener("click",(()=>{var e;document.querySelector(".selected")?(e=o.currentQuestion,o.questionsData[o.currentQuestion]=[c[e].correct_answer,document.querySelector(".selected").innerHTML,c[e].correct_answer===document.querySelector(".selected").innerHTML],o.currentQuestion+1<c.length?(o.currentQuestion+=1,a()):(s("result"),i.appendChild(function(){const e=document.createElement("p");return e.innerHTML=`${function(){const e=o.questionsData.map((e=>e[2]));return 100*e.filter((e=>!0===e)).length/e.length}()}%`,e}()))):alert("option")})),i.appendChild(p),function(){const e=document.querySelector(".answers-div");e.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(()=>{e.querySelector(".selected")&&e.querySelector(".selected").classList.remove("selected"),t.classList.add("selected")}))}))}()}function l(e){const t=document.createElement("div");return t.classList.add(e),t}document.querySelector("#submit").addEventListener("click",(async function(){await async function(){const e=document.querySelector("#number").value,t=document.querySelector("#categories").value,n=document.querySelector("#difficulty").value,r=document.querySelector("#type").value,o=e<=50?await fetch(`https://opentdb.com/api.php?amount=${e}&category=${t}&difficulty=${n}&type=${r}`):alert("Amount should be lower or equal 50"),u=await o.json();return u.results.forEach((e=>{c.push(e)})),u.results}(),a()}))})()})();