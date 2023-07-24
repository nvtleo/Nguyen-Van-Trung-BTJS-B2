function xepLoaiSV() {
    var diem1 = document.getElementById("diemmon1").value;
    var diem2 = document.getElementById("diemmon2").value;
    var diem3 = document.getElementById("diemmon3").value;
    var diemBaMon = Number(diem1) + Number(diem2) + Number(diem3);
    doituong(diemBaMon);
}
document.getElementById("btnDiem").onclick = xepLoaiSV;

function doituong(diemcongdt) {
    var doituongsv = document.getElementById("doituong").value;
    if (doituongsv == 2.5) {
        diemcongdt = diemcongdt + 2.5;
    } else if (doituongsv == 1.5) {
        diemcongdt = diemcongdt + 1.5;
    } else if (doituongsv == 1) {
        diemcongdt = diemcongdt + 1;
    } else {
        diemcongdt = diemcongdt;
    }
    khuvuc(diemcongdt);
}

function khuvuc(diemcongkv) {
    var khuvucsv = document.getElementById("khuvuc").value;
    if (khuvucsv == 2) {
        diemcongkv = diemcongkv + 2;
    } else if (khuvucsv == 1) {
        diemcongkv = diemcongkv + 1;
    } else if (khuvucsv == 0.5) {
        diemcongkv = diemcongkv + 0.5;
    } else {
        diemcongkv = diemcongkv;
    }
    ketqua(diemcongkv);
}

function ketqua(diemtk) {
    var diemchuan = document.getElementById("diemChuan").value;
    if (diemtk >= diemchuan) {
        document.getElementById("txtLoai").innerHTML = "dau " + diemtk;
    } else {
        document.getElementById("txtLoai").innerHTML = "rot " + diemtk;
    }
}
