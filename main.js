// reload lại mảng
function reload() {
  window.location.reload();
}
//
function getEle(id) {
  return document.getElementById(id);
}
//lưu mảng
var arrRay = [];
getEle("saveArray").onclick = function () {
  var num = getEle("num").value * 1;
  arrRay.push(num);
  getEle("helpId").innerHTML = "Mảng là " + "[ " + arrRay + " ]";
};
// tinh tong cac so trong mang
getEle("tinhtong").onclick = function () {
  var kq1 = 0;
  for (var i = 0; i < arrRay.length; i++) {
    if (arrRay[i] >= 0) {
      kq1 = kq1 + arrRay[i];
    }
  }
  getEle("kq1").innerHTML = "Tổng là " + kq1;
};

// đếm có báo nhiêu số dương trong mảng
getEle("soDuong_mang").onclick = function () {
  var kq2 = "";
  var count = 0;
  for (var i = 0; i < arrRay.length; i++) {
    if (arrRay[i] >= 0) {
      count++;
    }
  }
  kq2 = kq2 + count;
  getEle("kq2").innerHTML = "Có " + kq2 + " số dương trong mảng";
};

// số nhỏ nhất trong mảng
getEle("soNho_nhat").onclick = function () {
  var kq3 = "";
  var min = arrRay[0];
  for (var i = 0; i < arrRay.length; i++) {
    if (min > arrRay[i]) {
      min = arrRay[i];
    }
  }
  kq3 = min;
  getEle("kq3").innerHTML = "Số nhỏ nhất là " + kq3;
};

// số dương nhỏ nhất trong mảng
getEle("soduongNho_nhat").onclick = function () {
  var kq4 = "";
  var arrRayP = [];
  for (var i = 0; i < arrRay.length; i++) {
    if (arrRay[i] >= 0) {
      arrRayP.push(arrRay[i]);
      var min = arrRayP[0];
      for (var a = 0; a < arrRayP.length; a++) {
        if (min > arrRayP[a]) {
          min = arrRayP[a];
        }
        kq4 = "Số dương nhỏ nhất là " + min;
      }
    } else {
      kq4 = "không có số dương trong mảng";
    }
  }
  getEle("kq4").innerHTML = kq4;
};

// Sỗ chẵn cuối cùng
getEle("soChan_cuoi").onclick = function () {
  var last_c;
  var kq5 = "";
  for (i = 0; i < arrRay.length; i++) {
    if (arrRay[i] % 2 == 0) {
      // số chẵn
      last_c = arrRay[i];
      kq5 = "Số chẵn cuối cùng là " + last_c;
    } else {
      last_c = -1;
      kq5 = last_c;
    }
  }
  getEle("kq5").innerHTML = kq5;
};

// đổi chổ 2 vị trí
getEle("doicho").onclick = function () {
  var vt1 = getEle("vt1").value;
  var vt2 = getEle("vt2").value;
  var temp;
  temp = arrRay[vt1];
  arrRay[vt1] = arrRay[vt2];
  arrRay[vt2] = temp;

  getEle("kq6").innerHTML = "Mảng sau khi đổi là " + arrRay;
};

// Sắp xếp tăng dần
getEle("tangdan").onclick = function () {
  var kq7 = "";
  var temp;
  for (var i = 0; i < arrRay.length; i++) {
    for (var j = i + 1; j < arrRay.length; j++) {
      if (arrRay[i] > arrRay[j]) {
        temp = arrRay[j];
        arrRay[j] = arrRay[i];
        arrRay[i] = temp;
        kq7 = arrRay;
      } else {
        kq7 = arrRay;
      }
    }
  }
  getEle("kq7").innerHTML = "Mảng tăng dần " + kq7;
};

// tìm số nguyên tố đầu tiên
function timsonguyento(n) {
  if (n < 2) {
    return false;
  } else if (n > 2) {
    if (n % 2 == 0) {
      return false;
    }
  }
  for (var i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
getEle("nguyento").onclick = function () {
  var kq8 = "";

  for (var j = 0; j < arrRay.length; j++) {
    timsonguyento(arrRay[j]);
    if (arrRay[j] > 0) {
      if (arrRay[j] == 2) {
        kq8 = "Số nguyên tố đầu tiên là" + 2;
        break;
      }
      if (timsonguyento(arrRay[j]) == true) {
        kq8 = "Số nguyên tố đầu tiên là " + arrRay[j];
        break;
      }
    } else if (arrRay[j] < 0) {
      kq8 = -1;
    }
  }

  getEle("kq8").innerHTML = kq8;
};

// đếm số nguyên
getEle("demSnguyen").onclick = function () {
  var count = 0;
  var kq9 = "";
  for (var i = 0; i < arrRay.length; i++) {
    var a = Number.isInteger(arrRay[i]);
    if (a == true) {
      count++;
    }
    kq9 = "Có " + count + " số nguyên tố";
  }
  getEle("kq9").innerHTML = kq9;
};

// So sánh âm dương
getEle("sosanhamduong").onclick = function () {
  var kq10A = "";
  var kq10B = "";
  var kq10 = "";
  var countA = 0;
  var countB = 0;
  for (var i = 0; i < arrRay.length; i++) {
    if (arrRay[i] > 0) {
      // so duong
      countA++;
      kq10A = countA;
    }
    if (arrRay[i] < 0) {
      // so am
      countB++;
      kq10B = countB;
    }
  }
  if (kq10A == kq10B) {
    kq10 = "Số âm = Số dương";
  } else if (kq10A > kq10B) {
    kq10 = "Số dương > số âm ";
  } else if (kq10A < kq10B) {
    kq10 = "Số dương < số âm";
  }

  getEle("kq10").innerHTML = kq10;
};
