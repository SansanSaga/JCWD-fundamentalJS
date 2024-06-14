/*
    Data Structure

    >> Stack
    LIFO = Last in first out
    
    >> Queue
    FIFO = First in first out

    >> Set
    Only unique values

    >> Hash Table / Hash Map
    
*/

class Stack {
    #container;
    #maxSize;
    constructor() {
        this.#container = [];
        this.#maxSize = 10;
    }

    isFull() {
        return this.#container.length >= this.#maxSize;
    }

    isEmpty() {
        return this.#container.length === 0;
    }

    push(element) {
        if (this.isFull()) {
            return "Container penuh";
        }
        this.#container.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Container kosong";
        }
        this.#container.pop();
    }

    showContainer() {
        return this.#container;
    }
}

const dataStack = new Stack();

dataStack.push(1);
dataStack.push(2);
dataStack.push(3);
dataStack.push(4);
dataStack.push(5);

console.log(dataStack.showContainer());

// Queue

class Queue {
    #container;
    constructor() {
        this.#container = [];
    }

    enqueue(element) {
        return this.#container.push(element);
    }

    dequeue()  {
        return this.#container.shift();
    }

    showContainer() {
        return this.#container;
    }
}

const dataQueue = new Queue();

console.log(dataQueue.enqueue(1));
console.log(dataQueue.enqueue(1));
console.log(dataQueue.enqueue(2));

console.log(dataQueue.dequeue());

console.log(dataQueue.showContainer());

// Set

const fruits = ["Apple", "Banana", "Mango", "Apple"];

const resultSet = new Set(fruits);

console.log(resultSet);

// Membuat set

const mySet = new Set();

// Menambah value ke set

mySet.add(1);
mySet.add(2);
mySet.add(1);   // Nilai tidak akan ditambahkan karena sudah ada value yang sama
mySet.add(3);

console.log(mySet);

// Mengecek apakah value terdapat di dalam set
console.log(mySet.has(3));
console.log(mySet.has(4));

// Menghapus value dari set

mySet.delete(2);

console.log(mySet);

// Looping isi set

for (const isi of mySet) {
    console.log(isi);
}

// Menghitung ukuran set

console.log(mySet.size);