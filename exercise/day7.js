// 1. Create a function to check if two objects are equal
const user = {a: 1};
const user2 = {a: 1};

console.log(check(user, user2));

function check(obj1, obj2) {
//     const arr1 = Object.keys(obj1);
//     const arr2 = Object.keys(obj2);
//     let checker = false;

//     if (arr1.length === arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] === arr2[i]) {
//                 let kunci = arr1[i];
//                 console.log(kunci);
//                 if (obj1.kunci === obj2.key) {
//                     console.log(obj1.kunci);
//                     checker = true;
//                 } else {
//                     checker = false;
//                 }
//             } else {
//                 checker = false;
//             }
//         }
//     }

//     return checker;

            // Object.keys(obj1);
            // Object.values(obj1);
            // Object.entries(obj1);

    for (const isi in obj1) {
        if (obj1[isi] === obj2[isi]) {
            return true;
        } else {
            return false;
        }
    }
}

// 2. Create a function to get the intersection of two objects
const inter1 = {a: 1, b: 2};
const inter2 = {a: 1, b: 3};

console.log(intersect(inter1, inter2));

for (const key in inter1) {
    console.log(key);
}

function intersect(obj1, obj2) {
    let inter = {};
    for (const key in obj1) {
        if (obj1[key] === obj2[key]) {
            inter[key] = obj1[key];
        }
    }
    return inter;
}

// 3. Create a function to merge two array of student data and remove duplicate data
const studentData1 = [
    {
        nama: "Student1",
        email: "student1@mail.com",
    },
    {
        nama: "Student2",
        email: "student2@mail.com",
    },
];

const studentData2 = [
    {
        nama: "Student1",
        email: "student1@mail.com",
    },
    {
        nama: "Student3",
        email: "student3@mail.com",
    },
];

combine(studentData1, studentData2);

function combine(arr1, arr2) {
    const arr3 = [];

    arr1.forEach(data => {
        arr3.push(data);
    });

    arr2.forEach(data => {
        if (arr3.includes(data)) {
            arr3.push(data);
        }
    });

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
}

// 4. Create a function that can accept input as an array of objects and switch all values into 
//    property and property into values

const arrSwitch = [{ nama: "David", age: 20,}, { nama: "Evan", age: 19,}];

switchObj(arrSwitch);
console.log(switchVar(arrSwitch, ["nama", "age"]));

function switchObj(arr) {
    let reverse = [];
    arr.forEach((obj) => {
        for (const isi in obj) {
            console.log(isi);
            console.log(obj[isi]);
            reverse = isi;
            console.log(reverse);
        }
    });
}

function switchVar(arr, keys) {
    const objectArray = arr[0];
    keys.forEach((element) => {
        const value = objectArray[element];
        objectArray[value] = element;
        delete objectArray[element];
    });
    return objectArray;
}

// 5. Create a function to find a factorial number using recursion

console.log(recursion(5));

function recursion(num) {
    let sum = 1;

    if (num > 0) {
        sum *= num * recursion(num - 1);
    }

    return sum;
}