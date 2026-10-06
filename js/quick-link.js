/* ============================================================
   TealBank — Widget: sticky quick-link toggle (right edge)
   ============================================================ */

(()=>{const q=document.getElementById("ql"),t=document.getElementById("qlt"),set=o=>{q.classList.toggle("open",o);t.setAttribute("aria-expanded",o)};
t.onclick=e=>{e.stopPropagation();set(!q.classList.contains("open"))};
q.querySelectorAll("li a").forEach(a=>a.addEventListener("click",()=>set(false)));
document.addEventListener("click",e=>{if(!q.contains(e.target))set(false)});
addEventListener("keydown",e=>{if(e.key=="Escape")set(false)})})();
