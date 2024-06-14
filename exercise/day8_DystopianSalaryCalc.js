class Employee {
    constructor(salary, overSalary) {
        this.salary = salary;
        this.overSalary = overSalary;
        this.workHour = 0;
        this.totalSalary = 0;
    }

    setWorkHour(num) {
        this.workHour = num;
    }

    getSalary() {
        if (this.workHour > 6) {
            this.totalSalary = this.formatCurrency(this.overSalary * this.workHour);
        } else {
            this.totalSalary = this.formatCurrency(this.salary * this.workHour);
        }
        console.log(this.totalSalary);
    }

    formatCurrency(money) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(money);
    }
}

class FulltimeEmployee extends Employee {
    constructor(salary = 100000, overSalary = 75000) {
        super(salary, overSalary);
    }
}

class ParttimeEmployee extends Employee {
    constructor(salary = 50000, overSalary = 30000) {
        super(salary, overSalary);
    }
}

const jessie = new FulltimeEmployee();
const james = new FulltimeEmployee();
const saga = new ParttimeEmployee();

console.log(jessie);
console.log(james);
console.log(saga);

saga.setWorkHour(5);
jessie.setWorkHour(10);
james.setWorkHour(6);

saga.getSalary();
jessie.getSalary();
james.getSalary();

console.log(jessie);
console.log(james);
console.log(saga);