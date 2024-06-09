/*
    Array built-in methods
    // JOIN
    Menggabungkan value yang ada dalam array ke dalam bentuk string

    // POP
    Menghilangkan isi value paling akhir dalam array

    // PUSH
    Menambahkan value ke dalam array di paling akhir

    // SHIFT
    Menghilangkan value paling depan di dalam array

    // UNSHIFT
    Menambahkan value ke urutan paling depan array

    // CONCAT
    Menggabungkan banyak array menjadi 1 array

    // SPLICE
    Menghapus, mengganti atau menambahkan value pada sebuah array

    // SLICE
    Mereturn new array dengan value yang sudah kita tentukan
    Index start dan end nya dari sebuah array tersebut

    // INDEXOF
    Mencari index dari value yang kita cari
    Kalau tidak menemukan value, akan mereturn -1

    // SORT
    Mengurutkan isi array berupa string atau number

    // REVERSE
    Membalikkan urutan elemen dalam array

    // FOREACH
    Melakukan looping pada array tanpa mereturn apapun

    // MAP
    Melakukan looping pada array tapi mereturn array baru

    // FILTER
    Melakukan looping pada array dan mereturn array baru berdasarkan kondisi pada return function
    yang dimasukkan ke filter parantheses
*/

// JOIN
let words = ["Hello", "World"];
console.log(words.join(" "));

// POP
const words2 = ["Hello", "World", "Test"];
words2.pop();
console.log(words2);

// PUSH
const words3 = ["Hello", "World", "Test"];
words3.push("Purwadhika");
console.log(words3);

// SHIFT
const words4 = ["Hello", "World", "Test"];
words4.shift();
console.log(words4);

// UNSHIFT
const words5 = ["Hello", "World", "Test"];
words5.unshift("Jogja");
console.log(words5);

// CONCAT
const arr1 = ["Hello"];
const arr2 = ["World"];
const arr3 = ["Test"];

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));
console.log(arr1.concat(arr2, arr3));


// SPLICE
// splice(startIndex, numToSplice, item, item, ...)

const months = ["January", "December", "April", "June"];

months.splice(1, 0, "February");            // Menambahkan pada index ke-1

console.log(months);

// Menghapus dengan splice

months.splice(4, 1);                        // Menambahkan pada index ke-4

console.log(months);

// Mengganti dengan splice

months.splice(2, 1, "March");               // Mengganti index ke-2

console.log(months);

// SLICE
// slice(startIndex, endIndex)
// array baru yang terslice tidak termasuk endIndex
// hasilnya dari startIndex sampai dengan <endIndex

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.slice(1, 3));
console.log(fruits.slice(-4, -1));

// INDEXOF
console.log(fruits.indexOf("Lemon"));

// SORT
fruits.sort();

console.log(fruits);

// Versi number tanpa compare function >> akan bug ketika ada digit lebih dari 1
const angka = [3, 5, 2, 10, 6, 4];

angka.sort();

console.log(angka);

// Versi number menggunakan compare function
const sortN = [34, 5, 200, 16, 8, 10];

// Ascending
sortN.sort((a, b) => a - b);        // Juga disebut anonymous function
console.log(sortN);

// Descending
sortN.sort((a, b) => b - a);
console.log(sortN);

// REVERSE
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits2.reverse();
console.log(fruits2);

// FOREACH
const forEachResult = fruits2.forEach((value, index) => {
    console.log(value);
});

console.log(forEachResult);     // Karena foreach tidak mereturn

// MAP
const mapResult = fruits2.map((fruit, idx) => {
    return fruit;
});
// Bisa juga ditulis// const mapResult = fruits2.map((fruit, idx) => fruit)

console.log(mapResult);

// FILTER
const ages = [32, 30, 21, 12, 40];

const filterResult = ages.filter((age, index) => {
    return age > 20;
});

console.log(filterResult);

/*
    String built-in methods
    // slice

    // substring

    // substr

    // replace

    // toUpperCase

    // toLowerCase

    // concat

    // trim

    // padStart

    // padEnd

    // charAt

    // charCodeAt

    // split

    // indexOf

    // lastIndexOf

    // search
*/

/*
    Number built-in methods
    // toString

    // toExponential

    // toFixed

    // toPrecision

    // valueOf

    ==========Global built-in method & property==========
    // Number
    
    // parseInt

    // parseFloat

    // MAX_VALUE

    // MIN_VALUE

    // POSITIVE_INFINITY

    // NEGATIVE_INFINITY

    // NaN
*/

/*
    Date built-in methods
    // getFullYear

    // getMonth

    // getDate

    // getHours

    // getMinutes

    // getSeconds

    // getMilliseconds

    // getTime

    // getDay

    // Date.now

    // Date.parse

    ==========SET==========

    // setFullYear

    // setMonth

    // setDate

    // setHours

    // setMinutes

    // setSeconds

    // setMilliseconds

    // setTime
*/