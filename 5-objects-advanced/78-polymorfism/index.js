// Superclass
function BankAccount(agency, acc, balance) {
  this.agency = agency;
  this.acc = acc;
  this.balance = balance;
}

BankAccount.prototype.withdraw = function (amount) {
  if (this.balance < amount) {
    console.log('Insufficient Balance');
    this.checkBalance();
    return;
  }

  this.balance -= amount;
};

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.checkBalance();
};

BankAccount.prototype.checkBalance = function () {
  console.log(
    `Agency/Acc: ${this.agency}/${this.acc}\nBalance: ${this.balance.toFixed(
      2
    )}$`
  );
};

const acc1 = new BankAccount(11, 22, 10);
acc1.deposit(10);
acc1.withdraw(550);
acc1.checkBalance();

function CC(agency, acc, balance, limit) {
  BankAccount.call(this, agency, acc, balance);
  this.limit = limit;
}
CC.prototype = Object.create(BankAccount.prototype);
CC.prototype.constructor = CC;

// we overwrited the withdraw method to a new one -> polymorfism
CC.prototype.withdraw = function (amount) {
  if (amount > this.balance + this.limit) {
    console.log('Insuficient Founds');
    return;
  }

  this.balance -= amount;
  this.checkBalance();
};

console.log('#####################');
const cc1 = new CC(11, 33, 50, 500);
cc1.withdraw(100);
cc1.withdraw(600);
console.log(cc1);
