import{S as m,i as c}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="45133531-217ba4dc206fd3adb926b5b11",d="https://pixabay.com/api/";function y(i){const a=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>console.log(s))}const u=document.querySelector(".form"),l=document.querySelector(".gallery"),p=document.querySelector(".loader"),n=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:"250",overlayOpacity:.8});u.addEventListener("submit",h);function h(i){i.preventDefault();const a=i.target.elements.query.value.trim();if(!a){c.error({message:"Sorry, you have to type something in the search field. Please try again!",position:"topRight"});return}b(),l.innerHTML="",y(a).then(s=>{v(),s.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="",L(s.hits),n.refresh()}),u.reset()}function L(i){l.innerHTML=i.map(({webformatURL:a,largeImageURL:s,tags:o,likes:e,views:t,comments:r,downloads:g})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${a}" alt="${o}">
        </a>
          <div class="image-stats">
            <ul class="image-stats-list">
              <li class="image-stats-item">
                <p class="image-stats-title">Likes</p>
                <p class="image-stats-text">${e}</p>
              </li>
              <li class="image-stats-item">
                <p class="image-stats-title">Views</p>
                <p class="image-stats-text">${t}</p>
              </li>
              <li class="image-stats-item">
                <p class="image-stats-title">Comments</p>
                <p class="image-stats-text">${r}</p>
              </li>
              <li class="image-stats-item">
                <p class="image-stats-title">Downloads</p>
                <p class="image-stats-text">${g}</p>
              </li>
            </ul>
          </div>
        
      </li>`).join(""),n||(n=new m(".gallery a",{captionsData:"alt",captionDelay:250}))}function b(){p.classList.add("active")}function v(){p.classList.remove("active")}
//# sourceMappingURL=commonHelpers.js.map
