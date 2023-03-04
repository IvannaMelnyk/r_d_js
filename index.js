//find total summ
let arr = [3,undefined, true, 12.74, 678, null, 56,"fruit", 87, "dragon", 90, 300, 56, "tomato",790, 12, 6]

let total=0

for (let i = 0; i < arr.length; i += 1){
  if (typeof arr[i] != "number")
  continue
  total +=arr[i]
}

console.log("Total sum: ", total)

//smallest and biggest number
let numbers = [3, 678, 56, 87, 90, 300, 56, "orange", 790, 12, 6, "1200"]
let newArr = []

for (let i = 0; i < numbers.length; i += 1){
  if (typeof numbers[i] === "number")
  newArr.push(numbers[i])
}
console.log("New array",newArr)

let smallestNumber = newArr[0]
let biggestNumber = newArr[0]

for (const number of newArr) {
  if (number < smallestNumber) {
    smallestNumber = number
  }
  else if(number > biggestNumber) {
  biggestNumber=number}
}


console.log("Smallest Number: ", smallestNumber)
console.log("Biggest Number: ", biggestNumber)

//create # tree

let lines = 5;
let str = "";
let hash = "#";
for (let i = 0; i < lines; i+=1) {
  str += hash;
  console.log(str);
}

