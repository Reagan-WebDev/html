class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.03;

const product1 = new Product("SmartWatch", 1000);
const product2 = new Product("Pizza", 10);
const product3 = new Product("trowser", 100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const Total1 = product1.calculateTotal(salesTax);
console.log(`Total Price(with tax): $${Total1.toFixed(2)}`);

const Total2 = product2.calculateTotal(salesTax);
console.log(`Total Price(with tax): $${Total2.toFixed(2)}`);

const Total3 = product3.calculateTotal(salesTax);
console.log(`Total Price(with tax): $${Total3.toFixed(2)}`);