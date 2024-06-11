// Object

// Cara 1
const user = {};

// Cara 2
const user2 = new Object();

// Properties and methods
// Function yang terdapat di dalam object disebut method
// nama adalah name/key dan "David" adalah value
const user3 = {
    nama: "David",

    greet(nama) {
        console.log(`Hello ${nama}`);
    },
};

console.log(user3.nama);
console.log(user3.greet(user3.nama));

// Add & delete property
const person = {
    name: "Joko",
    age: 20,
};

person.hobby = "Coding";        // Cara add property
delete person.age;              // Cara delete property

console.log(person);

// Accessing value
console.log(person.name);
console.log(person["name"]);

// Optional chaining
// ?
// is a safe way to access nested object properties
// Seperti contoh ketika fetching dari backend, meski dalam milisecond, akan ada delay yang menyebabkan
//      error pada code, dengan optional chaining, akan memberi tahu program bahwa data yang masih
//      kosong tadi akan terisi nantinya

const user4 = {};
console.log(user4.address);
// console.log(user.address.street);
console.log(user4.address?.street);

// Accessing key
const person2 = {
    name: "Aceng",
    age: 90,
};

console.log(Object.keys(person2));
console.log(Object.values(person2));

// For in

for (const key in person2) {
    console.log(key);
    console.log(person2[key]);
    // Kalau memakai for in, access valuenya dengan objName[key], tidak dengan objName.key
}

// Destructuring assignment >> Mengeluarkan property dalam object menjadi sebuah variable
// Destruct object
const {name, age} = person2;

// Menggunakan variabel dengan nama name tidak direkomendasikan!, karena ada penggunaan variabel name lain
console.log(name);
console.log(age);

console.log(person2);

// Destruct array
// destructuring array, variabelnya harus sesuai dengan index

const array = [10, 20];

console.log(array[0]);
console.log(array[1]);

//
const [a, b] = [10, 20];

console.log(a);
console.log(b);

// Spread operator
// Digunakan untuk copy isi object / menggabungkan object
// Apabila ada property dengan nama sama, akan mereplace property tersebut dengan data terakhir

const objOne = {name: "Jacky", age: 22};
const objTwo = {name: "Budi", email: "email@mail.com"};

const result = {...objOne, ...objTwo};

console.log(result);

// Cara mereplace dengan spread operator

const hasil = {...result, email: "newEmail@mail.com"};

console.log(hasil);

// This keyword
// Mengakses property lain di dalam sebuah object

const person5 = {
    firstName: "Aceng",
    lastName: "Racing",

    greet() {
        console.log(`Hello ${this.firstName}`);
    },
};

person5.greet();

// Class
// Template untuk membuat sebuah objek

// Class declaration >> As convention, using PascalCase untuk namanya
class User {
    greeting() {
        console.log("Hello World");
    }
}

// Class expression
const User2 = class {
    greeting() {
        console.log("Hello World");
    }
};

// Create an object from class
const orang = new User();

orang.greeting();

// Constructor
// Menginisialisasi objek/property yang ada di dalam class

class Person {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log(`Hello ${this.name}`);
    }
}

const orang3 = new Person("Aceng");

console.log(orang3.name);
console.log(orang3.greeting());

const orang4 = new Person();

orang4.name = "Budi"

console.log(orang4.greeting());

// Access Modifier >> Public dan private
// Private property hanya bisa diakses didalam class itu sendiri

class Person2 {
    #email;

    constructor(name, email) {
        this.name = name;
        this.#email = email;
    }

    showEmail() {
        console.log(this.#email);
    }
}

const orang5 = new Person2("Budi", "budi@mail.com");

console.log(orang5.name);
console.log(orang5.email);

orang5.showEmail();

// Getter and setter
// Get untuk membaca data
// Set untuk menentukan value didalam objek

const orang2 = {
    firstName: "Ujang",
    lastName: "Racing",

    // Menggunakan getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Menggunakan setter
    set fullName(value) {
        const nama = value.split(" ");
        this.firstName = nama[0];
        this.lastName = nama[1];
    },

    // Menggunakan function biasa
    fullName2(value) {
        const nama = value.split(" ");
        this.firstName = nama[0];
        this.lastName = nama[1];
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(orang2);
console.log(orang2.fullName);
orang2.fullName = "Alice Cooper";

console.log(orang2.fullName2("Aceng Yudi"));

// Encapsulation
// Konsep didalam OOP untuk ngebundle data dalam satu unit

// Inheritance
// Pewarisan dari parent class ke child class. Jadi property dan method dari class parent
// bisa dimiliki sama child class

class Product {
    constructor(name, price) {
        this.productName = name;
        this.price = price;
    }

    readPrice() {
        console.log(this.price);
    }
}

// class Book {
//     constructor(name, price, author) {
//         this.productName = name;
//         this.price = price;
//         this.author = author;
//     }
// }

class Book extends Product {
    constructor(name, price, author) {
        super(name, price);
        this.author = author;
    }
}

const barang = new Book("Cara menjadi coder", 20000, "Aceng");

barang.readPrice();

// instanceof
// Mengecek apakah sebuah objek memiliki hubungan ke class tertentu

class Animal {

}

class Rabbit extends Animal {

}

class Tree {

}

const kelinci = new Rabbit();
console.log(kelinci instanceof Animal);
console.log(kelinci instanceof Rabbit);
console.log(kelinci instanceof Tree);