const prices = [20, 25, 50, 45, 50];
const marks = [350, 390, 400, 455, 290, 245];
const total = prices.reduce(sum);
const minimum = marks.reduce(getMin);
const maximum = marks.reduce(getMax);
console.log(`$${total.toFixed(2)}`);
console.log(minimum);
console.log(maximum);
function sum(accumulator, element){ 
    return accumulator + element;
}
function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}
function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}