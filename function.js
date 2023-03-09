//find total summ

function getTotalSum(arrOfNumbers) {
  let total = 0;
  for (let i = 0; i < arrOfNumbers.length; i += 1) {
    if (typeof arrOfNumbers[i] != "number") continue;
    total += arrOfNumbers[i];
  }
  return total;
}
let arrOfNumbers = [
  3,
  undefined,
  true,
  12.74,
  678,
  null,
  56,
  "fruit",
  87,
  "dragon",
  90,
  300,
  56,
  "tomato",
  790,
  12,
  6,
];
const totalSum = getTotalSum(arrOfNumbers);
console.log(totalSum);

//array with number
function createArr(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    console.log("Invalid number");
    return null;
  }
  const numbersArr = [firstNumber, secondNumber];
  return numbersArr;
}

//sum

function calculateSum(totalSum) {
  var sum = 0;
  for (var i = 0; i < totalSum.length; i++) {
    sum += totalSum[i];
  }
  return sum;
}
//multiplication

function multiplicateNumbers(totalMul) {
  if (totalMul.length !== 2) {
    console.log("Array must include 2 values");
    return undefined;
  }
  const result = totalMul[0] * totalMul[1];
  return result;
}

//devide

function divideNumbers(totalDev) {
  if (totalDev.length !== 2) {
    console.log("Array must include 2 values");
    return undefined;
  }

  if (totalDev[1] === 0) {
    console.log("Wrong second value. Cann't be devided by zero");
    return undefined;
  }
  const result = totalDev[0] / totalDev[1];
  return result;
}

//substract

function subtractNumbers(totalSub) {
  if (totalSub.length !== 2) {
    console.log("Array must include 2 values");
    return undefined;
  }

  if (totalSub[0] < totalSub[1]) {
    const shouldContinue = confirm("Are you sure that you want to continue?");
    if (!shouldContinue) {
      console.log("Cancel");
      return undefined;
    }
  }
  const result = totalSub[0] - totalSub[1];
  return result;
}

const arr = createArr(25, 30);

//if invalid number
// const arrInValid = createArr("st", 30);
// console.log(arr);
// console.log(arrInValid);

console.log("Sum:", calculateSum(arr));
console.log("Divide:", divideNumbers(arr));
console.log("Subtract:", subtractNumbers(arr));
console.log("Multiplicate:", multiplicateNumbers(arr));
