/* ============================================================
   TealBank — App: mode/segment state, menu, router, theme toggle
   ============================================================ */

// ── State: digital/branch mode & RB/SME/WB segment ──
let mode="digital",seg="rb";
const SEGC={loan:"rb",save:"rb",card:"rb",acc:"rb",dig:"rb",xfer:"rb",credit:"wb",wacc:"wb",wsvc:"wb",guar:"wb",intl:"wb",tf:"wb",fx:"wb",scredit:"sme",sacc:"sme",ssvc:"sme",sguar:"sme",stf:"sme",sintl:"sme"};
const SEG={rb:["RB","Cá nhân"],wb:["WB","Doanh nghiệp"],sme:["SME","SME"]};
const HT={rb:["Ngân hàng kiến tạo","hạnh phúc","Giao dịch dễ dàng, sản phẩm phù hợp và nhiều ưu đãi dành cho khách hàng cá nhân."],sme:["Đồng hành cùng","hộ kinh doanh và SME","Giải pháp tài chính linh hoạt giúp doanh nghiệp nhỏ tăng trưởng bền vững."],wb:["Giải pháp tài chính","cho doanh nghiệp","Tài trợ thương mại, dòng tiền và dịch vụ chuyên biệt cho doanh nghiệp lớn."]};
const segCats=()=>CATS.filter(c=>SEGC[c[0]]==seg),segP=()=>P.filter(p=>SEGC[p.c]==seg);
const H=()=>{const t=HT[seg],d=mode=="digital";return `<span class="eyebrow">${d?"Ngân hàng số thế hệ mới":"Ngân hàng đồng hành cùng bạn"}</span><h1>${t[0]}<br><em>${t[1]}</em></h1><p>${t[2]} ${d?"Mở và quản lý hoàn toàn trên nền tảng số 24/7.":"Được tư vấn trực tiếp tại chi nhánh và phòng giao dịch."}</p><div class="btns"><a href="#products" class="btn">${d?"Mở tài khoản online":"Đặt lịch tại chi nhánh"}</a>`};
// ── Mega menu (ACB-style): hover/click on a main item ──
const MENU_GROUPS={rb:{label:"Cá nhân",route:"personal"},business:{label:"Doanh nghiệp",route:"business"},about:{label:"Về ABBANK",route:"about"}};
const MEGA_IMAGES={rb:"https://abbank.vn/uploads/images/2026/09/05/website-ag-1440x635-6a9b5bb43b1ac.jpg",business:"https://abbank.vn/uploads/images/2025/03/04/website-1440x550-67c6d8881b462.png"};
const productLinks=s=>CATS.filter(c=>SEGC[c[0]]==s).map(c=>`<li><a href="#products/${c[0]}" data-gs="${s}">${c[2]}</a></li>`).join("");
const megaHtml=s=>{if(s==="about")return `<div class="wrap"><div class="mg"><div class="mgl"><h3>Về ABBANK</h3><ul><li><a href="#org">Giới thiệu</a></li><li><a href="#timeline">Lịch sử phát triển</a></li><li><a href="#awards">Giải thưởng</a></li><li><a href="#ir">Quan hệ nhà đầu tư</a></li><li><a href="#careers">Tuyển dụng</a></li><li><a href="#contact">Liên hệ & FAQ</a></li></ul></div><div class="promo p-rb"><b>Kiến tạo hạnh phúc</b><small>Đồng hành cùng khách hàng trong từng hành trình.</small><a class="btn" href="#about">Khám phá ABBANK</a></div></div></div>`;return `<div class="wrap"><div class="mg"><div class="mgl"><h3>${s==="rb"?"Sản phẩm Khách hàng cá nhân":"Giải pháp cho doanh nghiệp"}</h3>${s==="business"?`<h4>Doanh nghiệp lớn</h4><ul>${productLinks("wb")}</ul><h4>Doanh nghiệp vừa & nhỏ (SME)</h4><ul>${productLinks("sme")}</ul>`:`<ul>${productLinks("rb")}</ul>`}<a class="mgall" href="#${MENU_GROUPS[s].route}">Xem tổng quan ${MENU_GROUPS[s].label} →</a></div><div class="promo p-${s==="business"?"wb":"rb"}"><img src="${MEGA_IMAGES[s]}" alt="${MENU_GROUPS[s].label}"><b>${s==="rb"?"ABBANK Digital":"ABBANK Corporate"}</b><small>${s==="rb"?"Ngân hàng số trong tầm tay bạn":"Giải pháp tài chính toàn diện cho doanh nghiệp"}</small><a class="btn" href="#${MENU_GROUPS[s].route}">Khám phá</a></div></div></div>`};
let megaTimer=0;
function openMega(s){clearTimeout(megaTimer);$("#mega").innerHTML=megaHtml(s);$("#mega").classList.add("open");document.querySelectorAll(".mi").forEach(b=>{const active=b.dataset.g==s;b.classList.toggle("open",active);b.setAttribute("aria-expanded",String(active))})}
function closeMega(){clearTimeout(megaTimer);$("#mega").classList.remove("open");document.querySelectorAll(".mi").forEach(b=>{b.classList.remove("open");b.setAttribute("aria-expanded","false")})}
const touch=()=>matchMedia("(hover:none)").matches;

(()=>{
  const gift=document.querySelector(".gift-promo");
  if(!gift)return;
  const storageKey="abbank-gift-position";
  let pointer=null,suppressClickUntil=0;
  const setPosition=(left,top)=>{
    const maxLeft=Math.max(0,innerWidth-gift.offsetWidth),maxTop=Math.max(0,innerHeight-gift.offsetHeight);
    const position={left:Math.round(Math.min(maxLeft,Math.max(0,left))),top:Math.round(Math.min(maxTop,Math.max(0,top)))};
    gift.style.left=`${position.left}px`;
    gift.style.top=`${position.top}px`;
    gift.style.right="auto";
    gift.style.bottom="auto";
    return position;
  };
  const savePosition=position=>{
    try{localStorage.setItem(storageKey,JSON.stringify(position))}catch{}
  };
  try{
    const saved=JSON.parse(localStorage.getItem(storageKey)||"null");
    if(saved&&Number.isFinite(saved.left)&&Number.isFinite(saved.top)){
      setPosition(saved.left,saved.top);
      gift.dataset.dragged="true";
    }
  }catch{}
  gift.addEventListener("pointerdown",event=>{
    if(event.button!==0)return;
    const rect=gift.getBoundingClientRect();
    pointer={id:event.pointerId,startX:event.clientX,startY:event.clientY,left:rect.left,top:rect.top,dragging:false};
    gift.setPointerCapture(event.pointerId);
  });
  gift.addEventListener("pointermove",event=>{
    if(!pointer||pointer.id!==event.pointerId)return;
    const deltaX=event.clientX-pointer.startX,deltaY=event.clientY-pointer.startY;
    if(!pointer.dragging&&Math.hypot(deltaX,deltaY)<5)return;
    pointer.dragging=true;
    gift.classList.add("is-dragging");
    setPosition(pointer.left+deltaX,pointer.top+deltaY);
    event.preventDefault();
  });
  const finishDrag=event=>{
    if(!pointer||pointer.id!==event.pointerId)return;
    if(pointer.dragging){
      const rect=gift.getBoundingClientRect();
      savePosition({left:Math.round(rect.left),top:Math.round(rect.top)});
      gift.dataset.dragged="true";
      suppressClickUntil=performance.now()+400;
    }
    pointer=null;
    gift.classList.remove("is-dragging");
  };
  gift.addEventListener("pointerup",finishDrag);
  gift.addEventListener("pointercancel",finishDrag);
  gift.addEventListener("click",event=>{
    if(performance.now()<suppressClickUntil){event.preventDefault();event.stopImmediatePropagation()}
  },true);
  gift.addEventListener("dragstart",event=>event.preventDefault());
  addEventListener("resize",()=>{
    if(gift.dataset.dragged!=="true")return;
    const rect=gift.getBoundingClientRect();
    savePosition(setPosition(rect.left,rect.top));
  });
})();

// ── Utility bar + main menu ──
function menu(){const d=mode=="digital";closeMega();
$("#ul").innerHTML=[["rates","Lãi suất"],["fees","Biểu phí"],["forms","Biểu mẫu"],["contact/app","Tìm ATM/Chi nhánh"],["institutional","Định chế tài chính"]].map(x=>`<a href="#${x[0]}" data-p="${x[0]}">${x[1]}</a>`).join("");
$("#ur").innerHTML=`<div class="mode"><button class="${d?"on":""}" data-m="digital">${ico("phone")} Ngân hàng số</button></div><a href="#contact">${ico("phone")}<span class="lb">Hỗ trợ 24/7</span></a><a href="#contact/app">${ico("pin")}<span class="lb">Liên hệ</span></a><button class="ib" aria-label="Tìm kiếm">${ico("search")}</button>`;
document.querySelector('.quick-link a[title="Công cụ và tính năng"]')?.setAttribute("href","#tools");
document.querySelector('.quick-link a[title="ATM/Điểm giao dịch"]')?.setAttribute("title","Tìm ATM/Chi nhánh");
document.querySelector('.quick-link a[title="Tìm ATM/Chi nhánh"] span')?.replaceChildren("Tìm ATM/Chi nhánh");
$("#mn").innerHTML=Object.entries(MENU_GROUPS).map(([k,v])=>`<button class="mi ${k==="rb"&&seg==="rb"?"on":""}" data-g="${k}" data-route="${v.route}" aria-haspopup="true" aria-expanded="false">${v.label}</button>`).join("")}
document.addEventListener("mouseover",e=>{const b=e.target.closest(".mi");if(b&&!touch()&&!b.classList.contains("open")){clearTimeout(megaTimer);megaTimer=setTimeout(()=>openMega(b.dataset.g),150)}});
document.addEventListener("focusin",e=>{const b=e.target.closest(".mi");if(b&&!touch())openMega(b.dataset.g)});
document.querySelector("header").addEventListener("mouseleave",()=>{if(!touch())closeMega()});
document.querySelector("#mega").addEventListener("mouseleave",()=>{if(!touch())closeMega()});
document.addEventListener("click",e=>{
const m=e.target.closest("[data-m]");if(m){mode=m.dataset.m;route();return}
const g=e.target.closest(".mi");
if(g){const s=g.dataset.g;if(touch()&&!g.classList.contains("open")){openMega(s);return}closeMega();if(s==="rb")seg="rb";if(s==="business")seg="wb";location.hash=g.dataset.route;return}
const x=e.target.closest("[data-gs]");if(x){seg=x.dataset.gs;closeMega();setTimeout(route,0);return}
if(!e.target.closest("header"))closeMega()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMega()});
document.addEventListener("click",e=>{const faq=e.target.closest('a[href="#contact"]');if(faq?.textContent.includes("FAQ")){e.preventDefault();location.hash="#faq";return}const a=e.target.closest('a[href="#products"],a[href="#products/sacc"]');if(!a)return;const label=a.querySelector(".eyebrow")?.textContent||"";if(label.includes("DOANH NGHIỆP LỚN"))seg="wb";if(label.includes("DOANH NGHIỆP VỪA"))seg="sme"});

function mountQuickCarousel(root,items,onSelect,backdrop=root.parentElement){
  root.classList.add("quick-carousel-host");
  backdrop?.classList.add("quick-carousel-backdrop");
  const lowerSection=backdrop?.classList.contains("inst-quick-stage")?document.querySelector(".inst-services"):document.querySelector(".abb-products");
  if(lowerSection)backdrop.style.setProperty("--quick-backdrop-color",getComputedStyle(lowerSection).backgroundColor);
  root.style.setProperty("--quick-visible-count",Math.min(items.length,5));
  root.innerHTML=`<div class="quick-carousel"><button class="quick-carousel-control prev" type="button" aria-label="Dịch vụ trước">${ico("arrow")}</button><div class="quick-carousel-track" aria-label="${root.getAttribute("aria-label")||"Truy cập nhanh"}" tabindex="0">${items.map((item,index)=>`<a class="quick-carousel-item" href="${item.href}" data-quick-index="${index}"><span class="quick-carousel-icon">${item.icon}</span><span>${item.label}</span></a>`).join("")}</div><button class="quick-carousel-control next" type="button" aria-label="Dịch vụ tiếp theo">${ico("arrow")}</button></div>`;
  const track=root.querySelector(".quick-carousel-track"),previous=root.querySelector(".prev"),next=root.querySelector(".next");
  const carousel=root.querySelector(".quick-carousel");
  const updateControls=()=>{const max=track.scrollWidth-track.clientWidth,scrollable=max>2;carousel.classList.toggle("quick-carousel-static",!scrollable);previous.disabled=track.scrollLeft<=2;next.disabled=track.scrollLeft>=max-2};
  const move=direction=>{const step=track.querySelector(".quick-carousel-item")?.getBoundingClientRect().width||track.clientWidth/2;track.scrollTo({left:Math.max(0,Math.min(track.scrollWidth-track.clientWidth,track.scrollLeft+direction*step)),behavior:"instant"})};
  previous.onclick=()=>move(-1);
  next.onclick=()=>move(1);
  track.addEventListener("scroll",updateControls,{passive:true});
  if(onSelect)track.querySelectorAll("[data-quick-index]").forEach(link=>link.onclick=event=>{event.preventDefault();onSelect(Number(link.dataset.quickIndex))});
  updateControls();
  if(items.length>5&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
    const timer=setInterval(()=>{
      if(!root.isConnected){clearInterval(timer);return}
      if(document.hidden||root.matches(":hover")||root.contains(document.activeElement))return;
      const max=track.scrollWidth-track.clientWidth,step=track.querySelector(".quick-carousel-item")?.getBoundingClientRect().width||track.clientWidth/2;
      track.scrollTo({left:track.scrollLeft>=max-2?0:Math.min(max,track.scrollLeft+step),behavior:"instant"});
    },5000);
    root._quickCarouselTimer=timer;
  }
}

// ── Page behaviours (calculators, tabs, filters) ──
function bind(pg){
  if(pg=="home"){
    const root=document.querySelector(".abb-quick");
    if(root){const items=[...root.querySelectorAll(":scope > a")].map(link=>({href:link.getAttribute("href"),label:link.textContent.trim(),icon:link.querySelector(".ic")?.innerHTML||""}));mountQuickCarousel(root,items)}
  }
  if(pg=="institutional"){
    const hero=document.querySelector(".inst-hero"),cards=[...document.querySelectorAll(".inst-service-card")];
    if(hero&&cards.length){
      const stage=document.createElement("div"),wrap=document.createElement("div"),carousel=document.createElement("div"),iconNames=["tf","chart","cap","loan","pay","ins"];
      stage.className="inst-quick-stage";wrap.className="wrap";wrap.append(carousel);stage.append(wrap);
      hero.after(stage);
      carousel.setAttribute("aria-label","Dịch vụ định chế tài chính");
      mountQuickCarousel(carousel,cards.map((card,index)=>({href:"#institutional-services",label:card.querySelector("h3").textContent,icon:ico(iconNames[index])})),index=>cards[index].scrollIntoView({behavior:"smooth",block:"center"}),stage);
    }
  }
  if(pg=="products"){const smeView=document.querySelector(".sme-view");if(smeView){const grid=document.querySelector(".sme-grid"),buttons=[...document.querySelectorAll(".sme-view button[data-view]")];buttons.forEach(button=>button.onclick=event=>{event.preventDefault();const list=button.dataset.view==="list";grid?.classList.toggle("list",list);buttons.forEach(item=>{const active=item===button;item.classList.toggle("on",active);item.setAttribute("aria-pressed",String(active))});});}else{const grid=document.querySelector(".tabs + .grid"),cards=[...(grid?.querySelectorAll(":scope > .pc")||[])];if(grid&&cards.length>PAGE_SIZE){const controls=document.createElement("div");controls.className="pagination";grid.after(controls);const renderProducts=page=>{const pages=Math.ceil(cards.length/PAGE_SIZE),current=Math.max(1,Math.min(page,pages));cards.forEach((card,index)=>{card.hidden=index<(current-1)*PAGE_SIZE||index>=current*PAGE_SIZE});controls.innerHTML=pagination(current,cards.length);controls.querySelectorAll("[data-page]").forEach(button=>button.onclick=()=>renderProducts(Number(button.dataset.page)))};renderProducts(1)}}}
  if(pg=="timeline")bindTimeline();
  if(pg=="awards")bindAwards();
  if(pg=="org")bindOrg();
  if(pg=="home"&&$("#a")&&$("#m")&&$("#out")){const f=()=>{const a=+$("#a").value,o=$("#m").selectedOptions[0],m=+$("#m").value,r=+o.dataset.r;const i=a*r/100*m/12;$("#out").innerHTML=`Tiền lãi: ${num(Math.round(i))} đ<small>Tổng nhận: ${num(Math.round(a+i))} đ</small>`};["a","m"].forEach(i=>$("#"+i).oninput=f);f()}
  if(pg=="rates"){const show=t=>{$("#tb").innerHTML=`<div class="tw"><table>${t=="d"?`<tr><th>Kỳ hạn</th><th>Tại quầy (%/năm)</th><th>Online (%/năm)</th></tr>`+DEP.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td class="r">${r[2]}</td></tr>`).join(""):`<tr><th>Sản phẩm vay</th><th>Lãi suất từ (%/năm)</th><th>Thời hạn tối đa</th><th>Tỷ lệ cho vay</th></tr>`+LOAN.map(r=>`<tr><td>${r[0]}</td><td class="r">${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join("")}</table></div>`};show("d");
    document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-t]").forEach(x=>x.classList.toggle("on",x==b));show(b.dataset.t)});
    const f=()=>{const P=+$("#la").value,r=+$("#lr").value/1200,n=+$("#ly").value*12;const m=r?P*r/(1-Math.pow(1+r,-n)):P/n;$("#lo").innerHTML=`Trả hàng tháng: ${num(Math.round(m))} đ<small>Tổng lãi: ${num(Math.round(m*n-P))} đ</small>`};["la","lr","ly"].forEach(i=>$("#"+i).oninput=f);f()}
  if(pg=="news"){const list=$("#nl"),cards=[...list.querySelectorAll(":scope > .nc")],paginationHost=document.createElement("div");paginationHost.id="nl-pagination";list.after(paginationHost);const renderNews=(category,page=1)=>{const filtered=cards.filter(card=>category==="Tất cả"||card.querySelector(".tag")?.textContent===category),pages=Math.ceil(filtered.length/PAGE_SIZE),current=Math.max(1,Math.min(page,pages||1));cards.forEach(card=>card.hidden=!filtered.includes(card)||filtered.indexOf(card)<(current-1)*PAGE_SIZE||filtered.indexOf(card)>=current*PAGE_SIZE);document.querySelectorAll("[data-nc]").forEach(x=>x.classList.toggle("on",x.dataset.nc===category));paginationHost.innerHTML=pagination(current,filtered.length);paginationHost.querySelectorAll("[data-page]").forEach(button=>button.onclick=()=>renderNews(category,Number(button.dataset.page)))};document.querySelectorAll("[data-nc]").forEach(button=>button.onclick=()=>renderNews(button.dataset.nc));renderNews("Tất cả")}
  if(pg=="faq"){const items=[...document.querySelectorAll(".faq-item")],search=$("#faq-search"),empty=$("#faq-empty"),filter=()=>{const query=search.value.trim().toLowerCase();let visible=0;items.forEach(item=>{const match=!query||item.textContent.toLowerCase().includes(query);item.hidden=!match;if(match)visible++});empty.hidden=visible>0};items.forEach(item=>item.querySelector("button").onclick=()=>{const open=item.classList.toggle("open");item.querySelector("button").setAttribute("aria-expanded",String(open))});search.oninput=filter;filter();}
  if(pg=="contact"){
    const query=$("#branch-query"),city=$("#branch-city"),type=$("#branch-type"),list=$("#branch-list"),count=$("#branch-count");
    const markers=[],map=window.L&&L.map("branch-map-canvas",{scrollWheelZoom:false}).setView([16.05,107.2],5),markerIcon=(branch,index)=>L.divIcon({className:`abbank-map-marker marker-${branch[3]==="ATM"?"atm":branch[3]==="Phòng giao dịch"?"pgd":"office"}`,html:`<span>${index+1}</span>`,iconSize:[34,34],iconAnchor:[17,17],popupAnchor:[0,-20]});
    if(map){L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap"}).addTo(map);BRANCHES.forEach((branch,index)=>{const marker=L.marker([branch[5],branch[6]],{icon:markerIcon(branch,index)}).addTo(map).bindPopup(`<b>${branch[0]}</b><br>${branch[3]}<br>${branch[1]}${branch[4]?`<br>${branch[4]}`:""}`);marker.on("click",()=>selectBranch(index));markers.push(marker)});setTimeout(()=>map.invalidateSize(),100)}
    const selectBranch=index=>{const card=list.querySelector(`[data-index="${index}"]`),marker=markers[index];if(!card||card.hidden)return;list.querySelectorAll(".branch-card").forEach(item=>item.classList.toggle("selected",item===card));card.scrollIntoView({behavior:"smooth",block:"nearest"});if(marker&&map){map.setView(marker.getLatLng(),Math.max(map.getZoom(),12),{animate:true});marker.openPopup()}const selected=$("#branch-selected");if(selected){selected.querySelector("b").textContent=BRANCHES[index][0]+" · "+BRANCHES[index][1];selected.querySelector("button").onclick=()=>window.open(`https://www.google.com/maps/search/?api=1&query=${BRANCHES[index][5]},${BRANCHES[index][6]}`,"_blank")}};
    const filter=()=>{const q=query.value.trim().toLowerCase(),items=[...list.querySelectorAll(".branch-card")];let visible=0;items.forEach(item=>{const ok=(!q||item.dataset.branch.toLowerCase().includes(q))&&(!city.value||item.dataset.branch.includes(city.value))&&(!type.value||item.dataset.branch.includes(type.value));item.hidden=!ok;if(ok)visible++});count.textContent=`Hiển thị ${visible} / 150 điểm giao dịch.`};
    [query,city,type].forEach(control=>control.addEventListener(control===query?"input":"change",filter));$("#branch-search-btn").onclick=filter;
    const appointmentModal=$("#dealer-modal"),appointmentForm=$("#dealer-appointment-form"),appointmentBranch=$("#dealer-modal-branch"),appointmentSuccess=$("#dealer-modal-success"),appointmentStart=appointmentForm.elements.startTime,appointmentEnd=appointmentForm.elements.endTime,closeAppointment=()=>{appointmentModal.classList.remove("open");appointmentModal.setAttribute("aria-hidden","true")},openAppointment=index=>{const branch=BRANCHES[index];selectBranch(index);appointmentBranch.textContent=`${branch[0]} · ${branch[1]}`;appointmentSuccess.hidden=true;appointmentForm.reset();appointmentEnd.min="";appointmentModal.classList.add("open");appointmentModal.setAttribute("aria-hidden","false");appointmentForm.querySelector("input")?.focus()};
    list.querySelectorAll(".branch-card").forEach(card=>card.onclick=event=>{if(event.target.closest(".branch-direction,.branch-appointment"))event.preventDefault();selectBranch(card.dataset.index)});
    list.querySelectorAll(".branch-appointment").forEach(button=>button.onclick=event=>{event.stopPropagation();openAppointment(Number(button.dataset.appointment))});
    appointmentModal.querySelectorAll("[data-dealer-close]").forEach(element=>element.onclick=closeAppointment);
    appointmentStart.onchange=()=>{appointmentEnd.min=appointmentStart.value;if(appointmentEnd.value&&appointmentEnd.value<=appointmentStart.value)appointmentEnd.value=""};
    appointmentForm.onsubmit=event=>{event.preventDefault();if(appointmentEnd.value<=appointmentStart.value){appointmentEnd.setCustomValidity("Vui lòng chọn thời gian kết thúc sau thời gian bắt đầu.");appointmentEnd.reportValidity();return}appointmentEnd.setCustomValidity("");appointmentSuccess.hidden=false};
    document.addEventListener("keydown",event=>{if(event.key==="Escape"&&appointmentModal.classList.contains("open"))closeAppointment()});
  }
}

// ── Router ──
const heroObserver=window.IntersectionObserver?new IntersectionObserver(([entry])=>document.body.classList.toggle("hero-visible",entry.isIntersecting),{threshold:.15}):null;
function route(){const pathPage={"/500":"500","/404":"404","/maintenance":"maintenance"}[location.pathname];const [pg,arg]=(location.hash.slice(1)||pathPage||"home").split("/");const p=V[pg]?pg:"home";document.body.dataset.page=p;document.body.classList.toggle("sme-route",seg==="sme"||["sacc","ssvc","sguar","stf","sintl"].includes(arg));$("#app").innerHTML=V[p](arg);bind(p);heroObserver?.disconnect();const hero=document.querySelector(".abb-hero,.inst-hero,.segment-hero");if(hero)heroObserver?.observe(hero);else document.body.classList.remove("hero-visible");
  const nav={product:"products",article:"news"}[p]||p,key=p=="products"&&arg?"products/"+arg:nav;menu();document.querySelectorAll("#ul a").forEach(a=>a.classList.toggle("on",a.dataset.p==key));window.scrollTo(0,0)}
function syncMenuActive(){const page=document.body.dataset.page;document.querySelectorAll(".mi").forEach(b=>b.classList.toggle("on",b.dataset.route===page))}
addEventListener("hashchange",route);addEventListener("hashchange",syncMenuActive);route();syncMenuActive();
const eventModal=$("#event-modal");
const closeEventModal=()=>{if(!eventModal)return;eventModal.classList.remove("open");eventModal.setAttribute("aria-hidden","true")};
eventModal?.querySelectorAll("[data-event-close]").forEach(el=>el.addEventListener("click",closeEventModal));
setTimeout(()=>{if(eventModal&&document.body.dataset.page==="home"&&!sessionStorage.getItem("abbank-event-seen")){eventModal.classList.add("open");eventModal.setAttribute("aria-hidden","false");sessionStorage.setItem("abbank-event-seen","1")}},5000);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeEventModal()});
const langSwitch=$("#lang-switch"),langCurrent=$("#lang-current"),savedLang=localStorage.getItem("abbank-lang")||"vi";
function setLanguage(lang){const labels={vi:["VI","🇻🇳"],en:["EN","🇬🇧"]};localStorage.setItem("abbank-lang",lang);document.documentElement.lang=lang;langCurrent.querySelector("[data-lang-code]").textContent=labels[lang][0];langCurrent.querySelector("[data-lang-flag]").textContent=labels[lang][1];document.querySelectorAll("[data-lang]").forEach(item=>item.classList.toggle("on",item.dataset.lang===lang));langSwitch.classList.remove("open");langCurrent.setAttribute("aria-expanded","false")}
setLanguage(savedLang);
langCurrent.onclick=()=>{const open=!langSwitch.classList.contains("open");langSwitch.classList.toggle("open",open);langCurrent.setAttribute("aria-expanded",open)};
langSwitch.querySelectorAll("[data-lang]").forEach(item=>item.onclick=()=>setLanguage(item.dataset.lang));
document.addEventListener("click",e=>{if(!e.target.closest("#lang-switch")){langSwitch.classList.remove("open");langCurrent.setAttribute("aria-expanded","false")}});
