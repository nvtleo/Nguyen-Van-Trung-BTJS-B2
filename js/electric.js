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
        tien = 50 * KW_DAU + 50 * KW_100 + (sokw - 100) * KW_200;
    } else if (sokw > 200 && sokw <= 350) {
        tien = 50 * KW_DAU + 50 * KW_100 + 100 * KW_200 + (sokw - 200) * KW_350;
    } else if (sokw > 350) {
        tien = 50 * KW_DAU + 50 * KW_100 + 100 * KW_200 + 150 * KW_350 + (sokw - 350) * KW_CONLAI;
    }
    return tien;
}
