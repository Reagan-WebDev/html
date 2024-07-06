const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);
const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);
const sum = numbers.reduce((accumulator, element) => accumulator + element);
console.log(sum);
const EvenNums = numbers.filter((element) => element % 2 === 0);
console.log(EvenNums);
const OddNums = numbers.filter((element) => element % 2 !== 0);
console.log(OddNums);