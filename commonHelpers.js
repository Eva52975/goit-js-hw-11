import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(s){const t="https://pixabay.com",o="/api/",n=new URLSearchParams({key:"44054875-23597af336816bebd19227040",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${o}?${n}`;return fetch(e,{headers:{}}).then(l=>l.json())}function m(s){return s.map(t=>`<li class="element-gallery">
      <a class="gallery-link" href="${t.largeImageURL}">
    <img class="img-gallery" src="${t.webformatURL}" alt="${t.tags}">
    <ul class="list-info">
    <li class="item-info"><h3 class="title-text">Likes</h3>
    <p class="text">${t.likes}</p></li>
    <li class="item-info"><h3 class="title-text">Views</h3>
    <p class="text">${t.views}</p></li>
    <li class="item-info"><h3 class="title-text">Comments</h3>
    <p class="text">${t.comments}</p></li>
    <li class="item-info"><h3 class="title-text">Downloads</h3>
    <p class="text">${t.downloads}</p></li>
   </ul>
  </li>`).join("")}function p(){new u(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}function h(){const s=document.querySelector(".loader");s.style.display="block"}function c(){const s=document.querySelector(".loader");s.style.display="none"}const y=document.querySelector(".form"),i=document.querySelector('input[name = "value"]'),a=document.querySelector(".gallery");c();y.addEventListener("submit",s=>{s.preventDefault(),a.innerHTML="",h(),d(i.value).then(t=>{t.hits.length===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.value="";const o=m(t.hits);a.insertAdjacentHTML("beforeend",o),p(),c()})});
//# sourceMappingURL=commonHelpers.js.map
