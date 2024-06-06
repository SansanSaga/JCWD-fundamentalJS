function diff(num1, num2, bool) {
  if (num1 > num2) {
      if (bool) {
          return num1 - num2;
      }
      return num2;
  }
  else if (num1 < num2) {
      if (bool) {
          return num2 - num1;
      }
      return num1;
  }
  else {
      return 0;
  }
}

function dayinMonth(num1, num2) {
  switch (num1) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if (num2 % 4 == 0) {
        return 29;
      }
      else return 28;
    default:
      //
  }
}

const date1 = "2026-02-20";
const date2 = "2022-01-22";
let jumlahHari = 0;

const date1Array = date1.split("-");
const date2Array = date2.split("-");

const date1_Year = Number(date1Array[0]);
const date2_Year = Number(date2Array[0]);

const date1_Month = Number(date1Array[1]);
const date2_Month = Number(date2Array[1]);

const date1_Day = Number(date1Array[2]);
const date2_Day = Number(date2Array[2]);

if (date1_Year == 0 || date2_Year == 0) {
  // break program
}
else if (date1_Month < 1 || date1_Month > 12 || date2_Month < 1 || date2_Month > 12) {
  // break program
}
else if (date1_Day < 1 || date1_Day > dayinMonth(date1_Month, date1_Year) || date2_Day < 1 || date2_Day > dayinMonth(date2_Month, date2_Year)) {
  // break program
}

const selisihTahun = diff(date1_Year, date2_Year, 1);

if (selisihTahun != 0) {
  if (date1_Year < date2_Year) {
    for (let i = date1_Month + 1; i <= 12; i++) {
      jumlahHari += dayinMonth(i, date1_Year);
    }
    jumlahHari += dayinMonth(date1_Month, date1_Year) - date1_Day;
    for (let i = date2_Month - 1; i > 0; i--) {
      jumlahHari += dayinMonth(i, date2_Year);
    }
    jumlahHari += date2_Day;
    jumlahHari += (selisihTahun - 1) * 365
    jumlahHari += Math.floor(selisihTahun / 4);
    date1_Year % 4;
  }
}
// Sortir antara 1 dan 2 yang lebih kecil yang mana
// 

console.log(date1_Month);
console.log(date2);