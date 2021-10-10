

//question 1
const G = 9.8;
console.log(G);
//G = 10;
//console.log(G)

//question 2
if(true){
    let a = 10
    console.log("\ninside if : ",a);
}

//console.log("\noutside if : ",a)


//question 3
var Order = new Object();
Order = {
id : 123,
title : "Assignment3",
price : 10,
printOrder : function(){console.log("ID ",this.id,"\ntitle",this.title)},
getPrice : function(){console.log("Id :",this.id,"\nPrice : ",this.price)}
};

console.log(Order.id);
console.log(Order.title);
Order.printOrder();
Order.getPrice();


//question 4
let names = ["aniket","uma","vishal","nidhi"];

console.log(names.map(name => ({name,length : name.length})));

//question 5
//a
function add(op1 = 10,op2 = 5){
    sum = op1 + op2;
    return sum;
}

let defsum = add();
console.log(defsum);
//b
function userFriends(username , ...friends){
    console.log("Username :",username,"<\nFriends :",friends);
}

userFriends("aniket","prafull","ashutosh");
//c
function printCapitalNames(){
    for(var name in arguments){
        let temp = arguments[name]
        console.log(temp.toUpperCase());
    }
}
let namess = ["anik","sid","ashu"];
printCapitalNames(...namess);

//question 6

let myName = "Aniket";
let model = "HP pavilion";
let DeskNo = "B-47";

let ticket = {myName,model,DeskNo};

console.log(ticket);

//question 7
//a
let array1 = ["aniket","shubham","nihal","ganehs"];
let [a,b,c,...rest] = array1;
console.log("\n\n",c);
//b
let organization = {
    name1 : "Aniket",
    address : ["city : panvel","pin : 410206"]    
};


organization[Symbol.iterator]= function*(){
    let properties = Object.keys(organization);
    for(let t of properties){
        yield this[t];
    }
}

let [name1:norg, address:adorg] = organization;
console.log(norg[1]);




//question 8
class Account{
    constructor(id,name,balance){
        this.name = name;
        this.id = id;
        this.balance = balance;
        this.getTotalBalance = function(){
            console.log("id :",this.id,"\nname :",this.name,"\nTotal Balance",this.balance)
        }
    }

}

class SavingAccount extends Account{
    constructor(interest,cashcredit,id,name,balance){
        super(id,name,balance);
        this.interest = interest;
        this.cashcredit = cashcredit;
        this.accountBalance=function(){
            this.balance += (cashcredit*interest);
            if(balance==0){return -1;};
        }
    }
}

class CurrentAccount extends Account{
    constructor(interest,cashcredit,id,name,balance){
        super(id,name,balance);
        this.interest = interest;
        this.cashcredit = cashcredit;
        this.accountBalance=function(){
            this.balance += (cashcredit*interest);
            if(balance==0){return -1;};
    }
}

var user1 = new CurrentAccount(0.8,20000,1,"Anik",50000);
user1.accountBalance();
user1.getTotalBalance();
