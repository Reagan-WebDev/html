const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = numbers.map(function(element){
    return Math.pow(element, 2)
});
console.log(squares);

const sum = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(sum);
const maximum = numbers.reduce(function(accumulator, element){
    return Math.max(accumulator, element)
});
console.log(maximum);
const EvenNums = numbers.filter(function(element){
    return element % 2 == 0;
});
console.log(EvenNums);
const OddNums = numbers.filter(function(element){
    return element % 2 != 0
});
console.log(OddNums);