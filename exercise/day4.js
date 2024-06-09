// 1. Create a function that can create a triangle pattern according to the height we provide
const height = 4;

triangle(height);

function triangle (height) {
    let sum = 0;
    for (let i = 1; i <= height; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            sum++;
            str += " " + sum;
        }
        console.log(str);
    }
}

// 2. Create a function that can loop the number of times according to the input we provide, and will
//    replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiple of 3 and 5 with
//    "FizzBuzz".

const N = 15;

fizzBuzz(N);

function fizzBuzz(num) {
    for (let i = 1; i <= N; i++) {
        let output = "";
        if (i % 3 == 0 || i % 5 == 0) {
            if (i % 3 == 0) {
                output += "Fizz";
            }
            if (i % 5 == 0) {
                output += "Buzz";
            }
        } else {
            output += i;
        }
        console.log(output);
    }
}

// 3. Create a function to calculate Body Mass Index (BMI)
// Formula: BMI = weight(kg) / (height(meter)) ** 2

const weight = 75;
const height3 = 1.66;

console.log(hasilBMI(weight, height3));

function hasilBMI(weight, height) {
    const result = weight / (height ** 2);

    if (result < 18.5) {
        return "Underweight";
    } else if (result < 25) {
        return "Ideal";
    } else if (result < 30) {
        return "Overweight";
    } else if (result < 40) {
        return "Very Overweight";
    } else {
        return "Obesity";
    }
}

// 4. Write a function to remove all odd numbers in an array and return a new array that contains
// even numbers only

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = evenNum(arr);

console.log(result4);

function evenNum(array) {
    let tempArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            tempArr.push(array[i]);
        }
    }
    return tempArr;
}

/////////////// Other ways

//

// 5. Write a function to split a string and convert it into an array of words

const str5 = "Hello World";

const result5 = splitter(str5);

console.log(result5);

function splitter(str) {
    return str.split(" ");
}

////////////// Other ways

function split2(str) {
    let arr = [];
}