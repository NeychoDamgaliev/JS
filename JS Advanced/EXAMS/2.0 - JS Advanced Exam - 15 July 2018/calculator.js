class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
           throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}


const assert = require("chai").assert;

describe("Calculator Tests",function () {
    let calculator;
    beforeEach("", function() {
        calculator = new Calculator();
    })
    it("should have expenses property equal to []", function () {
        let result = calculator.expenses;

        assert.deepEqual(result,[]);
    });

    describe("add data method should work with any data", function () {
       it("should add any data to expenses", function () {
           calculator.add([1,2,3]);
           calculator.add({});
           calculator.add(5);
           calculator.add(-5);
           calculator.add(4.21);
           calculator.add(0);

           let result = calculator.expenses;

           assert.deepEqual(result,[[1,2,3],{},5,-5, 4.21, 0]);
       }) 
    });

    describe("divideNums()", function () {
        it("should throw error if no nums in calculator", function () {
            calculator.add([]);
            calculator.add({});

            assert.throw( () => calculator.divideNums());
        });
        it("should return 'Cannot divide by zero' if ZERO element in calculator", function () {
            calculator.add(56);
            calculator.add(2);
            calculator.add(0);
            
            let result = calculator.divideNums();

            assert.equal(result, 'Cannot divide by zero');
        });
        it("should return 5, when 10 and 2 are preset", function () {
            calculator.add(10);
            calculator.add(2);

            let result = calculator.divideNums();
            
            assert.equal(result,5);
        });
        it("should return -2, when 10 and -5 are preset", function () {
            calculator.add(10);
            calculator.add(-5);

            let result = calculator.divideNums();
            
            assert.equal(result,-2);
        });
        it("should return -0.25, when 2 and -8 are preset", function () {
            calculator.add(2.0);
            calculator.add(-8.0);

            let result = calculator.divideNums();
            
            assert.closeTo(result,-0.25,0.01);
        });
        it("should set expenses to result of divideNums()", function () {
            calculator.add(10);
            calculator.add(5);
            calculator.divideNums();
            let result = calculator.expenses;

            assert.equal(result, 2);
        });
    });
    describe("toString()", function () {
        it("shuld return 'empty array' if no elements", function () {
            let result = calculator.toString();

            assert.equal(result, 'empty array');
        })
        it("should return correct result", function () {
            calculator.add([1,2]);
            calculator.add(5);
            calculator.add("Pesho");

            let result = calculator.toString();
            assert.equal(result, '1,2 -> 5 -> Pesho');
        })
    });
    describe("orderBy()", function () {
        it("should return 'empty' if no elements", function () {
            let result = calculator.orderBy();

            assert.equal(result,'empty');
        });
        it("should sort elements if only numbers preset", function () {
            calculator.add(2);
            calculator.add(10);
            calculator.add(-4);
            calculator.add(1,52);

            let result = calculator.orderBy();

            assert.equal(result, '-4, 1, 2, 10');
        });
        it("should order elements, if mixed types preset", function () {
            calculator.add("Pesho");
            calculator.add(12);
            calculator.add([1,2]);
            calculator.add(-2.551);

            let result = calculator.orderBy();

            assert.deepEqual(result, '-2.551, 1,2, 12, Pesho');
        });
    });
})