class SubscriptionCard {
    constructor(firstName, lastName, SSN) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._SSN = SSN;
      this._subscriptions = [];
      this._blocked = false;
    }
  
    get firstName() {
      return this._firstName;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    get SSN() {
      return this._SSN;
    }
  
    get isBlocked() {
      return this._blocked;
    }
  
    addSubscription(line, startDate, endDate) {
      this._subscriptions.push({
        line,
        startDate,
        endDate
      });
    }
  
    isValid(line, date) {
      if (this.isBlocked) return false;
      return this._subscriptions.filter(s => s.line === line || s.line === '*')
        .filter(s => {
          return s.startDate <= date &&
            s.endDate >= date;
        }).length > 0;
    }
  
    block() {
      this._blocked = true;
    }
  
    unblock() {
      this._blocked = false;
    }
  }
  module.exports = SubscriptionCard;
  


  const assert = require('chai').assert;
  
  describe("SubscriptionCard() tests", function () {
    let card;
    this.beforeEach( function () {
        card =new SubscriptionCard('Pesho', 'Petrov', '00000000');
    });
    describe("Constructor tests", function () {
      it("should have subscription as empty array by default", function () {
          let result = card._subscriptions;
          assert.deepEqual(result,[]);
      });
      it("should have blocked set to false by default", function () {
          let result = card._blocked;
          assert.equal(result,false);
      });
    });
    describe("Accessors tests", function () {
      it("FirstName accessor should return Pesho", function () {

        let result = card.firstName;
        assert.equal(result, 'Pesho');
      });
      it("LastName accessor should return Petrov", function () {
        
        let result = card.lastName;
        assert.equal(result, 'Petrov');
      });
      it("SSN accessor should return 12345678", function () {
        
        let result = card.SSN;
        assert.equal(result,'00000000')
      });
      it("IsBlocked should return correct value", function () {
        card._blocked = false;
        let result = card.isBlocked;
        // card._blocked = true;
        // let result2 = card.isBlocked;

        assert.equal(result,false);
        // assert.equal(result2,true);
      });
    });
  });