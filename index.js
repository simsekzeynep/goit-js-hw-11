/* empty css                      */import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".loader"),p="56707604-ad589896bfb00ef829d73b529",h="https://pixabay.com/api/";let g=new d(".gallery a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",o=>{o.preventDefault();const i=o.currentTarget.elements.searchQuery.value.trim();if(!i){l.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}u.innerHTML="",n&&n.classList.remove("is-hidden");const s=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`${h}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>{if(r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits),g.refresh()}).catch(()=>{l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{n&&n.classList.add("is-hidden"),c.reset()})});function y(o){const i=o.map(({webformatURL:s,largeImageURL:r,tags:e,likes:t,views:a,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${t}</p>
            <p class="info-item"><b>Views</b> ${a}</p>
            <p class="info-item"><b>Comments</b> ${f}</p>
            <p class="info-item"><b>Downloads</b> ${m}</p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",i)}
//# sourceMappingURL=index.js.map
