// TASK 3
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

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength);
        this.name = "square";
        this.sides = 4;
        this.sideLength = sideLength;
    }
    calcArea() {
        return this.sideLength * this.sideLength;
    }
}