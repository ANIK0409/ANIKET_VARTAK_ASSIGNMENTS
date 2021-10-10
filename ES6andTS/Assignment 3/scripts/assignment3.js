//question 1
var x, y;
var pro1 = new Promise(function (resolve) {
    resolve(x = 100);
});
var pro2 = new Promise(function (resolve) {
    resolve(y = 200);
});
Promise.all([pro1, pro2]).then(values => { console.log(`${x} + ${y} =${x + y}`); });
//question 2
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
class SavingsAccount extends Account {
    constructor(id, name, balance, interest) {
        super(id, name, balance);
        this.totalBalance = () => {
            this.balance += this.interest;
            console.log(`The total balance of ${this.name} is ${this.balance}`);
        };
        this.interest = interest;
    }
}
class CurrentAccount extends Account {
    constructor(id, name, balance, cashCredit) {
        super(id, name, balance);
        this.totalBalance = () => {
            this.balance += this.cashCredit;
            console.log(`The total balance of ${this.name} is ${this.balance}`);
        };
        this.cashCredit = cashCredit;
    }
}
let S1 = new SavingsAccount(1011, 'Bruce Banner', 50500, 4500);
let S2 = new CurrentAccount(1012, 'Tony stark', 100550, 9800);
S1.totalBalance();
S2.totalBalance();
;
let circle = {
    area: 314,
};
let employee = {
    name: "Nick Furey",
    designation: "Director of S.H.I.E.L.D.",
    id: 10001,
};
function printAll(circle, employee) {
    console.log(`The area of circle is ${circle.area}`);
    console.log(`\nThe name of the employee is ${employee.name}
                \nDesignation : ${employee.designation}
                \nemployee id : ${employee.id}`);
}
printAll(circle, employee);
//# sourceMappingURL=assignment3.js.map