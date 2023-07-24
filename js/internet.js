
const PHI_HD_ND = 4.5;
const PHI_CB_ND = 20.5;
const PHI_CC_ND = 7.5;

const PHI_HD_DN = 15;
const PHI_CB_DN = 75;
const PHI_CC_DN = 50;
const PHI_SKN_DN = 5;

function loaiKhachHangChange() {
    var loaiKhachHangSelect = document.getElementById("khachhang");
    var soKetNoiInput = document.getElementById("divsoketnoi");
    var chonLoaiKhachHang = loaiKhachHangSelect.value;
    if (chonLoaiKhachHang === "Nhà Dân") {
        soKetNoiInput.style.display = "none";
    } else {
        soKetNoiInput.style.display = "block";
    }

}

function tinhtiencap() {
    var nhadan = document.getElementById("khachhang").value;
    var doanhnghiep = document.getElementById("khachhang").value;
    var sokn = document.getElementById("soketnoi").value;
    var sokcc = document.getElementById("sokenhcc").value;
    var loaikhachhang = kiemtraloaikh(nhadan, doanhnghiep);
    var tienKH = 0;
    switch (loaikhachhang) {
        case "Nhà Dân":
            tienKH = tinhtheokh(loaikhachhang, sokn, sokcc, PHI_HD_ND, PHI_CB_ND, PHI_CC_ND);
            break;
        case "Doanh Nghiệp":
            tienKH = tinhtheokh(loaikhachhang, sokn, sokcc, PHI_HD_DN, PHI_CB_DN, PHI_CC_DN, PHI_SKN_DN);
            break;
        default:
            break;
    }
    document.getElementById("txtCap").innerHTML = tienKH.toLocaleString();
}
document.getElementById("btnTienCap").onclick = tinhtiencap;

function kiemtraloaikh(nhadan, doanhnghiep) {
    var loai = "";
    if (nhadan === "Nhà Dân") {
        loai = "Nhà Dân";
    } else if (doanhnghiep === "Doanh Nghiệp") {
        loai = "Doanh Nghiệp";
    }
    else {
        alert("Hãy chọn loại khách hàng");
    }
    return loai;
}

function tinhtheokh(loaikhachhang, sokn, sokcc, phihd, phicb, phicc, phiskn) {
    var tien = 0;
    if (loaikhachhang === "Nhà Dân") {
        tien = phihd + phicb + sokcc * phicc;
    }
    else if (loaikhachhang === "Doanh Nghiệp") {
        tien = phihd + phicb + sokcc * phicc + sokn * phiskn;
    } else {
    }
    return tien;
}

