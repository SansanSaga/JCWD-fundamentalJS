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

test(studentData);

function test(arr) {
    let highest = arr[0].age;
    let lowest = arr[0].score;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (highest < arr[i].age) {
            highest = arr[i].age;
        }

        if (lowest > arr[i].score) {
            lowest = arr[i].score;
        }

        sum += arr[i].score;
    }

    console.log(sum/arr.length);
    console.log(`Tertinggi sekarang adalah: ${highest}`);
    console.log(`Terendah sekarang adalah: ${lowest}}`);
}

function tertinggi(arr) {
    let highest = arr[0].age;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (highest < arr[i].age) {
            highest = arr[i].age;
        }

        if (lowest > arr[i].score) {
            lowest = arr[i].score;
        }

        sum += arr[i].score;
    }
}