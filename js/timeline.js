/* ============================================================
   TealBank — Page: Development timeline (route #timeline)
   Milestones follow ABBANK's public reports; verify before publishing.
   TL entry: [year, title, description, tag, icon]
   ============================================================ */
const TL=[
["1993","Thành lập ngân hàng","Ngày 13/5/1993, Ngân hàng TMCP Nông thôn An Bình ra đời theo giấy phép số 535/GP-UB.","Thành lập","bank"],
["2004","Nâng cấp lên ngân hàng đô thị","Từ ngân hàng nông thôn, ABBANK được nâng cấp và đổi tên thành Ngân hàng TMCP An Bình.","Chuyển đổi","flag"],
["2006","Phát hành trái phiếu EVN","Phối hợp cùng Deutsche Bank và VinaCapital phát hành trái phiếu của Tập đoàn Điện lực Việt Nam.","Thị trường vốn","cap"],
["2013","Kỷ niệm 20 năm thành lập","Cột mốc 20 năm (13/5/1993 – 13/5/2013) đánh dấu chặng đường phát triển và trưởng thành.","Kỷ niệm","star"],
["2016","Ngân hàng phát triển bán lẻ tốt nhất Việt Nam","Được vinh danh ở hạng mục ngân hàng bán lẻ; đồng thời đạt chuẩn bảo mật dữ liệu thẻ quốc tế PCI DSS.","Giải thưởng","trophy"],
["2018","25 năm & nộp thuế hải quan điện tử 24/7","Kỷ niệm 25 năm thành lập; thuộc nhóm 15 ngân hàng đầu tiên triển khai nộp thuế hải quan điện tử 24/7.","Sản phẩm","bolt"],
["2019","Năm phát triển thương hiệu","Năm quan trọng trong hoạt động xây dựng thương hiệu và đẩy mạnh số hóa hoạt động ngân hàng.","Thương hiệu","chart"],
["2023","30 năm & mạng lưới toàn quốc","Mạng lưới 165 điểm giao dịch tại 34 tỉnh/thành, đa dạng sản phẩm bán lẻ, thẻ và ngân hàng số.","Mạng lưới","tf"],
["2025","32 năm đồng hành","Phục vụ hơn hai triệu khách hàng, đối tác và nhà đầu tư; cổ đông chiến lược gồm Maybank và Geleximco.","Hợp tác","users"]];
const ERAS=[["Tất cả",0,9999],["1993 – 2010",0,2010],["2011 – 2020",2011,2020],["2021 – nay",2021,9999]];
V.timeline=()=>head("Lịch sử phát triển","Hơn 30 năm đồng hành cùng khách hàng","Về chúng tôi › Lịch sử phát triển")+`<section class="s"><div class="wrap">
<div class="stats"><div><b>1993</b>Năm thành lập</div><div><b>165</b>Điểm giao dịch</div><div><b>34</b>Tỉnh/thành</div><div><b>2 triệu+</b>Khách hàng & đối tác</div></div>
<p class="note tl-note">Số liệu theo thông tin công bố gần nhất trên các nguồn tham khảo.</p>
<div class="tabs tl-tabs">${ERAS.map((e,i)=>`<button data-e="${i}">${e[0]}</button>`).join("")}</div>
<ol class="tl">${TL.map(t=>`<li class="ti" data-y="${t[0]}"><span class="dot">${ico(t[4])}</span><div class="tc"><span class="yr">${t[0]}</span><span class="tag">${t[3]}</span><h3>${t[1]}</h3><p class="muted">${t[2]}</p></div></li>`).join("")}</ol></div></section>`;
function bindTimeline(){const li=[...document.querySelectorAll(".ti")],tb=document.querySelectorAll("[data-e]");
const fl=e=>{const[a,b]=ERAS[e].slice(1);let n=0;li.forEach(x=>{const y=+x.dataset.y,ok=y>=a&&y<=b;x.classList.toggle("hid",!ok);if(ok)x.classList.toggle("r",n++%2==1)});tb.forEach((t,i)=>t.classList.toggle("on",i==e))};
tb.forEach(t=>t.onclick=()=>fl(+t.dataset.e));fl(0);
const io="IntersectionObserver"in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12}):null;
li.forEach(x=>io?io.observe(x):x.classList.add("in"))}
