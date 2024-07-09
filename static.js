class MathFor {
    static PI = 3.14;

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius) {
        return this.PI * radius * radius;
    }
}
console.log(MathFor.PI);
console.log(MathFor.getCircumference(7));
console.log(MathFor.getArea(7));