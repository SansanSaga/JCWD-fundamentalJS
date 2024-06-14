/* 
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085244455555"
    output = "(6285)-2444-55555"
*/

console.log(phoneNumber("085244455555"));

function phoneNumber(input) {
    if (typeof(input) !== "string" || input.length !== 12 || input[0] !== "0" || isNaN(Number(input))) {
        return "Invalid Phone Number";
    }

    const arr = [];

    for (let i = 1; i < input.length; i++) {
        arr.push(input[i]);
    }

    arr.unshift("(62");
    arr.splice(3, 0, ")-");
    arr.splice(8, 0, "-");

    return arr.join("");
}

/* 
    You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
    you can perform operations such as adding customers to the queue, calling the next customer, and 
    counting the number of customers in the queue.

   constructor:
   - this.queue

   method : 
   - enqueue : menambahkan value baru dalam antrian
   - dequeue : menghilangkan value paling depan dalam antrian
   - size : melihat jumlah antrian saat ini
*/

class BankQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(customer) {
        this.queue.push(customer);
    }

    dequeue() {
        const lanjut = this.queue.shift();
        return `Panggilan untuk ${lanjut}`
    }

    size() {
        return this.queue.length;
    }
}

const program = new BankQueue();

console.log(program.size());

program.enqueue("Aceng");
program.enqueue("Budi");
program.enqueue("Chandra");

console.log(program.size());
console.log(program.queue);

console.log(program.dequeue());

console.log(program.size());
console.log(program.queue);

/* 
    You are given a JavaScript class called Train that simulates a train's passenger management system. 
    The Train class has the following methods and properties:

    - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
    capacity of 10 passengers.
    - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
    and false otherwise.
    - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
    train is empty and false otherwise.
    - showPassenger(): Returns an object that contains the list of passengers on the train and 
    the remaining available seats.
    - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
    success" if the passenger is successfully added, "train full" if the train is at full capacity, 
    and "passenger already exists" if the passenger is already on the train.
    - passengerOut(name): Removes a passenger with the given name from the train. It returns 
    "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
    if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
    "passenger not found" if the passenger with the given name is not found on the train.
*/

class Train {
    constructor() {
        this.passenger = ["Masinis"];
        this.maxCap = 10;
    }

    isFull() {
        return this.passenger.length === this.maxCap;
    }

    isEmpty() {
        return this.passenger.length === 1;
    }

    showPassenger() {
        return {list: this.passenger, sisa: (this.maxCap - this.passenger.length)}
    }

    passengerIn(nama) {
        if (this.isFull()) {
            return "Train is full";
        }
        
        if (this.passenger.includes(nama)) {
            return `${nama} already exist`;
        }

        this.passenger.push(nama);

        return `${nama} added to passenger list`;
    }

    passengerOut(nama) {
        if (nama === "Masinis") {
            return "Cannot remove masinis";
        }

        if (this.isEmpty()) {
            return "Train is empty";
        }

        if (this.passenger.includes(nama)) {
            this.passenger.splice(this.passenger.findIndex(data => nama === data), 1);
            return `${nama} successfully removed from passenger list`;
        }

        return `${nama} tidak terdapat dalam passenger list`;
    }
}

const kai = new Train();

console.log(kai.showPassenger());
console.log(kai.passengerOut("Masinis"));
console.log(kai.passengerOut("Siapapun"));
console.log(kai.passengerIn("Masinis"));
console.log(kai.showPassenger());
console.log(kai.passengerIn("Aceng"));
console.log(kai.passengerIn("Bunga"));
console.log(kai.passengerIn("Chandra"));
console.log(kai.showPassenger());
console.log(kai.passengerOut("Aceng"));
console.log(kai.showPassenger());