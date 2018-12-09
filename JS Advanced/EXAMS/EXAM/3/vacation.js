class Vacation {
    constructor(organizer, destination, budget){
        this.organizer = organizer,
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
    registerChild(name, grade, budget) {
        if(budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        let kid = `${name}-${budget}`;

        if(this.kids.hasOwnProperty(grade)) {
            let exist = this.kids[grade].filter( kid => {
                return kid.startsWith(name);
            });
            
            if(exist.length != 0) {
                return `${name} is already in the list for this ${this.destination} vacation.`
            } 

            this.kids[grade].push(kid);

        } else {
            this.kids[grade] = [];
            this.kids[grade].push(kid);
            
        }
        return this.kids[grade];
    }

    removeChild(name, grade){
        let exist = false;
        if(this.kids.hasOwnProperty(grade)) {
            let curKid = this.kids[grade].filter(kid => {
                return kid.startsWith(name);
            });
            if(curKid.length != 0) {
                exist = true;
            }
        }
        if(exist) {
            let result = this.kids[grade].filter(kid => {
                return !kid.startsWith(name);
            })
            this.kids[grade] = result;
            return result;
        }
        return `We couldn't find ${name} in ${grade} grade.`;
    }
    toString() {
        let count=0;
        Object.keys(this.kids).forEach(grade => {
            count += this.kids[grade].length;
        })

        if( count === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        let result = `${this.organizer} will take ${count} children on trip to ${this.destination}\n`;
        Object.keys(this.kids).sort((a,b) => {
            return a-b;
        }).forEach(grade => {
            result += `Grade: ${grade}\n`;
            this.kids[grade].forEach((kid,index) => {
                result += `${index+1}. ${kid}\n`;
            })
        });
        return result;
    }

    get numberOfChildren() {
        let count=0;
        Object.keys(this.kids).forEach(grade => {
            count += this.kids[grade].length;
        })

        if( count === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        return count;
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());

