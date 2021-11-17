function startApp(){fixedNav(),createGallery(),scrollNav()}function fixedNav(){const e=document.querySelector(".header"),t=document.querySelector(".about"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().top<0?(e.classList.add("fixed"),n.classList.add("body-scroll")):(e.classList.remove("fixed"),n.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".main-nav a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))})}function createGallery(){const e=document.querySelector(".gallery-images");for(let t=1;t<13;t++){const n=document.createElement("picture");n.innerHTML=`\n            <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n            <img width="200" height="300" src= "build/img/thumb/${t}.jpg" alt="gallery image">\n        `,n.onclick=function(){showImage(t)},e.appendChild(n)}}function showImage(e){const t=document.createElement("picture");t.innerHTML=`\n            <source srcset="build/img/grande/${e}.webp" type="image/webp">\n            <img width="200" height="300" src= "build/img/grande/${e}.jpg" alt="gallery image">\n        `;const n=document.createElement("DIV");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fix-body"),n.remove()};const o=document.createElement("P");o.textContent="X",o.classList.add("btn-close"),o.onclick=function(){document.querySelector("body").classList.remove("fix-body"),n.remove()},n.appendChild(o);const c=document.querySelector("body");c.appendChild(n),c.classList.add("fix-body")}document.addEventListener("DOMContentLoaded",(function(){startApp()}));
//# sourceMappingURL=app.js.map