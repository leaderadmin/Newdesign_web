/* ============================================================
   TealBank — Page: Organization chart (route #org)
   Governance organs follow ABBANK's internal governance rules:
   General Meeting → Board (+committees) · Supervisory Board (+internal audit) → CEO.
   Business blocks below the CEO are ILLUSTRATIVE — replace with official data.
   ORG entry: [name, label, icon, description, reports-to, [key roles]]
   ============================================================ */
const ORG={
dh:["Đại hội đồng cổ đông","Cơ quan quyền lực cao nhất","users","Gồm tất cả cổ đông có quyền biểu quyết. Quyết định các vấn đề lớn của ngân hàng và bầu các cơ quan quản lý, giám sát.","—",["Thông qua định hướng, Điều lệ và báo cáo thường niên","Bầu, miễn nhiệm thành viên HĐQT và Ban kiểm soát","Quyết định phân phối lợi nhuận, tăng/giảm vốn"]],
hdqt:["Hội đồng quản trị","Cơ quan quản trị","bank","Định hướng chiến lược, giám sát Tổng Giám đốc và Ban điều hành; thành lập các ủy ban và hội đồng giúp việc.","Đại hội đồng cổ đông",["Quyết định chiến lược, kế hoạch kinh doanh","Bổ nhiệm, giám sát Tổng Giám đốc","Ban hành quy chế quản trị, quản lý rủi ro"]],
ubrr:["Ủy ban Quản lý rủi ro","Ủy ban của HĐQT","ins","Tham mưu HĐQT về khẩu vị rủi ro, chính sách và giới hạn rủi ro.","Hội đồng quản trị"],
ubns:["Ủy ban Nhân sự","Ủy ban của HĐQT","users","Tham mưu về nhân sự cấp cao, chính sách lương thưởng và phát triển nguồn nhân lực.","Hội đồng quản trị"],
ubesg:["Ủy ban Chiến lược & Phát triển bền vững (ESG)","Ủy ban của HĐQT","tf","Đề xuất chiến lược phát triển bền vững, theo dõi các tiêu chí môi trường – xã hội – quản trị.","Hội đồng quản trị"],
hdxl:["Hội đồng Xử lý rủi ro","Hội đồng của HĐQT","lock","Xem xét, xử lý các khoản rủi ro theo quy định của pháp luật và quy chế nội bộ.","Hội đồng quản trị"],
bks:["Ban kiểm soát","Cơ quan giám sát","ins","Giám sát hoạt động của HĐQT, Tổng Giám đốc; đánh giá hệ thống kiểm soát nội bộ và tính tuân thủ.","Đại hội đồng cổ đông",["Giám sát việc chấp hành pháp luật và Điều lệ","Thẩm định báo cáo tài chính","Giám sát hoạt động của kiểm toán nội bộ"]],
ktnb:["Kiểm toán nội bộ","Trực thuộc Ban kiểm soát","file","Kiểm toán độc lập, khách quan các hoạt động, đánh giá mức độ đầy đủ của hệ thống kiểm soát nội bộ.","Ban kiểm soát"],
tgd:["Tổng Giám đốc","Điều hành","biz","Điều hành hoạt động hằng ngày, tổ chức thực hiện nghị quyết của HĐQT và kế hoạch kinh doanh đã được thông qua.","Hội đồng quản trị",["Điều hành toàn bộ hoạt động kinh doanh","Tổ chức thực hiện nghị quyết, chiến lược","Báo cáo định kỳ với HĐQT và Ban kiểm soát"]],
ptgd:["Các Phó Tổng Giám đốc","Ban điều hành","users","Giúp việc Tổng Giám đốc, phụ trách các khối theo phân công.","Tổng Giám đốc"],
ktt:["Kế toán trưởng & GĐ Tài chính","Ban điều hành","chart","Phụ trách công tác kế toán, tài chính và báo cáo tài chính của ngân hàng.","Tổng Giám đốc"],
rb:["Khối Khách hàng cá nhân (RB)","Khối kinh doanh","users","Sản phẩm, dịch vụ và kênh phân phối cho khách hàng cá nhân (minh họa).","Tổng Giám đốc"],
sme:["Khối Doanh nghiệp nhỏ & vừa (SME)","Khối kinh doanh","biz","Giải pháp tín dụng, thanh toán và quản lý dòng tiền cho SME (minh họa).","Tổng Giám đốc"],
wb:["Khối Doanh nghiệp lớn (WB)","Khối kinh doanh","cap","Tài trợ thương mại, thị trường vốn và dịch vụ cho doanh nghiệp lớn (minh họa).","Tổng Giám đốc"],
ds:["Khối Ngân hàng số","Khối kinh doanh","phone","Phát triển ứng dụng, kênh số và trải nghiệm khách hàng trực tuyến (minh họa).","Tổng Giám đốc"],
vh:["Khối Vận hành","Khối hỗ trợ","bolt","Xử lý giao dịch, thanh toán, hậu kiểm và chăm sóc khách hàng (minh họa).","Tổng Giám đốc"],
it:["Khối Công nghệ thông tin","Khối hỗ trợ","tf","Hạ tầng, hệ thống lõi, an ninh thông tin (minh họa).","Tổng Giám đốc"],
tc:["Khối Tài chính – Kế toán","Khối hỗ trợ","chart","Kế hoạch tài chính, kế toán, quản lý vốn (minh họa).","Kế toán trưởng"],
ns:["Khối Nhân sự","Khối hỗ trợ","users","Tuyển dụng, đào tạo, chính sách đãi ngộ (minh họa).","Tổng Giám đốc"],
rr:["Khối Quản lý rủi ro","Quản trị rủi ro & tuân thủ","ins","Nhận diện, đo lường, kiểm soát rủi ro tín dụng, thị trường, hoạt động (minh họa).","Tổng Giám đốc"],
pc:["Pháp chế & Tuân thủ","Quản trị rủi ro & tuân thủ","file","Tư vấn pháp lý, giám sát tuân thủ quy định (minh họa).","Tổng Giám đốc"],
cn:["Chi nhánh","Mạng lưới","loan","Đơn vị kinh doanh khu vực, quản lý các phòng giao dịch (minh họa).","Các khối"],
pgd:["Phòng giao dịch","Mạng lưới","pay","Điểm giao dịch trực tiếp phục vụ khách hàng (minh họa).","Chi nhánh"]};
// ── People (sample data). p = [name, title, gender 0|1, optional photo URL] ──
const PPL={hdqt:[["Nguyễn Văn A","Chủ tịch HĐQT",0],["Trần Thị B","Phó Chủ tịch HĐQT",1]],bks:[["Lê Văn C","Trưởng Ban kiểm soát",0]],tgd:[["Phạm Văn D","Tổng Giám đốc",0]],ptgd:[["Hoàng Thị E","Phó Tổng Giám đốc",1],["Vũ Văn G","Phó Tổng Giám đốc",0]],ktt:[["Đặng Thị H","Kế toán trưởng",1]]};
// ── Avatar: photo if p[3] is set, otherwise an illustrated placeholder ──
const AVP=[["#d7f2f2","#008789","#f2c9a6","#2b2b2b"],["#ffe9d2","#f58220","#e8b894","#3a2a1f"],["#e3ecf9","#3b6fb6","#f6d3b3","#1d1d1d"],["#e9f5df","#5b9a3c","#e0ac86","#4a3220"],["#f4e3f0","#a9457f","#f2c9a6","#222"]];
const face=(p,s=56)=>{if(p[3])return `<img class="pf" src="${p[3]}" width="${s}" height="${s}" alt="${p[0]}">`;
const c=AVP[[...p[0]].reduce((a,x)=>a+x.charCodeAt(0),0)%5],h=c[3];
return `<svg class="pf" viewBox="0 0 64 64" width="${s}" height="${s}" role="img" aria-label="${p[0]}"><circle cx="32" cy="32" r="32" fill="${c[0]}"/><path d="M10 58c2-12 11-18 22-18s20 6 22 18a32 32 0 01-44 0z" fill="${c[1]}"/>${p[2]?`<path d="M20 30c-2-11 3-18 12-18s14 7 12 18v10c-3-2-3-6-3-10H23c0 4 0 8-3 10z" fill="${h}"/>`:""}<rect x="28" y="34" width="8" height="8" rx="3" fill="${c[2]}"/><circle cx="32" cy="26" r="10" fill="${c[2]}"/><path d="M22 25c0-8 5-12 11-12s10 4 10 11c-3-4-6-6-10-6s-8 2-11 7z" fill="${h}"/><circle cx="28.5" cy="27" r="1" fill="#333"/><circle cx="35.5" cy="27" r="1" fill="#333"/><path d="M29 31.5q3 2.5 6 0" stroke="#a65e44" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>`};
const stk=k=>PPL[k]?`<span class="stack">${PPL[k].map(p=>face(p,26)).join("")}</span>`:"";
const who=k=>PPL[k]?`<div class="who">${PPL[k].map(p=>`<div>${face(p,48)}<span><b>${p[0]}</b><br><small class="muted">${p[1]}</small></span></div>`).join("")}</div>`:"";
const leaders=Object.entries(PPL).flatMap(([k,a])=>a.map(p=>[k,p]));
const nd=(k,c="g",x="")=>`<button class="nd ${c} ${x}" data-o="${k}"><span class="ic">${ico(ORG[k][2])}</span><span>${ORG[k][0]}<small>${ORG[k][1]}</small></span>${stk(k)}</button>`;
const grp=(t,ks)=>`<div class="grp"><h4>${t}</h4>${ks.map(k=>nd(k,"e")).join("")}</div>`;
V.org=()=>head("Sơ đồ tổ chức bộ máy ABBANK","Bộ máy quản trị, giám sát và điều hành","Về chúng tôi › Sơ đồ tổ chức")+`<section class="s"><div class="wrap org">
<div class="chart"><div class="legend"><span class="g">Quản trị</span><span class="s">Giám sát</span><span class="e">Điều hành</span><em>Bấm vào từng khối để xem chi tiết</em></div>
<div class="tier">${nd("dh","g","lg")}</div><i class="vl"></i>
<div class="cols"><div class="col">${nd("hdqt","g","lg")}<div class="sub">${["ubrr","ubns","ubesg","hdxl"].map(k=>nd(k)).join("")}</div></div>
<div class="col">${nd("bks","s","lg")}<div class="sub">${nd("ktnb","s")}</div></div></div><i class="vl"></i>
<div class="tier">${nd("tgd","e","lg")}</div>
<div class="tier">${nd("ptgd","e")}${nd("ktt","e")}</div><i class="vl"></i>
<div class="grps">${grp("Khối kinh doanh",["rb","sme","wb","ds"])}${grp("Khối hỗ trợ",["vh","it","tc","ns"])}${grp("Rủi ro & tuân thủ",["rr","pc"])}</div><i class="vl"></i>
<div class="tier">${nd("cn","e")}${nd("pgd","e")}</div>
<p class="note">Cấu trúc ĐHĐCĐ – HĐQT – Ban kiểm soát – Tổng Giám đốc theo quy chế quản trị nội bộ; các khối bên dưới Tổng Giám đốc chỉ mang tính minh họa, vui lòng thay bằng sơ đồ chính thức.</p></div>
<aside class="panel" id="dp"></aside></div></section>
<section class="s org-l"><div class="wrap"><div class="h2"><h2>Ban lãnh đạo</h2></div><div class="grid leaders">${leaders.map(([k,p])=>`<button class="lead" data-o="${k}">${face(p,88)}<b>${p[0]}</b><span>${p[1]}</span></button>`).join("")}</div><p class="note">Họ tên và ảnh là dữ liệu mẫu. Thay bằng thông tin thật; muốn dùng ảnh chụp, thêm đường dẫn ảnh vào phần tử thứ 4 của mỗi người trong PPL.</p></div></section>`;
function bindOrg(){const dp=$("#dp"),bs=document.querySelectorAll("[data-o]");
const show=k=>{const o=ORG[k];bs.forEach(b=>b.classList.toggle("act",b.dataset.o==k));
dp.innerHTML=`<div class="ic big">${ico(o[2])}</div><span class="tag">${o[1]}</span><h3>${o[0]}</h3><p class="muted">${o[3]}</p>${who(k)}${o[5]?`<h4>Vai trò chính</h4><ul class="list">${o[5].map(x=>`<li>${x}</li>`).join("")}</ul>`:""}<p class="muted"><b>Báo cáo cho:</b> ${o[4]}</p>`};
bs.forEach(b=>b.onclick=()=>{show(b.dataset.o);if(innerWidth<960)dp.scrollIntoView({behavior:"smooth",block:"nearest"})});show("dh")}
