// TASK 2
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        return this.sideLength * this.sides;
    }
}

const square = new Shape("square", 4, 5);
const triangle = new Shape("triangle", 3, 3);

console.log("Square perimeter:", square.calcPerimeter());
console.log("Triangle perimeter:", triangle.calcPerimeter());