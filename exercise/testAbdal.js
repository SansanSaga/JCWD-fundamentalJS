const angka = 1000000;
const bunga = 0.1;
const bulan = 6;

function program(num, month, fee) {
    while (month > 0) {
        num += (num * fee)
        month--;
        console.log(num);
    }
    return num;
}

function program2(target, num, month, fee) {
    while (target) {

    }
}

console.log(program(angka, bulan, bunga));