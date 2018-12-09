function Rectangle(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.calcArea = function () {
        return this.width * this.height;
    }
};

// let rect = new Rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());


class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

// let person = new Person("Peter", "Marinov");
// console.log(person.toString());


function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let result = [];
    result.push(new Person('Maria','Petrova',22,'mp@yahoo.com'));
    result.push(new Person('SoftUni'));
    result.push(new Person('Stephan','Nikolov',25));
    result.push(new Person('Peter','Kolev',24,'ptr@gmail.com'));
    return result;
}

// let c = new Circle(2);
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);
// c.diameter = 1.6;
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);


class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static distance (p1,p2) {
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;

        return Math.sqrt( dx * dx + dy * dy);
    }
}

let p1 = new Point( 5 , 5 );
let p2 = new Point( 9 , 8 );
console.log(Point.distance(p1,p2));
