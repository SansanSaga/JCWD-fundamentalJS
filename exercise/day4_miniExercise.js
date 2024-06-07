// exercise for .... of
// Hitung jumlah semua bilangan dalam array menggunakan for of
// ex : input = [1,2,3,4,5,6] = 21

const input = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (const number of input) {
    sum += number;
}

console.log(sum);