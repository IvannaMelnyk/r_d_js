//1. fumction to check if an Object is Empty
let userDetails = {
  name: "New Student",
  age: 18
};

let myEmptyObj = {};

const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0
}

console.log("Is Empty: ",isObjectEmpty(userDetails)); 
console.log("Is Empty: ", isObjectEmpty(myEmptyObj));

//2.create user object

let user = {
  name: "New Student",
    age: 18,
    sayHello(user){
        console.log(`Привіт, я ${this.name}, мені ${this.age} років`)
    }

}
user.sayHello()

//3.create calculator object

const calculate = {
  firstNumber:null,
  secondNumber: null,
  
  ask() {
  this.firstNumber = +prompt("Enter first number");
  this.secondNumber = +prompt("Enter second number");  
  if (typeof this.firstNumber !== "number" || typeof this.secondNumber !== "number") {
    console.log("Invalid number");
    return null;
  }
  const numbersArr = [this.firstNumber, this.secondNumber];
  return numbersArr
    },
    sum() {
  const result = this.firstNumber + this.secondNumber;
  return result;
    },
    mul() {
  const result = this.firstNumber * this.secondNumber;
  return result;
    }

}
calculate.ask()
console.log("Sum: ", calculate.sum())
console.log("Mul: ",calculate.mul())
