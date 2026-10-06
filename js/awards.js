/* ============================================================
   TealBank — Page: Awards & certifications (route #awards)
   AW entry: [year, title, source/issuer, icon, category, verified(1) | sample(0)]
   Sample entries (0) are placeholders — replace with real awards.
   ============================================================ */
const AW=[
["2016","Ngân hàng phát triển bán lẻ tốt nhất Việt Nam","Báo cáo thường niên ABBANK 2016","trophy","Bán lẻ",1],
["2016","Chứng nhận tiêu chuẩn bảo mật dữ liệu thẻ PCI DSS","Tiêu chuẩn quốc tế","lock","Chứng nhận",1],
["2018","Nhóm 15 ngân hàng đầu tiên nộp thuế hải quan điện tử 24/7","Báo cáo thường niên ABBANK 2018","bolt","Công nghệ & số",1],
["2022","Thương hiệu ngân hàng bán lẻ tiêu biểu","Đơn vị trao giải","medal","Thương hiệu",0],
["2023","Ngân hàng có dịch vụ khách hàng xuất sắc","Đơn vị trao giải","star","Bán lẻ",0],
["2024","Sản phẩm ngân hàng số tiêu biểu","Đơn vị trao giải","phone","Công nghệ & số",0],
["2025","Doanh nghiệp vì cộng đồng","Đơn vị trao giải","users","Thương hiệu",0]];
V.awards=()=>{const cats=["Tất cả",...new Set(AW.map(a=>a[4]))],f=AW[0];
return head("Giải thưởng & danh hiệu","Những ghi nhận cho chặng đường phát triển","Về chúng tôi › Giải thưởng")+`<section class="s"><div class="wrap">
<div class="feat"><div class="ic big">${ico(f[3])}</div><div><span class="tag">${f[0]} · Nổi bật</span><h2>${f[1]}</h2><p>Ghi nhận nỗ lực phát triển mảng bán lẻ, đặt khách hàng làm trọng tâm.</p></div></div>
<div class="tabs aw-tabs">${cats.map(c=>`<button data-c="${c}">${c}</button>`).join("")}</div>
<div class="grid aw-grid">${AW.map(a=>`<article class="aw ${a[5]?"":"smp"}" data-c="${a[4]}"><div class="ic">${ico(a[3])}</div><span class="yr">${a[0]}</span><h3>${a[1]}</h3><p class="muted">${a[2]}</p>${a[5]?"":'<span class="mau">Mẫu</span>'}</article>`).join("")}</div>
<p class="note">Các mục có nhãn "Mẫu" là dữ liệu minh họa; hãy thay bằng giải thưởng thật của ngân hàng.</p></div></section>`};
function bindAwards(){const tb=document.querySelectorAll(".aw-tabs [data-c]"),cd=document.querySelectorAll(".aw");
const fl=c=>{cd.forEach(x=>x.classList.toggle("hid",c!="Tất cả"&&x.dataset.c!=c));tb.forEach(t=>t.classList.toggle("on",t.dataset.c==c))};
tb.forEach(t=>t.onclick=()=>fl(t.dataset.c));fl("Tất cả")}
