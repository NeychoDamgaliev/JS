class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = {
                cardNumber : 1111,
                expirationDate : "",
                securityNumber : 111
            }
        if(creditCard != undefined) {
            this.addCreditCardInfo(creditCard); 
        }
        this.wishList = [];
    }
    generateIDNumber() {
        let vowels = ["a", "e", "o", "i", "u"];
        let id = (231 * this.fullName.firstName.charCodeAt(0)) + (139 * (this.fullName.middleName.length));
        if(vowels.includes(this.fullName.lastName.substring(this.fullName.lastName.length-1))) {
            return id + '8';
        }
        return id + '7';
    };

    set fullName(fullName) {
        
        if(fullName.length != 3) {
            throw new Error("Name must include first name, middle name and last name");
        } else {
 
            fullName.forEach((name) => {
                const regex = /^[A-Z][a-z]+$/gm;
                if(!regex.test(name)) {
                    throw new Error("Invalid full name");
                }
            })
        }

        this._fullName = {
            firstName: fullName[0],
            middleName: fullName[1],
            lastName: fullName[2]
         }; 
    }
    get fullName() {
        return this._fullName;
    }

    addCreditCardInfo(creditCard) {
        if(creditCard.length !== 3) {
            throw new Error("Missing credit card information");
        } else if(typeof(creditCard[0]) !== "number" || typeof(creditCard[2]) !== "number") {
            throw new Error("Invalid credit card details");
        }
        this.creditCard.cardNumber = +creditCard[0];
        this.creditCard.expirationDate = creditCard[1];
        this.creditCard.securityNumber = +creditCard[2];
    }
    addDestinationToWishList(destination) {
        if(this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList.sort((a,b) => {
            return a.length - b.length;
        });
    }
    getVacationerInfo() {
        let result = '';
        result += `Name: ${this._fullName.firstName} ${this._fullName.middleName} ${this._fullName.lastName}`;
        result += `\nID Number: ${this.idNumber}`;
        result += `\nWishlist:`;
        result += `\n` + (this.wishList.length === 0 ? "empty" : this.wishList.join(", "));
        result += `\nCredit Card:`
        result += `\nCard Number: ${this.creditCard.cardNumber}`;
        result += `\nExpiration Date: ${this.creditCard.expirationDate}`;
        result += `\nSecurity Number: ${this.creditCard.securityNumber}`;
        
        return result;
    }
}


// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
