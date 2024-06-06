function diff(num1, num2, bool) {
    if (num1 > num2) {
        if (bool) {
            return num1 - num2;
        }
        return num1;
    }
    else if (num1 < num2) {
        if (bool) {
            return num2 - num1;
        }
        return num2;
    }
    else {
        return 0;
    }
}

// 1. Write a code to find area of rectangle
// 
// Pseudocode
// 
// 1. Mencari panjang
// 2. Mencari lebar
// 3. Mengkalikan panjang dengan lebar

const length = 5;
const width = 3;

const area = length * width;

console.log(`Luas persegi: ${area}`);

// 2. Write a code to find perimeter of rectangle
// 
// Pseudocode
// 
// 1. Mencari panjang
// 2. Mencari lebar
// 3. Menjumlahkan 2 kali panjang dengan 2 kali lebar

const length2 = 5;
const width2 = 3;

const perimeter = (length2 * 2) + (width2 * 2);

console.log(`Keliling persegi: ${perimeter}`);

// 3. Write a code to find diameter, circumference, and area of a circle
// 
// Pseudocode
// 
// 1. Mencari jari-jari
// 2. Mengkali jari-jari dengan 2 untuk diameter
// 3. Mengkali diameter dengan 3.14159 untuk keliling
// 4. Mengkali radius pangkat dua dengan 3.14159 untuk luas

const radius = 5;

const diameter = radius * 2;

const circumference = diameter * 3.14159;

const areaCircle = radius ** 2 * 3.14159;

console.log(`Diameter lingkaran: ${diameter}, Keliling lingkaran: ${circumference}, Luas lingkaran: ${areaCircle}`);

// 4. Write a code to find angles of triangle if two angles are given
// 
// Pseudocode
// 
// 1. Mengurangi jumlah kedua sudut yang diketahui dari 180

const angle1 = 80;
const angle2 = 65;

const angle3 = 180 - (angle1 + angle2);

console.log(`Sudut ketiga: ${angle3}`);

// 5. Write a code to get difference between dates in days
// 
// Pseudocode
// 
// 1. Mengecek tanggal yang lebih tua
// 2. Mencari selisih bulan 
// Bulan 31 : 1, 3, 5, 7, 8, 10, 12
// Bulan 30 : 4, 6, 9, 11
// Bulan feb 28 / 29 untuk kabisat

const date1 = "2026-02-20";
const date2 = "2022-01-22";
let jumlahHari = undefined;

const date1Array = date1.split("-");
const date2Array = date2.split("-");

const dateInt1_Year = Number(date1Array[0]);
const dateInt2_Year = Number(date2Array[0]);

const dateInt1_Month = Number(date1Array[1]);
const dateInt2_Month = Number(date2Array[1]);

const dateInt1_Day = Number(date1Array[2]);
const dateInt2_Day = Number(date2Array[2]);

const diffMonth = diff(dateInt1_Month, dateInt2_Month, 1);

if (dateInt1_Year == dateInt2_Year) {
    if (!diffMonth) {
        jumlahHari = diff(dateInt1_Day, dateInt2_Day);
    }
    else if (dateInt1_Month > dateInt2_Month) {

    }
}

console.log(dateInt1_Month);
console.log(dateInt1_Day);

// Jawaban nomor 5


// 6. Write a code to convert days to years, months, and days
// 
// Pseudocode
// 
// 1. Dari jumlah awal di bagi 365 dan hasilnya di assign ke jumlah tahun
// 2. Dari jumlah awal di modulo 365 lalu di bagi 30 untuk bulan
// 3. Dari jumlah awal di modulo 365 lalu di modulo 30 untuk hari

const jumlahAwal = 400;

const tahun = Math.floor(jumlahAwal / 365);

const bulan = Math.floor(jumlahAwal % 365 / 30);

const hari = Math.floor(jumlahAwal % 365 % 30);

console.log(`Tahun: ${tahun}, Bulan: ${bulan}, Hari: ${hari}`);

// Jawaban no.5
const datePertama = new Date("2023-11-01");
const dateKedua = new Date("2023-11-20");

const bedaTanggal = Math.abs(datePertama - dateKedua);

const bedaHari = Math.round(bedaTanggal / (1000 * 3600 * 24));
// Dibagi 1000 karena dari date tersimpan dalam bentuk milisecond

console.log(`Perbedaan hari: ${bedaHari}`);









// Math.abs                                 >>  Untuk membuat hasilnya absolute