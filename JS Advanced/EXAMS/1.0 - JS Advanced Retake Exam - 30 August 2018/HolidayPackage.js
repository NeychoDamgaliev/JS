class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

let assert = require('chai').assert;
describe("test", function() {
    let holidayPackage;
    this.beforeEach(function () {
        holidayPackage = new HolidayPackage('Italy','Summer');
    })
    it("should have no Vacationers by default", function () {
        let result = holidayPackage.vacationers;
        assert.deepEqual(result,[]);
    });
    it("should have no ensurance included by default", function () {
        let result = holidayPackage.insuranceIncluded;
        assert.equal(result,false);
    });
    it("should throw error with not a boolean insurance", function () {
        assert.throw(() => holidayPackage.insuranceIncluded = "ASD");
    });
    it("should have ensurance included with TRUE boolean", function () {
        holidayPackage.insuranceIncluded = true;
        let result = holidayPackage.insuranceIncluded;
        assert.equal(result,true);
    });
    describe("showVacationers()", function () {
        it("should return 'No vacationers are added yet' with empty vacationers", function () {
            let result = holidayPackage.showVacationers();
            assert.equal(result,"No vacationers are added yet");
        });
        it("should return vacationers names", function () {
            holidayPackage.vacationers = ["Pesho", "Tosho"];
            
            let result = holidayPackage.showVacationers();
            assert.equal(result,`Vacationers:\nPesho\nTosho`);
        });
    });
    describe("AddVacationer(name)", function () {
        it("should throw an error with non String name", function () {
            assert.throw(() => holidayPackage.addVacationer([]));
        });
        it("should throw an error with single space name", function () {
            assert.throw(() => holidayPackage.addVacationer(" "));
        });
        it("should throw an error with more or less than 2 names", function () {
            assert.throw(() => holidayPackage.addVacationer("Pesho"));
            assert.throw(() => holidayPackage.addVacationer("Pesho Toshev Peshev"));
        });
        it("should add vacationer with correct name", function () {
            holidayPackage.addVacationer("Pesho Peshev");
            holidayPackage.addVacationer("Tosho Toshev");
            let result = holidayPackage.vacationers;
            assert.deepEqual(result,["Pesho Peshev","Tosho Toshev"])
        });
    });
    describe("generateHolidayPackage()", function () {
       it("should throw Error with no vacationers", function () {
            assert.throw( () => holidayPackage.generateHolidayPackage());
       });
       it('generateHolidatPackage must show a correct sum for Summer season',function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.addVacationer('Pesho Peshov');
        holidayPackage.insuranceIncluded=true;
        assert.equal(holidayPackage.generateHolidayPackage(),
        'Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPesho Peshov\nPrice: 1100');
        });
        it('generateHolidatPackage must show a correct sum for Spring season',function () {
            holidayPackage.season = "Spring";
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Pesho Peshov');
            holidayPackage.insuranceIncluded=false;
            assert.equal(holidayPackage.generateHolidayPackage(),
            'Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPesho Peshov\nPrice: 800');
            });
    });
})