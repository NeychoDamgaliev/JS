// class Request {
//     constructor(method, uri, version,message) {
//         this.method = method;
//         this.uri = uri;
//         this.version = version;
//         this.message = message;
//         this.response = undefined;
//         this.fulfilled = false;
//     }
// }

// 2.   TICKETS
// let res = ticketsCreator(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// );

function ticketsCreator(input,sortCriteria) {
    class Ticket {
        constructor(destination,price,status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    function sorter() {
        if (sortCriteria === "destination") {
            return (a,b) => {
                return a.destination.localeCompare(b.destination);
            };
        } else if (sortCriteria === "status") {
            return (a,b) => {
                return a.status.localeCompare(b.status);
            };
        } else {
            return (a,b) => {
                return a.price - b.price;
            }
        }
    }
    
    let data = input.splice(0);
    let result = [];
    
    data.forEach((ticketData) => {
        let tokens = ticketData.split("|");
        let ticket = new Ticket(tokens[0],+tokens[1],tokens[2]);
        result.push(ticket);
    } )

    return result.sort(sorter());
}

// res.forEach((r) => {
//     console.log(r);
// })


// 3.	Unity

class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }
    unite (obj) {
        if (obj instanceof Rat) {
            this.unitedRats.push(obj);
        }
    }
    getRats() {
        return this.unitedRats;
    }
    toString() {
        let res = this.name;
        this.unitedRats.forEach((r) => {
            res += `\n##${r}`;
        });
        return res;
    }
}

// let asd = new Rat("Pesho");
// let test = new Rat("Pesho");
// console.log(test.toString()); //Pesho

// console.log(test.getRats()); //[]

// test.unite(new Rat("Gosho"));
// test.unite(new Rat("Sasho"));
// console.log(test.getRats());
// //[ Rat { name: 'Gosho', unitedRats: [] },
// //  Rat { name: 'Sasho', unitedRats: [] } ]

// console.log(test.toString());
// // Pesho
// // ##Gosho
// // ##Sasho


// 4. Stringer

class Stringer {
    constructor(string, len) {
        this.innerString = string;
        this.innerLength = len;
    }
    decrease(len) {
        this.innerLength = this.innerLength - len >= 0 ? this.innerLength - len: 0;
    }
    increase(len) {
        this.innerLength += len;
    }
    toString() {
        let res = this.innerString.substr(0,this.innerLength);
        if (this.innerString.length > this.innerLength) {
            res += "...";
        }
        return res;
    }
}

// let test = new Stringer("Test", 5);
// console.log(test.toString()); //Test

// test.decrease(3);
// console.log(test.toString()); //Te...

// test.decrease(5);
// console.log(test.toString()); //...

// test.increase(4);
// console.log(test.toString()); //Test


// 5. Extensible class

let Extensible = (function solve () {
    let count = 0;
    class Extensible{
        constructor(){
            this.id = count;
            count++;
        }
        extend(template) {
            Object.keys(template).forEach((key) => {
                if( typeof(template[key]) === "function" ) {
                    Object.getPrototypeOf(this)[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            })
        }
    };
    return Extensible;
})();



class SortedList{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
    add(elem) {
        this.arr.push(elem);
        this.arr.sort((a,b) => {
            return a - b;
        });
        this.size++;
    }
    remove(index) {
        if( 0 <= index && index < this.arr.length ) {
            this.arr.splice(index,1);
            this.size--;
        }
    }
    get(index) {
        if( 0 <= index && index < this.arr.length ) {
            return this.arr[index];
        }
    }
}

// let asd = new SortedList();
// asd.add(5);
// asd.add(2);
// asd.add(1);
// console.log(asd.arr );

//  7.	Instance Validation

class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(clientId) {
        const regex = /^[\d]{6}$/gm;
        // let res = regex.test(clientId);
        
        if(regex.test(clientId)){
            this._clientId = clientId;
        } else {
            throw new TypeError("Client ID must be a 6-digit number");
        }
    }
    get email() {
        return this._email;
    }
    set email(email) {
        let emailPatern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/gm;
        if(emailPatern.test(email)) {
            this._email = email;
        } else {
            throw new TypeError("Invalid e-mail");
        }
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName) {
        if(firstName.length < 3 || firstName.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        } else {
            const regex = /^[a-zA-Z]{3,20}$/gm;
            if(!regex.test(firstName)){
                throw new TypeError("First name must contain only Latin characters");
            }
        }

        this._firstName = firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName) {
        if(lastName.length < 3 || lastName.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        } else {
            const regex = /^[a-zA-Z]{3,20}$/gm;
            if(!regex.test(lastName)){
                throw new TypeError("Last name must contain only Latin characters");
            }
        }

        this._lastName = lastName;
    }
}
try {
    // let acc1 = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
    // let acc2 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
    // let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
    let acc4 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');    
} catch(ex) {
    console.log(ex);
}
