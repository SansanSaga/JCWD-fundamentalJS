// Conditional
/*
    Syntax and writing convention for JavaScript
    if (condition) {
        code block;
    } else {
        code block;
    }
*/

const age = 10;

if (age >= 17) {
    console.log("Anda bisa membuat KTP");
} else {
    console.log("Anda tidak bisa membuat KTP");
}

const grade = "B";

if (grade === "A") {
    console.log("Nilai baik");
} else if (grade === "B") {
    console.log("Nilai cukup");
} else if (grade === "C") {
    console.log("Nilai buruk");
} else {
    console.log("Nilai tidak diketahui");
}

/*
    switch (condition) {
        case a:
            code block;
            break;              //  For ending switch
        case b:
            code block;
            break;
        case c:                 //
        case d:                 //  For multiple cases with same code block
        case e:                 //
            code block;
            break;
        default:                //  For other cases
            code block;
            break;
    }
*/

/*
    Falsy
        ""      (empty string)
        0
        null
        undefined
        NaN

    Truthy
        " "     (blank character string)
        []      (empty array)
        {}      (empty object)
        1
        "1"     (string)
        "0"     (string)
        "false" (string)
        "true"  (string)
*/

/*
    Logical Operator
    &&
    ||
    !
*/

const car = "mercy";

if (car === "bmw" || car === "mercy") {
    console.log("Mobil Jerman");
} else {
    console.log("Mobil Jepang");
}

const usia = 19;
const punyaSIM = true;
const wni = false;

if (usia >= 18 && punyaSIM && wni) {
    console.log("Boleh bawa kendaraan");
} else {
    console.log("Belum boleh bawa kendaraan");
}

const isSunny = true;
const isRaining = !isSunny;

console.log(isSunny);
console.log(isRaining);

/*
    Ternary Operator (shortcut untuk if else condition)
    Condition ? Code block for true : Code block for false;

    As convention, not used for longer if else
*/

const str = "typescript";

if (str === 'javascript') {
    console.log("javascript");
} else {
    console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

console.log(
    str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
)

/*
    Loop statement
    Rangkaian instruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi

    for loop; while loop; do while loop

    for loop
    statement 1: menginisialisasi variable dari looping itu sendiri
    statement 2: mendefine kondisi dari looping tersebut
    statement 3: kode yang dieksekusi di akhir setiap iterasi

    Syntax for loop
    for (statement1; statement2; statement3) {
        Code block;
    }

    Syntax while loop
    while (condition) {
        Code block;
    }

    Syntax do while loop
    do {
        code block;
    } while (condition);

    Break
    break;  Menghentikan loop

    Continue
    Untuk melakukan skip pada loop
    continue;
*/

for (let i = 0; i < 3; i++) {
    console.log("Hello world");
}

let i = 22;

while (i > 20) {
    console.log("Hello world");
    i--;
}

let count = 1;

do {
    console.log(`Ini iterasi ke: ${count}`);
    count++;
} while (count <= 5);

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`Iterasi: ${i}`);
}