// Exercise day 5
// 1. Write a function to get the lowest, highest, and average value in the array
//    (with and without sort function)

const arr = [12, 5, 23, 18, 4, 45, 32];

console.log(lowest(arr, 1));
console.log(highest(arr));
console.log(average(arr));

console.log(lowestSort(arr));
console.log(highestSort(arr));

function lowest(arr, num) {
    let low = arr[0];

    if (num === 1) {
        for (let i = 1; i < arr.length; i++) {
            if (low > arr[i]) {
                low = arr[i];
            }
        }
    } else if (num === 2) {
        for (let i = 1; i < arr.length; i++) {
            if (low < arr[i]) {
                low = arr[i];
            }
        }
    }

    return low;
}

function highest(arr) {
    let high = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (high < arr[i]) {
            high = arr[i];
        }
    }
    
    return high;
}

function average(arr) {
    let sum = 0;

    arr.forEach(num => {
        sum += num;
    });

    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }

    return sum / arr.length;
}

function lowestSort(arr) {
    arr.sort((a, b) => a - b);
    return arr[0];
}

function highestSort(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}

function sort(arr) {

}

// 2. Write a function that takes an array of words and return a string by concatenating the words in
//    the array separated by commas and -the last word- by an 'and'.

const arr2 = ["Apple", "Banana", "Cherry", "Date"];

console.log(conc(arr2));

function conc(arr) {
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += "and " + arr2[i];
        } else {
            str += arr2[i] + ", ";
        }
    }

    return str;
}

// 3. Write a function to split a string and convert it into an array of words
const str3 = "Hello World";

console.log(splitter(str3));

function splitter(str) {
    let arr = [];
    let temp = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            arr.push(temp);
            temp = "";
        } else {
            temp += str[i];
        }
    }

    if (str[str.length - 1] != " ") {
        arr.push(temp);
    }

    return arr;
}

//
console.log(splitter2(str3));

function splitter2(str) {
    let arr = str.split(" ");

    return arr;
}

// 4. Write a function to calculate each element in the same position from two arrays of integers.
//    Assume both arrays are of the same length.
const arr41 = [1, 2, 3];
const arr42 = [3, 2, 1];

console.log(sumNum(arr41, arr42));

function sumNum(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3[i] = arr1[i] + arr2[i];
    }

    return arr3;
}

// 5. Write a function that adds an element to the end of an array. However, the element should only
//    be added if it is not already in the array.

const arr5 = [1, 2, 3, 4];

addUnique(arr5, 4);
addUnique(arr5, 7);

console.log(arr5);

function addUnique(arr, num) {
    if (!arr.includes(num)) {
        arr.push(num)
    }
}

//

// 6. Write a function to remove all odd numbers in an array and return a new array that contains
//    even numbers only.

const number = [1, 2, 3, 4, 5, 6];

console.log(evenOnly(number));
console.log(evenOnly2(number));

function evenOnly(arr) {
    const arrFilter = arr.filter(num => num % 2 == 0);

    return arrFilter;
}

function evenOnly2(arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            tempArr.push(arr[i]);
        }
    }

    return tempArr;
}

// 7. Write a function to insert multiple given integer (not an array) to an array and have a maximum
// size input. The array can only have a maximum size from a given input. (If the maximum size of the
// given input is 5 then the array can only contain 5 elements.)

const maxSize = 6;

console.log(maxArray(maxSize, 5, 10, 24, 3, 6, 7, 8));
console.log(maxArray2(maxSize, 5, 10, 24, 3, 6, 7, 8));


function maxArray(num, ...manyMoreArgs) {
    let arr = [];
    arr.push(...manyMoreArgs);

    while (arr.length > num) {
        arr.pop();
    }

    return arr;
}

/// Pakai slice
function maxArray2(num, ...manyMoreArgs) {
    let newArray = manyMoreArgs.slice(0, num);
    return newArray;
}

// 8. Write a function that will combine 2 given array into one array

const arr81 = [1, 2, 3];
const arr82 = [4, 5, 6];

console.log(combine(arr81, arr82));
console.log(combine2(arr81, arr82));

function combine(arr1, arr2) {
    return arr81.concat(arr82);
}

function combine2(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1[arr1.length] = arr2[i];
    }
    
    return arr1;
}

// 9. Write a function to find duplicate values in an array 
const arr91 = [1, 2, 2, 2, 3, 3, 4, 5, 5];

console.log(dupe(arr91));

function dupe(arr) {
    let arrDupe = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        if (!arrDupe.includes(arr[i])) {
            if (arr[i] === arr[i + 1]) {
                arrDupe.push(arr[i]);
            }
        }
    }

    return arrDupe;
}

// 10. Write a function to find the differences in 2 given array
const arr101 = [1, 2, 3, 4, 5];
const arr102 = [3, 4, 5, 6, 7];

console.log(diff(arr101, arr102));

// function diff(arr1, arr2) {
//     return arr1.filter(num => {
//         for (let num2 of arr2) {
//             if (num != num2) {
//                 return num;
//             }
//         }
//     });
// }

function diff(arr1, arr2) {
    const arrDiff = [];

    arr1.forEach(num => {
        if (!arr2.includes(num)) {
            arrDiff.push(num);
        }
    });

    arr2.forEach(num => {
        if (!arr1.includes(num)) {
            arrDiff.push(num);
        }
    });

    return arrDiff;
}

// 11. Based on the array below write a function that will return primitive data types only.
const arr111 = [1, [], undefined, {}, "String", {}, []];


// Using below function won't count undefined;
console.log(prim(arr111));

function prim(arr) {
    return arr.filter(type => {
        if (typeof type != "object" && typeof type != "function") {
            return type;
        }
    });
}

// 12. Write a function from a given array of numbers and return the second smallest number
const arr121 = [5, 3, 1, 7, 2, 6];

console.log(secondSmallest(arr121));

function secondSmallest(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < (arr.length - 1); i++) {
        if (arr[i] != arr[i + 1]) {
            return arr[i + 1];
        }
    }

    return arr[0];
}

// 13. Write a function from a given array of mixed data types and return the sum of all the number
const arr131 = ["3", 1, "String", null, false, undefined, 2];

console.log(sumOfNumber(arr131));

function sumOfNumber(arr) {
    let sum = 0;

    const num = arr.filter(type => typeof type === "number")
    
    num.forEach(angka => {
        sum += angka;
    });

    return sum;
}

// 14. Write a function from the below array of number that will return sum of duplicate values.
const arr141 = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function dupeSum(arr) {
    let dupe = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {

    }
}

// 15. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function 
//     will randomly pick between rock, paper, or scissor.

const randomizer = Math.floor(Math.random() * 3);

const stringPlayer = "Rock".toLowerCase();
const stringCom = stringComp(randomizer);

function stringComp(num) {
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRPS(player, com) {
    
}
