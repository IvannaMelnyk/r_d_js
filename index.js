let firstNumber;
let secondNumber;

firstNumber = prompt("Enter first number");
secondNumber = prompt("Enter second number");
const totalSum = Number(firstNumber) + Number(secondNumber);
const totalSubstraction = Number(firstNumber) - Number(secondNumber);
const totalMultiplication = Number(firstNumber) * Number(secondNumber);
const totalDeviding = Number(firstNumber) / Number(secondNumber);

alert(`Total addition amount: ${totalSum}`);
alert(`Total substraction amount: ${totalSubstraction}`);
alert(`Total multiplication amount: ${totalMultiplication}`);
alert(`Total Deviding amount: ${totalDeviding}`);
