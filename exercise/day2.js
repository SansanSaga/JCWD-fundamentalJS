// 1. Write a code to convert celcius to fahrenheit

const celcius = 60;

const fahrenheit = celcius / 5 * 9 + 32;

console.log(`Suhu fahrenheit: ${fahrenheit}°F`);

// 2. Write a code to check whether the number is odd or even

const number = -25;
    if (number == 0) {
        console.log("Nol");
    } else if (number % 2 == 0) {
        console.log("Genap");
    } else if (Math.abs(number) % 2 == 1) {
        console.log("Ganjil");
    } else {
        console.log("Not a number");
    }

// 3. Write a code to check whether the number is prime number or not

const numberP = 5;
let counter = 0;

if (numberP > 1) {
    for (let i = 2; i < numberP; i++) {
        if (numberP % i == 0) {
            counter++;
        }
    }
    if (counter != 0) {
        console.log("Bukan Prima");
    } else {
        console.log("Prima");
    }
} else {
    console.log("Bukan Prima");
}

// 4. Write a code to find the sum of the numbers 1 to N

const numberS = -5;
let sum = 0;
let string = "";

if (numberS >= 0) {
    for (let i = 1; i <= numberS; i++) {
        sum += i;
        string = string.concat(i.toString());
        if (i != numberS) {
            string = string.concat(" + ");
        }
        // if (i != numberS) {
        //     string += i + " + ";
        // } else {
        //     string += i + "";
        // }
        //
        // string += i + (i === numberS ? "" : " + ");
    }
    console.log(`Jumlah ${numberS} >> ${string} = ${sum}`);
} else if (numberS < 0) {
    for (let i = 1; i >= numberS; i--) {
        sum += i;
        string = string.concat(i.toString());
        if (i != numberS) {
            string = string.concat(" + ");
        }
        // if (i != numberS) {
        //     string += i + " + ";
        // } else {
        //     string += i + "";
        // }
        //
        // string += i + (i === numberS ? "" : " + ");
    }
    console.log(`Jumlah ${numberS} >> ${string} = ${sum}`);
} else {
    console.log("Not a number");
}

// 5. Write a code to find factorial of a number

const numberF = 6;
let factorial = 1;
let str = "";

if (numberF >= 0) {
    for (let i = 1; i <= numberF; i++) {
        factorial = factorial * i;
        str = str.concat(i.toString());
        if (i != numberF) {
            str = str.concat(" * ");
        }
    }
    console.log(`Faktorial ${numberF} >> ${str} = ${factorial}`);
} else {
    console.log("Undefined");
}

// 6. Write a code to print the first N fibonacci numbers

const numberFi = 15;
let f1 = 0;
let f2 = 1;
let N = undefined;

if (numberFi == 0) {
    console.log(`N: ${f1}`);
} else if (numberFi == 1) {
    console.log(`N: ${f2}`);
} else if (numberFi > 1) {
    for (let i = 2; i <= numberFi; i++) {
        N = f1 + f2;
        f1 = f2;
        f2 = N;
    }
    console.log(`N: ${N}`);
} else {
    console.log("Undefined");
}