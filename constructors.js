function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {console.log(`I drive the ${this.color} ${this.make} ${this.model}`)}
}
const car1 = new Car("Mazda", "Demio", 2017, "Red");
const car2 = new Car("Nissan", "Note", 2017, "Black");
const car3 = new Car("Honda", "Fit", 2017, "White");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();