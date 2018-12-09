let assert = require('chai').assert;
let expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}



describe('isOddOrEven tests', function(){
    it("should return UNDEFINED if input is NOT A STRING", function () {
        let input;
        let result;

        input = {};
        result = isOddOrEven(input);
        assert.equal(result,undefined);


        input = [];
        result = isOddOrEven(input);
        assert.equal(result,undefined);

        
        result = isOddOrEven(undefined);
        assert.equal(result,undefined);

        input = NaN;
        result = isOddOrEven(input);
        assert.equal(result,undefined);

        input = 5;
        result = isOddOrEven(input);
        assert.equal(result,undefined);

    });
    it("should return EVEN with even length string", function() {
        let input = "PESH";
        let result = isOddOrEven(input);
        assert.equal(result,'even');
    });
    it("should return ODD with odd length string", function() {
        let input = "PESHO";
        let result = isOddOrEven(input);
        assert.equal(result,'odd');
    });
});

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
let res = lookupChar("",0);

describe("Char lookup",function () {
    it("should return UNDEFINED if input is NOT A STRING", function () {
        let input;
        let result;

        input = {};
        result = lookupChar(input,0);
        assert.equal(result,undefined);


        input = [];
        result = lookupChar(input,0);
        assert.equal(result,undefined);

        
        result = lookupChar(undefined,0);
        assert.equal(result,undefined);

        input = NaN;
        result = lookupChar(input,0);
        assert.equal(result,undefined);

        input = 5;
        result = lookupChar(input,0);
        assert.equal(result,undefined);
    });
    it("should return UNDEFINED if index is NOT A INT", function () {
        let input = "Pesho";
        let index;
        let result;

        index = {};
        result = lookupChar(input,index);
        assert.equal(result,undefined);


        index = [];
        result = lookupChar(input,index);
        assert.equal(result,undefined);

        index = undefined;
        result = lookupChar(input,index);
        assert.equal(result,undefined);

        index = NaN;
        result = lookupChar(input,index);
        assert.equal(result,undefined);

        index = "";
        result = lookupChar(input,index);
        assert.equal(result,undefined);
    });
    it("should return UNDEFINED if input is not a String and index is NOT A INT", function () {
        let input = {};
        let index = "";
        let result;

        result = lookupChar(input,index);
        assert.equal(result,undefined);
    });
    it("should return Incorrect Index if index out of bound or Empty String", function() {
        let input;
        let index;
        let result;
        input = "Pesho";
        index = -1;
        result = lookupChar(input,index);
        assert.equal(result,"Incorrect index");

        index = 5;
        result = lookupChar(input,index);
        assert.equal(result,"Incorrect index");

        
        index = 6;
        result = lookupChar(input,index);
        assert.equal(result,"Incorrect index");

        index = 0;
        input = "";
        result = lookupChar(input,index);
        assert.equal(result,"Incorrect index");
    });
    it("should return P from Pesho at index 0", function() {
        let input = "Pesho";
        let index = 0;
        let result = lookupChar(input,index);
        assert.equal(result,"P");

        input = "Pesho";
        index = 3;
        result = lookupChar(input,index);
        assert.equal(result,"h");
    });
    it("should return UNDEFINED from Pesho at index FLOAT", function() {
        let input = "Pesho";
        let index = 1.1;
        let result = lookupChar(input,index);
        assert.equal(result,undefined);
    });
});


let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

// let asd = mathEnforcer.addFive(5);
// console.log(asd);

describe("Math Enforcer tests...", function() {
    it("Test not a number inputs returns undefined",function() {
        let input;
        let result;
        
        input = {};
        result = mathEnforcer.addFive(input);
        assert.equal(result,undefined);

        result = mathEnforcer.subtractTen(input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,1);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(1,input);
        assert.equal(result,undefined);


        input = [];
        result = mathEnforcer.addFive(input);
        assert.equal(result,undefined);

        result = mathEnforcer.subtractTen(input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,1);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(1,input);
        assert.equal(result,undefined);


        input = "";
        result = mathEnforcer.addFive(input);
        assert.equal(result,undefined);

        result = mathEnforcer.subtractTen(input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,1);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(1,input);
        assert.equal(result,undefined);


        input = NaN;
        result = mathEnforcer.addFive(input);
        assert.isNaN(result);

        result = mathEnforcer.subtractTen(input);
        assert.isNaN(result);

        result = mathEnforcer.sum(input,input);
        assert.isNaN(result);

        result = mathEnforcer.sum(input,1);
        assert.isNaN(result);

        result = mathEnforcer.sum(1,input);
        assert.isNaN(result);


        input = null;
        result = mathEnforcer.addFive(input);
        assert.equal(result,undefined);

        result = mathEnforcer.subtractTen(input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,1);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(1,input);
        assert.equal(result,undefined);

        input = undefined;
        result = mathEnforcer.addFive(input);
        assert.equal(result,undefined);

        result = mathEnforcer.subtractTen(input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,input);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(input,1);
        assert.equal(result,undefined);

        result = mathEnforcer.sum(1,input);
        assert.equal(result,undefined);
    });
    it("Test return value with Correct positive ints and floats", function() {
        let input;
        let result;

        input = 100;
        result = mathEnforcer.addFive(input);
        assert.equal(result, 105);

        input = 0;
        result = mathEnforcer.addFive(input);
        assert.equal(result, 5);

        input = 100;
        result = mathEnforcer.subtractTen(input);
        assert.equal(result, 90);

        input = 10;
        result = mathEnforcer.subtractTen(input);
        assert.equal(result, 0);

        input = 100;
        result = mathEnforcer.sum(input,input);
        assert.equal(result, 200);


        input = 100.0;
        result = mathEnforcer.addFive(input);
        assert.closeTo(result, 105,0.01);

        input = 100.0;
        result = mathEnforcer.subtractTen(input);
        assert.closeTo(result, 90.0,0.01);

        input = 100.0;
        result = mathEnforcer.sum(input,input);
        assert.closeTo(result, 200.0,0.01);
    });
    it("Test return value with Correct negative ints and floats", function() {
        let input;
        let result;

        input = -100;
        result = mathEnforcer.addFive(input);
        assert.equal(result, -95);

        input = -5;
        result = mathEnforcer.addFive(input);
        assert.equal(result, 0);

        input = -100;
        result = mathEnforcer.subtractTen(input);
        assert.equal(result, -110);

        input = -100;
        result = mathEnforcer.sum(input,input);
        assert.equal(result, -200);


        input = -100.0;
        result = mathEnforcer.addFive(input);
        assert.closeTo(result, -95,0.01);

        input = -100.0;
        result = mathEnforcer.subtractTen(input);
        assert.closeTo(result, -110.0,0.01);

        input = -100.0;
        result = mathEnforcer.sum(input,input);
        assert.closeTo(result, -200.0,0.01);
    });
    it("combined cases", function () {

    });
});



let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shared Object</title>
</head>
<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>
</html>
`

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe.only("sharedObject", function() {
    it("shuld have null as default value for name", function() {
        let current = sharedObject.name;
        assert.isNull(current,"not null for default value");
    });
    it("shuld have null as default value for income", function() {
        let current = sharedObject.income;
        assert.isNull(current,"not null for default value");
    });
    describe("change name",function() {
        it("should not change name if empty string is passed", function () {
            sharedObject.name = "Pesho";
            sharedObject.changeName("");
            let current = sharedObject.name;
            assert.equal(current,"Pesho", "name should not be changed");
        });
        it("should not change text value if empty string is passed", function () {
            $('#name').val("Pesho");
            sharedObject.changeName("");
            let current = $('#name').val();
            assert.equal(current,"Pesho", "name should not be changed");
        });
        it("should change name with correnct input is passed", function () {
            sharedObject.name = "Pesho";
            sharedObject.changeName("Gosho");
            let current = sharedObject.name;
            assert.equal(current,"Gosho", "name should be changed");
        });
        it("should change text value if valid string is passed", function () {
            $('#name').val("Pesho");
            sharedObject.changeName("Gosho");
            let current = $('#name').val();
            assert.equal(current,"Gosho", "name should be changed");
        });
    });
    describe("changeIncome",function() {
        it("should not change income if string is passed", function () {
            sharedObject.income = 100;
            sharedObject.changeIncome("10");
            let current = sharedObject.income;
            assert.equal(current,100, "Income should not be changed");
        });
        it("should not change text value if string is passed", function () {
            $('#income').val(100);
            sharedObject.changeIncome("10");
            let current = $('#income').val();
            assert.equal(+current,100, "Income should not be changed");
        });
        it("should not change income with negative value passed", function () {
            sharedObject.name = 100;
            sharedObject.changeIncome(-50);
            let current = sharedObject.income;
            assert.equal(current,100, "income should not be changed");
        });
        it("should not change income with ZERO value passed", function () {
            sharedObject.name = 100;
            sharedObject.changeIncome(0);
            let current = sharedObject.income;
            assert.equal(current,100, "income should not be changed");
        });
    });
});