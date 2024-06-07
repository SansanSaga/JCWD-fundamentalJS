// Array

let arr = [];                                   //  Cara deklarasi 1
let arr2 = new Array();                         //  Cara deklarasi 2

let arrS = ["A", "B", "C", "D"];
let arrS2 = new Array("A", "B", "C", "D");

console.log(arrS);
console.log(arrS2);

const arrN = [1, 2, 3, 4];
const arrN2 = new Array(1, 2, 3, 4);

console.log(arrN);
console.log(arrN2);

let students = [                                //  Array of objects
    { name: "Budi", email: "budi@mail.com" },
    { name: "Siti", email: "siti@mail.com" },
    { name: "Joko", email: "joko@mail.com" },
];

console.log(students.length);

// for ..... of

const fruits = ["Apel", "Pisang", "Ceri"];

for (const fruit of fruits) {                   // Writing convention >> for (const singular of plural) {}
    console.log(fruit);
}

const text = "Hello world";

for (const char of text) {
    console.log(char);
}

/* 
    Function
    Ada 2 cara untuk mendefine sebuah function : function declaration & function expression
    Function bisa di declare di paling bawah

    >> Function declaration

    function namaFunction(parameter) {
        block of code;
    }

    >> Function expression
    const namaFunction = function (parameter) {
        code block;
    };

    >> Function Scope
    Variabel yang di define di dalam function hanya bisa di akses di function tersebut

    >> Parameter & Argument
    Parameter adalah variabel yang mewakili value dari argument di parentheses function
    Argument adalah value yang dimasukkan saat pemanggilan function

    >> Default Parameter
    Memberi default value ke parameter apabila tidak diberi argumen saat memanggil function

    >> Rest Parameter
    Mewakili sisa argument kedalam sisa variabel parameter
    Hanya bisa diletakkan sebagai parameter terakhir

    >> Nested Function
    Function yang terdapat di dalam function (inner function)

    >> Closure

    >> Currying
    Mentransformasikan function yang memiliki banyak parameter f(a,b,c) menjadi function
    yang memiliki beberapa parentheses sebanyak jumlah parameternya f(a)(b)(c)

    >> Recursive
    Function yang memanggil dirinya sendiri

    >> Arrow function
    Shortcut untuk menuliskan function expression
*/

function square(number) {               //  number adalah parameter;
    return number * number;
}

console.log(square(3));                 // 3 adalah argument;
console.log(square(5));

const square1 = function (number) {
    return number * number;
};

console.log(square1(10));
console.log(square1(20));
console.log(square1(30));

function greeting() {
    const hello =  "hello";
    return hello;
}

const greet = greeting();
console.log(greet);

function multiply(a = 3, b = 1) {       //  a dan b default parameter dengan default value a>3 dan b>1
    return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(5));
console.log(multiply(undefined, 2));

function myFunc(a, b, ...manyMoreArgs) {    // Rest parameter; sisanya masuk ke array
    console.log(a);
    console.log(b);
    console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

function getMessage(firstName) {
    function sayhello () {
        return "Hello " + firstName + "!";
    }

    function welcomeMessage() {
        return "Welcome to Purwadhika!";
    }

    return sayhello() + " " + welcomeMessage();
}

const nested = getMessage("Budi");

console.log(nested);

//  CLOSURE
function greeting(name) {
    const defaultMessage = "Hello";

    return function() {
        return defaultMessage + " " + name;
    };
}

const resultClosure = greeting("Budi");

console.log(resultClosure);                 //  Jika dilihat, di function greeting akan mereturn function
console.log(resultClosure());               // Jadi resultClosure di assign sebagai function

// Contoh function non currying f(a, b, c)
function tambah(a, b, c) {
    return a + b + c;
}

// Contoh currying f(a)(b)(c)
function tambahCurrying(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// Recursive
function countDown(number) {
    console.log(number);

    let nextNumber = number - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}

countDown(10);

// Function expression non arrow
const squareArrow = function (number) {
    return number * number;
};

// Contoh Arrow Function
const squareArrow1 = (number) => {
    return number * number;
};

// Contoh arrow function jika hanya satu line
const squareArrow2 = (number) => number * number;

console.log(squareArrow(4));
console.log(squareArrow1(4));
console.log(squareArrow2(4));


console.log(penambahan(2, 3));

let i1 = 3;
let i2 = 5;

tukar(i1, i2);

console.log(i1);
console.log(i2);

function penambahan(num1, num2) {
    return num1 + num2;
}

function tukar(num1, num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}