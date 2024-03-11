class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("insufficient funds, withdrawal failed.");
    } else {
      this.balance -= amount;
      console.log(`withdraw #${amount}. New balance: ${this.balance}`);
    }
  }

  checkBalance() {
    console.log(`Account balance for ${this.ownerName}: #${this.balance}`);
    return this.balance;
  }

  monthlyInterest() {
    throw new Error("This method should be implemented in subject");
  }
}

//first subclass
class savingsAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, interestRate) {
    super(accountNumber, ownerName, balance);
    this.interestRate = interestRate;
  }
  monthlyInterest() {
    const earnedInterest = (this.balance * this.interestRate) / 12;
    this.balance += earnedInterest;
    console.log(
      `monthly interest earned ${earnedInterest}. New balance ${this.balance}`
    );
  }
}

//second subclass
class currentAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, monthlyFixedFee) {
    super(accountNumber, ownerName, balance);
    this.monthlyFixedFee = monthlyFixedFee;
  }

  monthlyInterest() {
    const fixedFee = (this.balance - this.monthlyFixedFee) / 12;
    this.balance -= fixedFee;
    console.log(
      `monthly fee deducted ${fixedFee}. New balance ${this.balance}`
    );
  }
}

// Instances

const regularAccount = new BankAccount(1023456789, "Chioma", 4000);
regularAccount.deposit(1000);
regularAccount.withdraw(600);
regularAccount.checkBalance();

const SavingsAccount = new savingsAccount(1123456789, "chioma", 5000, 5);
SavingsAccount.deposit(2000);
SavingsAccount.monthlyInterest();
SavingsAccount.checkBalance();

const CurrentAccount = new currentAccount(1223456789, "chioma", 6500, 1);
CurrentAccount.deposit(1000);
CurrentAccount.monthlyInterest();
CurrentAccount.checkBalance();
