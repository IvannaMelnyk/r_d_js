let firstNumber;
let secondNumber;

firstNumber = prompt("Enter first number");
secondNumber = prompt("Enter second number");
const totalSum = Number(firstNumber) + Number(secondNumber);
const totalSubstraction = Number(firstNumber) - Number(secondNumber);
const totalMultiplication = Number(firstNumber) * Number(secondNumber);
const totalDeviding = Number(firstNumber) / Number(secondNumber);

if (firstNumber === "" || secondNumber === "")
  alert("Wrong operation. Write a number");
else if (firstNumber < secondNumber) {
  alert(`Addition amount: ${totalSum}`);
  confirm("Are you sure that you want to continue?");
  alert(`Substraction amount: ${totalSubstraction}`);
  alert(`Multiplication amount: ${totalMultiplication}`);
  alert(`Deviding amount: ${totalDeviding}`);
} else if (secondNumber == 0) {
  alert(`Addition amount: ${totalSum}`);
  alert(`Substraction amount: ${totalSubstraction}`);
  alert(`Multiplication amount: ${totalMultiplication}`);
  alert(`Deviding amount: wrong value`);
} else {
  alert(`Addition amount: ${totalSum}`);
  alert(`Substraction amount: ${totalSubstraction}`);
  alert(`Multiplication amount: ${totalMultiplication}`);
  alert(`Deviding amount: ${totalDeviding}`);
}
