console.log("Hello World");

// Shortcut untuk quokka            >>  Ctrl + K - Q (While on workspace)
// Shortcut untuk format            >>  Shift + Alt + F
// Shortcut untuk comment           >>  Ctrl + /
// Shortcut untuk menarik baris     >>  Alt + Arrow direction
// Shortcut untuk menyalin baris    >>  Alt + Shift + Arrow direction
// Sigkill                          >>  Ctrl + C

// Consensus penulisan variable di JS, camelCase, kecilBesar
// Bukan snake_Case

// Ini adalah comment
// NOTE:                    <<  Commonly used
// TODO:                    <<  Commonly used
// FIXME:                   <<  Commonly used

/*
Ini multi-line comment
Ini juga comment
*/

// Variable                 >>  Storage / penampungan data
// Variable declaration     >>  var, let, const

// var                      >>  global variable
var person = "Budi";

console.log(person);

// var jarang untuk digunakan karena di javascript, deklarasi ulang diperbolehkan, riskan untuk overwrite

// let                      >>  variable
let person1 = "Budi1";      // Declaring person1 and assigning Budi1 as value

person1 = "Budi2";          // Assign Budi2 as value to person1

let person2;                // Undefined variable

console.log(person1);

// const                    >>  Constant variable, tidak bisa undefined dan tidak bisa ubah value
const person3 = "Joko";     //  Industry-standardnya menggunakan const; kecuali butuh let
let isPaid = false;         //  Contoh yang butuh let; karena akan diganti

// VARIABLE NAMING
// Must contain only letters, digits, "$" or "_"
// Digits cannot be on the front
// Case sensitive

// DATA TYPES
// Primitive data types     :   string, number, boolean, null, undefined
// Non-primitive data types :   object, array

// string                   >>  Bisa menggunakan "" atau ''
// number                   >>  1 2 3 1000
// boolean                  >>  true atau false
// null                     >>  kosong idk
// undefined                >>  kosong idk

let persontest = null;
console.log(persontest);

let persontest2 = undefined;
console.log(persontest2);

// Mutable vs Immutable
// Immutable
let count1 = 4;
let count2 = count1;

count2 = 10;

console.log(count1);
console.log(count2);

// Mutable
let person7 = {
    name: "Budi",
};

let person8 = person7;

person8.hobby = "Nonton";

console.log(person7);
console.log(person8);

// String built-in method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const nama = "Siti";

console.log(nama.toLowerCase());    //  Bisa juga distore dahulu

const methodTester = nama.toLowerCase();

console.log(methodTester);

console.log(nama.toUpperCase());
console.log(nama.replace("i", "O"));
console.log(nama.replaceAll("i", "O"));

const nama2 = "Siti Metal";

console.log(nama2.split(""));
console.log(nama2.split(" "));
console.log(nama2.split("i"));
console.log(nama.concat(nama2));
console.log(nama.slice(0, 2));
console.log(nama2.toLowerCase().replaceAll("i", "o"));

console.log("Siti".toLowerCase());

// TEMPLATE LITERALS                >>  Template string
// Dengan menggunakan backtick (koma di kiri angka 1)

const nama3 = "jack";

console.log("Welcome " + nama3);
console.log(`Welcome ${nama3}`);

// Number built-in method
const angka = 1000;
const angka2 = "20n";

console.log(angka.toString());
console.log(Number(angka2));
console.log(parseInt(angka2));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Type conversion
console.log(String(123));
console.log(angka.toString());

const num = "3" * 3;                //  Exception in javascript; most languages don't allow it

console.log(Boolean(0));            //  Return False
console.log(Boolean(1));            //  Return True
console.log(Boolean(""));           //  Return False
console.log(Boolean(" "));          //  Return True
                                    //  Selama ada isinya boolean akan return true
// Date
const now = new Date();             //  Waktu di UTC
console.log(now);

console.log(now.getFullYear());     //  Return the year only
console.log(now.getMonth() + 1);    //  Return the month (+1 Because of reason-javascript)
console.log(now.getDate());         //  Return the date

now.setDate(34);
now.setFullYear(2027);              //  Set the year value to 2027

console.log(now);

// Basic operator
console.log(1 + 1);                 //  Return 2
console.log(2 - 1);                 //  Return 1
console.log(2 * 4);                 //  Return 8
console.log(4 / 2);                 //  Return 2
console.log(3 % 2);                 //  Return 1
console.log(3 ** 2);                //  Return 9

// Modify in place
let n = 4;

n += 2;                             //  n = n + 2

console.log(n);                     //  Return 6

// Increment & Decrement
let counter = 2;

counter++;                          //  Increment

console.log(counter);               //  Return 3

counter--;                          //  Decrement

console.log(counter);               //  Return 2

// Postfix & Prefix
counter = 2;

console.log(++counter);             //  Return 3; Increments first then counter get called

counter = 2;

console.log(counter++);             //  Return 2; Counter gets called, then incremented

// Comparison Operator
console.log(5 == "5");              //  Return true
console.log(5 === "5");             //  Return false
console.log(5 != "5");              //  Return false
console.log(5 !== "5");             //  Return true
console.log(6 >= 5);                //  Return true
console.log(6 <= 5);                //  Return false