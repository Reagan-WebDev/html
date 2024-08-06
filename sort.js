const cars = ["Nissan", "Toyota", "Suzuki", "Mercedes", "Mazda", "Land Rover", "Chevrolet", "Jeep", "Isuzu", "Honda"];
let numbers = [8, 4, 1, 20, 10, 5, 3, 7, 70, 9, 2, 6];
cars.sort();
numbers.sort((a, b) => a - b);
console.log(cars);
console.log(numbers);