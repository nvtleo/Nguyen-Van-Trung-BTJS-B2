/**
 * khối 1 : nhập vào tổng thu nhập - số người phụ thuộc - họ tên
 * khối 2: lấy giá trị từ form
 * lập công thức 
 * bước 1 : tính Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 * thuế thu nhập cá nhân bằng thu nhập chịu thuế * thuế suất
 * khối 3 : xuất ra họ tên + thuế thu nhập cá nhân
 */
 function tinhthue() {
    var tongthunhap = document.getElementById("thunhap").value;
    var songuoilq = document.getElementById("nguoilienquan").value;
    thunhapthue(tongthunhap, songuoilq);
 }
 document.getElementById("btnTienThue").onclick = tinhthue;

 function thunhapthue(num1, num2) {
    thunhaptax = num1 - 4e+6 - num2 * 1600000;
    thuethunhap(thunhaptax);
 }
 function thuethunhap(thunhaptax) {
    if (thunhaptax >0 && thunhaptax <= 60e+6) {
        thue = thunhaptax * 0.05;
    }
    else if (thunhaptax > 60e+6 && thunhaptax <= 120e+6) {
        thue = thunhaptax * 0.1;
    }
    else if (thunhaptax > 120e+6 && thunhaptax <= 210e+6) {
        thue = thunhaptax * 0.15;
    }
    else if (thunhaptax > 210e+6 && thunhaptax <= 384e+6) {
        thue = thunhaptax * 0.2;
    }
    else if (thunhaptax > 384e+6 && thunhaptax <= 624e+6) {
        thue = thunhaptax * 0.25;
    }
    else if (thunhaptax > 624e+6 && thunhaptax <= 960e+6) {
        thue = thunhaptax * 0.3;
    }
    else if (thunhaptax > 960e+6) {
        thue = thunhaptax * 0.35;
    }
    ketquathue(thue);
 }
 function ketquathue(thue) {
    var hovatenthue = document.getElementById("hotenthue").value;
    document.getElementById("txtThue").innerHTML = "họ và tên " + hovatenthue + "  thuế thu nhập cá nhân " + Number(thue).toLocaleString() ;
    
 }