// function tienDien() {
//     var soKW = parseInt(document.getElementById("KW").value);
//     tinhtien(soKW);
// }

// document.getElementById("btnTienDien").onclick = tienDien;
// var tiendien = 0;

// function tinhtien(soKW) {
//     if (soKW <= 50 && soKW > 0) {
//         tiendien = soKW * 500;
//     }
//     else if (soKW > 50 && soKW <= 100) {
//         tiendien = 50 * 500 + (soKW - 50) * 650;
//     }
//     else if (soKW > 100 && soKW <= 200) {
//         tiendien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
//     }
//     else if (soKW > 200 && soKW <= 350) {
//         tiendien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
//     }
//     else if (soKW > 350) {
//         tiendien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
//     }
//     else {
//         tiendien = "Nhập lại số KW";
//     }
//     ketquathue(tiendien);
// }

// function ketquathue(tongtien) {
//     var hotenthue = document.getElementById("hoTen").value;
//     document.getElementById("txtTienDien").innerHTML = "Họ và tên: " + hotenthue + " Tiền điện: " + tongtien;
// }


const KW_DAU = 500
const KW_100 = 650
const KW_200 = 850
const KW_350 = 1100
const KW_CONLAI = 1300
function tiendien() {
    var hoten = document.getElementById("hoTen").value;
    var sokw = document.getElementById("KW").value;
    var tienkw = 0;
    tienkw = tiendientheokw(sokw, KW_DAU, KW_100, KW_200, KW_350, KW_CONLAI);
    document.getElementById("txtTienDien").innerHTML = "Họ và tên " + hoten + " tiền điện " + Number(tienkw).toLocaleString();
}
document.getElementById("btnTienDien").onclick = tiendien;

function tiendientheokw(sokw, KW_DAU, KW_100, KW_200, KW_350, KW_CONLAI) {
    var tien = 0;
    if (sokw > 0 && sokw <= 50) {
        tien = sokw * KW_DAU;
    } else if (sokw > 50 && sokw <= 100) {
        tien = 50 * KW_DAU + (sokw - 50) * KW_100;
    } else if (sokw > 100 && sokw <= 200) {
        tien = 50 * KW_DAU + 50 * KW_100 + (sokw - 100) * KW_100;
    } else if (sokw > 200 && sokw <= 350) {
        tien = 50 * KW_DAU + 50 * KW_100 + 100 * KW_100 + (sokw - 200) * KW_200;
    } else if (sokw > 350) {
        tien = 50 * KW_DAU + 50 * KW_100 + 100 * KW_100 + 150 * KW_200 + (sokw - 350) * KW_350;
    }
    return tien;
}
