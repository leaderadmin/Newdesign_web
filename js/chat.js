/* ============================================================
   TealBank — Widget: chat window with robo-dove
   ============================================================ */

(()=>{const c=document.getElementById("chat"),m=document.getElementById("cm"),inp=document.getElementById("ci"),q=document.getElementById("cq");
const R=[[/lãi|tiết kiệm|gửi/i,'Lãi suất tiết kiệm online hiện lên đến <b>6,2%/năm</b> (kỳ hạn 24 tháng). Xem bảng đầy đủ tại <a href="#rates">Biểu lãi suất</a> nhé!'],[/vay|nhà|xe/i,'Vay mua nhà từ <b>7,5%/năm</b>, tối đa 25 năm, hạn mức đến 90%. Chi tiết tại <a href="#products/loan">Sản phẩm vay vốn</a>.'],[/thẻ|card/i,'Thẻ tín dụng Platinum hoàn tiền 5%, miễn phí năm đầu. Xem <a href="#products/card">các loại thẻ</a>.'],[/chi nhánh|atm|gần/i,'Bạn có thể tìm điểm giao dịch tại <a href="#contact/app">Chi nhánh & ATM</a>.'],[/phí/i,'Tham khảo <a href="#fees">Biểu phí</a> để biết chi tiết từng dịch vụ.']];
const add=(k,t,h)=>{const d=document.createElement("div");d.className="chat-message "+k;h?d.innerHTML=t:d.textContent=t;m.appendChild(d);m.scrollTop=m.scrollHeight};
const send=t=>{t=t.trim();if(!t)return;add("u",t);inp.value="";setTimeout(()=>{const r=R.find(x=>x[0].test(t));add("b",r?r[1]:"Cảm ơn bạn! Vui lòng gọi <b>1800.1159</b> hoặc để lại số điện thoại tại <a href=\"#contact\">trang Liên hệ</a>, chuyên viên sẽ hỗ trợ ngay.",1)},600)};
add("b","Xin chào! Mình là trợ lý ABBANK. Mình có thể giúp gì cho bạn hôm nay?");
["Lãi suất tiết kiệm","Vay mua nhà","Mở thẻ","Chi nhánh gần nhất"].forEach(t=>{const b=document.createElement("button");b.textContent=t;b.onclick=()=>send(t);q.appendChild(b)});
const tog=o=>c.classList.toggle("open",o);
document.getElementById("fab").onclick=()=>{tog(!c.classList.contains("open"));inp.focus()};
document.getElementById("cx").onclick=()=>tog(false);
document.getElementById("cs").onclick=()=>send(inp.value);
inp.onkeydown=e=>{if(e.key=="Enter")send(inp.value)};
m.addEventListener("click",e=>{if(e.target.closest("a"))setTimeout(()=>tog(false),50)})})();
