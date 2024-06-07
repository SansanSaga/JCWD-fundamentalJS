// 1. Write a code to display the multiplication table of a given integer
const integer = 9;
const tableSize = 10;

for (let i = 1; i <= tableSize; i++) {
    console.log(`${integer} x ${i} = ` + integer * i);
}

// 2. Write a code to check whether a string is a palindrome or not
const pal = "Madam".toLowerCase();
const palMid = Math.floor(pal.length / 2);
let pal1 = "";
let pal2 = "";

if (pal.length % 2 != 0) {
    for (let i = 0; i < palMid; i++) {
        pal1 += pal.charAt(i);
    }
    for (let i = (pal.length - 1); i > palMid; i--) {
        pal2 += pal.charAt(i);
    }
    if (pal1 === pal2) {
        console.log(`${pal} = Palindrom`);
    } else {
        console.log(`${pal} = Bukan palindrom`);
    }
} else {
    for (let i = 0; i < palMid; i++) {
        pal1 += pal.charAt(i);
    }
    for (let i = (pal.length - 1); i > (palMid - 1); i--) {
        pal2 += pal.charAt(i);
    }
    if (pal1 === pal2) {
        console.log(`${pal} = Palindrom`);
    } else {
        console.log(`${pal} = Bukan palindrom`);
    }
}

console.log(`${pal1} ${pal2}`);

// 3. Write a code to convert centimeter to kilometer
const cm = 100000;

console.log(`${cm} cm = ${cm / 100000} km`);

// 4. Write a code to format number as currency (IDR)
const number = 4563;
let num = number;
let repeat = 0;
let money = "";

while (Math.floor(num) > 999) {
    num = num / 1000;
    repeat++;
}

console.log(num);
console.log(repeat);

while (repeat > 0) {
    money += num.toFixed() + ".";
    num = num * 1000 % 1000;
    console.log(num);
    repeat--;
}

console.log(`Rp. ${money},00)`);

// 5. Write a code to remove the first occurence of a given "search string" from a string

/*
            const search = "Hel";
            let str = "Hello world";
            let hasil = null;
            let buffer = "";

            for (let i = 0; i < str.length; i++) {
                if (buffer.length < search.length) {
                    buffer += str.charAt(i);
                } else {
                    if (buffer === search) {
                        hasil = str.substring(0, (i - search.length)) + str.substring((i, str.length));
                        console.log(hasil);
                    } else {
                        
                    }
                }
            }
*/

// 6. Write a code to capitalize the first letter of each word in a string

// 7. Write a code to reverse a string

// 8. Write a code to swap the case of each characters from a string

// 9. Write a code to find the largest of two given integers
const num1 = 42;
const num2 = 270;

if (num1 > num2) {
    console.log(`${num1} is bigger`);
} else {
    console.log(`${num2} is bigger`);
}

// 10. Write a conditional statement to sort three numbers
const numb1 = 42;
const numb2 = 27;
const numb3 = 18;
let big = undefined;

if (numb1 > numb2 && numb1 > numb3) {
    if (numb2 > numb3) {
        console.log(`${numb1} > ${numb2} > ${numb3}`);
    } else {
        console.log(`${numb1} > ${numb3} > ${numb2}`);
    }
}

// 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for other data types

// 12. Write a code to change every letter a into * from a string of input