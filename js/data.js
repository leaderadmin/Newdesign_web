/* ============================================================
   TealBank — Data: categories, products, news, rates
   ============================================================ */


// ── Product categories ──
const CATS=[
// Cá nhân (RB)
["loan","loan","Vay vốn","Nhà, xe, tiêu dùng"],["save","save","Tiết kiệm","Gửi gọn – lãi cao"],["card","card","Thẻ","Tín dụng & ghi nợ"],["acc","pay","Tài khoản","Thanh toán tiện lợi"],["dig","phone","Ngân hàng số","Mọi giao dịch trên app"],["xfer","send","Chuyển và nhận tiền","Trong nước & quốc tế"],
// Doanh nghiệp (WB)
["credit","chart","Tín dụng","Vốn cho tăng trưởng"],["wacc","pay","Tài khoản","Quản lý dòng tiền"],["wsvc","bolt","Dịch vụ","Thu chi, chi lương"],["guar","ins","Bảo lãnh","Bảo lãnh hợp đồng"],["intl","tf","Thanh toán quốc tế","Chuyển tiền, thanh toán"],["tf","tax","Tài trợ thương mại","Xuất nhập khẩu"],["fx","inv","Ngoại tệ & phái sinh","Tỷ giá, phòng ngừa rủi ro"],
// SME
["scredit","chart","Tín dụng","Vốn linh hoạt cho SME"],["sacc","pay","Tài khoản","Tiền gửi & thanh toán"],["ssvc","bolt","Dịch vụ","Giải pháp quản lý"],["sguar","ins","Bảo lãnh & cấp tín dụng","An tâm hợp tác"],["stf","tax","Tài trợ thương mại","Xuất nhập khẩu SME"],["sintl","tf","Thanh toán quốc tế","Thanh toán xuyên biên giới"]];

// ── Products ──
const P=[
{id:1,c:"save",n:"Tiết kiệm Online",d:"Gửi tiết kiệm trực tuyến, lãi suất ưu đãi lên đến 6,2%/năm.",t:"Hot",r:"6,2%",u:"/năm"},
{id:2,c:"save",n:"Tiết kiệm Linh hoạt",d:"Rút gốc một phần, không mất lãi suất phần còn lại.",t:"Mới",r:"5,4%",u:"/năm"},
{id:3,c:"loan",n:"Vay mua nhà",d:"Hạn mức đến 90% giá trị nhà, thời gian vay tối đa 25 năm.",t:"Ưu đãi",r:"7,5%",u:"/năm"},
{id:4,c:"loan",n:"Vay mua ô tô",d:"Giải ngân trong 24 giờ, thủ tục đơn giản.",t:"",r:"8,2%",u:"/năm"},
{id:5,c:"card",n:"ABBANK VISA PRIORITY",d:"Thẻ cao cấp ABBANK VISA PRIORITY",t:"Thẻ cao cấp",img:"https://abbank.vn/uploads/images/2026/06/03/the-visa-priority-6a1ff876a5529.png",b:["Hạn mức chi tiêu lên đến 1.000.000.000 VNĐ/ngày","Hoàn tiền 5% cho mỗi giao dịch chi tiêu","Nhận diện đặc quyền Khách hàng ưu tiên"],r:"5%",u:"hoàn tiền"},
{id:6,c:"card",n:"ABBANK VISA CASHBACK",d:"Thẻ hoàn tiền ABBANK VISA CASHBACK",t:"Thẻ hoàn tiền",img:"https://abbank.vn/uploads/images/2026/06/02/the-visa-cashback-6a1e7c68b1f9b.png",b:["Hoàn tiền hấp dẫn cho mọi giao dịch chi tiêu","Ưu đãi mua sắm và ẩm thực quanh năm","Quản lý chi tiêu thuận tiện trên ABBANK"],r:"5%",u:"hoàn tiền"},
{id:7,c:"acc",n:"Tài khoản thanh toán số đẹp",d:"Chọn số tài khoản theo ý thích, miễn phí duy trì.",t:"Mới",r:"0đ",u:"phí duy trì"},
{id:8,c:"dig",n:"ABBANK Digital",d:"Chuyển tiền, thanh toán hóa đơn, gửi tiết kiệm trên một ứng dụng.",t:"Hot",r:"0đ",u:"phí giao dịch"},
{id:9,c:"xfer",n:"Chuyển tiền nhanh 24/7",d:"Chuyển khoản liên ngân hàng trong vài giây.",t:"",r:"Miễn phí",u:"nội bộ"},
{id:10,c:"xfer",n:"Nhận tiền từ nước ngoài",d:"Nhận kiều hối nhanh chóng, tỷ giá minh bạch.",t:"",r:"0đ",u:"phí nhận"},
{id:11,c:"credit",n:"Vay vốn lưu động",d:"Bổ sung vốn sản xuất kinh doanh, hạn mức linh hoạt.",t:"",r:"8,5%",u:"/năm"},
{id:12,c:"wacc",n:"Tài khoản Doanh nghiệp",d:"Mở tài khoản online, quản lý đa tài khoản.",t:"Mới",r:"0đ",u:"phí mở"},
{id:13,c:"wsvc",n:"Chi lương & thu chi hộ",d:"Chi lương hàng loạt, thu hộ, chi hộ tự động.",t:"",r:"1.000đ",u:"/giao dịch"},
{id:14,c:"guar",n:"Bảo lãnh thực hiện hợp đồng",d:"Bảo lãnh dự thầu, thực hiện hợp đồng, thanh toán.",t:"",r:"0,5%",u:"/năm"},
{id:15,c:"intl",n:"Chuyển tiền quốc tế",d:"Thanh toán, chuyển tiền đi nước ngoài nhanh, đúng quy định.",t:"",r:"0,15%",u:"phí"},
{id:16,c:"tf",n:"Thư tín dụng L/C",d:"Phát hành, thông báo và thanh toán L/C xuất nhập khẩu.",t:"Hot",r:"0,15%",u:"phí/quý"},
{id:17,c:"fx",n:"Giao dịch ngoại tệ kỳ hạn",d:"Phòng ngừa rủi ro tỷ giá cho dòng tiền ngoại tệ.",t:"",r:"Theo thị trường",u:""},
{id:18,c:"scredit",n:"Vay vốn lưu động SME",d:"Hồ sơ gọn, phê duyệt nhanh cho doanh nghiệp nhỏ và vừa.",t:"Mới",r:"8,9%",u:"/năm"},
{id:19,c:"sacc",n:"Tiền gửi SME",d:"Lãi suất ưu đãi cho tiền gửi có kỳ hạn của SME.",t:"",r:"5,0%",u:"/năm",img:"https://abbank.vn/uploads/images/2020/09/09/1440x550-2.jpg",b:["Kỳ hạn linh hoạt, lãi suất cạnh tranh","Mở và quản lý tài khoản thuận tiện","Bảo toàn dòng tiền nhàn rỗi"]},
{id:20,c:"ssvc",n:"Quản lý dòng tiền SME",d:"Theo dõi thu chi, đối soát tự động theo thời gian thực.",t:"",r:"0đ",u:"phí duy trì",img:"https://abbank.vn/uploads/images/2025/02/13/website-1440x550-2-67ad642a06d1e.jpg",b:["Theo dõi thu chi theo thời gian thực","Đối soát giao dịch nhanh chóng","Kiểm soát dòng tiền tập trung"]},
{id:21,c:"sguar",n:"Cam kết cấp tín dụng SME",d:"Chủ động nguồn vốn cho các dự án, hợp đồng của SME.",t:"",r:"0,6%",u:"/năm",img:"https://abbank.vn/uploads/images/2024/08/01/am-hieu-nganh-nghe-giai-phap-uu-viet-banner-66ab626a2cd1f.jpg",b:["Hỗ trợ doanh nghiệp tăng uy tín với đối tác","Thủ tục đơn giản, xử lý hồ sơ nhanh","Thời hạn cam kết tối đa 3 năm"]},
{id:22,c:"stf",n:"Tài trợ xuất nhập khẩu SME",d:"Tài trợ vốn trước và sau giao hàng cho SME xuất nhập khẩu.",t:"",r:"9,0%",u:"/năm",img:"https://abbank.vn/uploads/images/2025/03/04/website-1440x550-67c6d8881b462.png",b:["Tài trợ vốn trước và sau giao hàng","Quy trình rõ ràng, hỗ trợ tận tâm","Giải pháp phù hợp từng hợp đồng"]},
{id:23,c:"sintl",n:"Thanh toán quốc tế SME",d:"Chuyển tiền, nhờ thu, L/C với biểu phí ưu đãi cho SME.",t:"",r:"0,2%",u:"phí",img:"https://abbank.vn/uploads/images/2024/08/02/nha-thau-xay-lap-banner-66ac59d14f2b8.jpg",b:["Thanh toán quốc tế nhanh và minh bạch","Hỗ trợ L/C, nhờ thu và chuyển tiền","Biểu phí ưu đãi cho doanh nghiệp"]}];

const N=[
{id:1,c:"Thị trường",t:"Lãi suất tiết kiệm tháng 10/2026 có xu hướng ổn định",d:"30/09/2026",s:"Mặt bằng lãi suất huy động duy trì ổn định, kỳ hạn dài vẫn được nhiều khách hàng lựa chọn.",i:"chart"},
{id:2,c:"Sản phẩm",t:"ABBANK ra mắt thẻ tín dụng Platinum hoàn tiền 5%",d:"28/09/2026",s:"Sản phẩm mới hướng đến nhóm khách hàng thường xuyên mua sắm và du lịch.",i:"card",a:1},
{id:3,c:"Khuyến mãi",t:"Ưu đãi giảm 1% lãi suất vay mua nhà đến hết quý IV",d:"25/09/2026",s:"Chương trình áp dụng cho khoản vay mới với hồ sơ hoàn thiện trước 31/12.",i:"loan"},
{id:4,c:"Kiến thức",t:"5 nguyên tắc quản lý chi tiêu cá nhân hiệu quả",d:"22/09/2026",s:"Lập ngân sách, quỹ khẩn cấp và tiết kiệm tự động là ba bước khởi đầu đơn giản.",i:"bulb",a:1},
{id:5,c:"An ninh",t:"Cảnh báo các hình thức lừa đảo giả mạo ngân hàng",d:"20/09/2026",s:"Không cung cấp OTP, mật khẩu cho bất kỳ ai, kể cả người tự xưng nhân viên ngân hàng.",i:"lock"},
{id:6,c:"Doanh nghiệp",t:"Giải pháp số giúp SME tối ưu dòng tiền",d:"18/09/2026",s:"Nền tảng quản lý thu chi đa tài khoản giúp doanh nghiệp theo dõi dòng tiền theo thời gian thực.",i:"biz",a:1}];

// ── Interest rates ──
const DEP=[["Không kỳ hạn","0,10","0,10"],["1 tháng","3,00","3,10"],["3 tháng","3,40","3,50"],["6 tháng","4,80","5,00"],["9 tháng","4,90","5,10"],["12 tháng","5,80","6,00"],["24 tháng","5,90","6,20"]];
const LOAN=[["Vay mua nhà","7,5","25 năm","90%"],["Vay mua ô tô","8,2","8 năm","80%"],["Vay tiêu dùng","11,0","5 năm","—"],["Vay kinh doanh","8,9","10 năm","70%"],["Vay du học","8,0","10 năm","100%"]];

// ── Quick access strip (icon, label, route) ──
const QI=[["products/loan","Vay vốn","loan"],["products/card","Thẻ","card"],["products/intl","Thanh toán quốc tế","tf"],["fees","Nộp thuế & biểu phí","tax"],["products/loan","Giải ngân 24/7","bolt"],["products/wsvc","Chi lương bảo mật","users"],["products/acc","Tài khoản thanh toán","pay"],["products/save","Gửi tiết kiệm","save"]];
