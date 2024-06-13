// class Student {
//     constructor(nama, email, dob, score) {
//         this.nama = nama;
//         this.email = email;
//         this.dob = dob;
//         this.score = score;
//     }
// }

const studentData = [
    {
        nama: "Alice",
        email: "alice@example.com",
        age: 20,
        score: 85,
    },
    {
        nama: "Bob",
        email: "bob@example.com",
        age: 21,
        score: 92,
    },
    {
        nama: "Charlie",
        email: "charlie@example.com",
        age: 19,
        score: 78,
    },
];

ex1(studentData);

function ex1(arr) {
    let highest = arr[0].score;
    let lowest = arr[0].score;
    let oldest = arr[0].age;
    let youngest = arr[0].age;
    let sum = 0;
    let sumAge = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (highest < arr[i].score) {
            highest = arr[i].score;
        }

        if (lowest > arr[i].score) {
            lowest = arr[i].score;
        }

        if (oldest < arr[i].age) {
            oldest = arr[i].age;
        }

        if (youngest > arr[i].age) {
            youngest = arr[i].age;
        }

        sumAge += arr[i].age;

        sum += arr[i].score;
    }

    const average = sum / arr.length;
    const averageAge = sumAge / arr.length;

    console.log(`Rata-rata nilai: ${average}`);
    console.log(`Rata-rata usia: ${averageAge}`);

    for (let i = 0; i < arr.length; i++) {
        if (highest === arr[i].score) {
            console.log(`${arr[i].nama} has the highest score with ${arr[i].score}.`);
        }
        if (lowest === arr[i].score) {
            console.log(`${arr[i].nama} has the lowest score with ${arr[i].score}`);
        }
        if (oldest === arr[i].age) {
            console.log(`${arr[i].nama} is the oldest at ${arr[i].age}`);
        }
        if (youngest === arr[i].age) {
            console.log(`${arr[i].nama} is the youngest at ${arr[i].age}`);
        }
    }
}

// Exercise 2
// Create a program to create transaction
class Product {
    constructor(nama, price, qty = 0) {
        this.nama = nama;
        this.price = price;
        this.qty = qty;
    }
}

class Transaction extends Product {
    constructor(nama = 0, price = 0) {
        super(nama, price);
        this.total = 0;
        this.data = [];
    }

    addToCart(produk, jum) {
        let check = true;

        this.data.forEach(barang => {
            if (barang.nama === produk.nama) {
                barang.qty += jum;
                check = false;
            }
        })
        if (check === true) {
            this.data.push(produk);
        }
    }

    showTotal() {

    }

    checkout() {

    }
}

const test = new Transaction();
const nastel = new Product("Nasi telur", 8000)

test.addToCart(nastel,3);

console.log(test);