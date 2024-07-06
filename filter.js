const numbers = [1,2,3,4,5,6,7,8,9,10];
const Odd = numbers.filter(IsOdd);
console.log(Odd)

function IsEven(elememt) {
    return elememt % 2 == 0;
}
function IsOdd(element) {
    return element % 2 != 0;
}