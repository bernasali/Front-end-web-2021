//task1
var person = {
    _salary: 1000,
    getSecretSalaryInfo: function() {
        return this._salary;
    }
};

var stoleSalaryInfo = person.getSecretSalaryInfo;

console.log(person.getSecretSalaryInfo()); //принтира 1000
console.log(stoleSalaryInfo()); //принтира undefined


//task2
class Person {
    constructor(name) {
        this.name = name;
        this.planet = 'Земя';
    }
    printPerson = function() {
        console.log(`Здравей ${this.name}от пранетата ${this.planet}`);
    }
};

var p1 = new Person("FMI");
p1.printPerson();


//task3
class Item {
    constructor(name, discount) {
        this.name = name;
        this.discount = discount;
        //this.price=price;
    }
    calculatePrice = function(price) {
        return this.price - (this.price * (this.discount / 100));
    }
}
Item.prototype.price = 1000;

var it = new Item("item", 50);

console.log(it.calculatePrice());

//task4

function privatePerson() {
    let _salary = 1000;
    this.getSecretSalaryInfo = function() {
        return _salary;
    }

}

let privateP = new privatePerson();
console.log(privateP.getSecretSalaryInfo());


//task5
class PaymentMethod {
    getAmount() {
        return "Your amount in the account is: ";
    }
}

class CashMethod extends PaymentMethod {
    constructor() {
        super();

        let amount = 0;

        this.getAmount = function() {
            return amount;
        }

        this.setAmount = function(newAmount) {
            amount = newAmount;
        }
    }

    addToAmount(value) {
        this.setAmount(this.getAmount() + value);
        return this;
    }

    reduceFromAmount(value) {
        this.setAmount(this.getAmount() - value);
        return this;
    }

    getAmount() {
        return super.getAmount() + this.getAmount();
    }

}

class CreditMethod extends PaymentMethod {
    constructor() {
        super();

        let amount = 0;

        this.getAmount = function() {
            return amount;
        }

        this.setAmount = function(newAmount) {
            amount = newAmount;
        }
    }

    addToAmount(value) {
        this.setAmount(this.getAmount() + (9 / 10) * value);
        return this;
    }

    reduceFromAmount(value) {
        this.setAmount(this.getAmount() - value);
        return this;
    }

    getAmount() {
        return super.getAmount() + this.getAmount();
    }
}

const cashAccount = new CashMethod();
cashAccount.getAmount(); // returns “Your amount in the account is: 0”
cashAccount.addToAmount(100); // returns cashAccount instance (useful for method chaining)
cashAccount.addToAmount(20).addToAmount(30).reduceFromAmount(10); // returns cashAccount instance (useful for method chaining)
console.log(cashAccount.getAmount()); // returns “Your amount in the account is: 140”

const creditAccount = new CreditMethod();
creditAccount.addToAmount(100); // returns creditAccount instance (useful for method chaining)
console.log(creditAccount.getAmount()); // returns “Your amount in the account is: 90”;