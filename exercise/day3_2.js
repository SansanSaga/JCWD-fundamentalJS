// 1.
const angka = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${angka} x ${i} = ${angka * i}`);
}

// 2.
const pal = "mobil";
const isPalindrome = pal === pal.split("").reverse().join("");

console.log(pal.split(""));
console.log(pal.split("").reverse());
console.log(pal.split("").reverse("").join(""));

let reverse = "";

for (let i = pal.length - 1; i >= 0; i--) {
    reverse += pal[i];
}
if (reverse === pal) {
    console.log("Palindrome");
} else {
    console.log("Bukan palindrome");
}
console.log(reverse);

// 3.

// 4.
const harga = 10000;

const result = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
});

console.log(result.format(harga));

// 5.
const words = "Hello world Hello";
const search = "ell";

const remove = words.replace(search, "");
console.log(remove);

// 6.
const inputString = "hello world";
const kapitalKata = inputString.split(" ");

console.log(kapitalKata);

for (let i = 0; i < kapitalKata.length; i++) {      // kapitalKata.length = 2; karena dia array; dan berisi dua
    kapitalKata[i] = kapitalKata[i][0].toUpperCase() + kapitalKata[i].slice(1);
}

console.log(kapitalKata[0][0].toUpperCase());
console.log(kapitalKata[0].slice(1));

console.log(kapitalKata.join(" "));

// 7.
const str = "hello";
const reverseString = str.split("").reverse().join("");
console.log(reverseString);

let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}

console.log(reverseStr);

// 8.
const s = "tHe QuIck BroWn FoX";
let lowerUpper = "";

for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === char.toUpperCase()) {
        lowerUpper += char.toLowerCase();
    } else {
        lowerUpper += char.toUpperCase();
    }
}

console.log(lowerUpper);

// 9.
const num1 = 42;
const num2 = 27;
let largest;

if (num1 > num2) {
    largest = num1;
} else {
    largest = num2;
}

console.log(largest);

// 10.
const numb1 = 42;
const numb2 = 27;
const numb3 = 18;

const smallest = Math.min(numb1, numb2, numb3);
const biggest = Math.max(numb1, numb2, numb3);
const middle = numb1 + numb2 + numb3 - smallest - biggest;

console.log(`${smallest}, ${middle}, ${biggest}`);

//====
let temp = null;

if (numb1 > numb2) {

}

// 11.
const input11 = "a";
let type;

if (typeof input11 === "string") {
    type = "String";
} else if (typeof input11 === "number") {
    type = "Number";
} else {
    type = "Boolean";
}
console.log(type);

// 12.
const input12 = "An apple a day keeps the doctor away";
const replacement = "a";

let modifiedString = "";

for (let i = 0; i < input12.length; i++) {
    if (input12[i] === replacement) {
        modifiedString += "*";
    } else {
        modifiedString += input12[i];
    }
}

console.log(modifiedString);