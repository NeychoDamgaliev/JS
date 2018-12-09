// (function solve() {
// Array.prototype.last = function () {
//     return this[this.length-1];
// };
// Array.prototype.skip = function(n) {
//     return this.slice(n);
// };
// Array.prototype.take = function(n) {
//     return this.slice(0, n);
// };
// Array.prototype.sum = function() {
//     return this.reduce((acc,cur) => {
//         return acc + cur;
//     },0);
// };
// Array.prototype.average = function () {
//     return this.sum() / this.length;
// };
// })();


// let myArr = [1,2,3];
// console.log(myArr.take(2));


// 2. Construction Crew
// let worker = constructionCrew({ weight: 80,
//     experience: 1,
//     bloodAlcoholLevel: 0,
//     handsShaking: true }
//   );
function constructionCrew (worker) {
    if(worker.handsShaking) {
        let neededAlcohol = worker.weight * worker.experience * 0.1;
        worker.bloodAlcoholLevel += neededAlcohol;
        worker.handsShaking = false;
    }
     return worker;
}


// 3. Car Factory

// let car = carFactory({ model: 'VW Golf II',
// power: 90,
// color: 'blue',
// carriage: 'hatchback',
// wheelsize: 14 }
// );

// let car2 = carFactory({ model: 'Opel Vectra',
// power: 110,
// color: 'grey',
// carriage: 'coupe',
// wheelsize: 17 }
// );

    function carFactory(desiredStats) {
        let engines = {
            '90': { 'power': 90, 'volume': 1800 },
            '120': { 'power': 120, 'volume': 2400 },
            '200': { 'power': 200, 'volume': 3500 }
        };
        let body = {
            'hatchback': { 'type': 'hatchback', 'color': '' },
            'coupe': { 'type':'coupe', 'color': '' },
        }

        let car = {};
        let desiredEngine = engines[Object.keys(engines).filter((key) => {
            return  +key >= desiredStats.power;
        })[0]] ;
        let carriage = body[desiredStats.carriage];
        carriage.color = desiredStats.color;
        let wheelSize = desiredStats.wheelsize % 2 === 0 ? desiredStats.wheelsize - 1 : desiredStats.wheelsize;
        let wheels = [wheelSize,wheelSize,wheelSize,wheelSize];

        return {
            'model': desiredStats.model,
            'engine': desiredEngine,
            'carriage': carriage,
            'wheels':wheels
        }
    }
// console.log(car);
// console.log(car2);


function extensibleObject() {
    let obj = {
        extend: function(template){
            for(let parentProp of Object.keys(template)){
                if(typeof(template[parentProp]) == "function"){
                    Object.getPrototypeOf(obj)[parentProp] = template[parentProp];
                } else {
                    obj[parentProp] = template[parentProp];
                }
            }
        }
    };

    return obj;
}


// 5.	String extension

(function() {
    String.prototype.ensureStart = function (str) {
        let currentString = this.valueOf();
        if(currentString.indexOf(str) !== 0) {
            return str + currentString; 
        }
        return currentString; 
    };
    String.prototype.ensureEnd = function (str) {
        let currentString = this.valueOf();
        if(currentString.indexOf(str) !== currentString.length - str.length) {
            return currentString + str; 
        }
        return currentString; 
    };
    String.prototype.isEmpty = function () {
        return this.valueOf() === "";
    };
    // String.prototype.truncate = function (n) {
    //     let currentString = this.valueOf();
    //     if(currentString.length <= 3) {
    //         return "...";
    //     } else if (currentString.length <= n) {
    //         return currentString;
    //     } else {
    //         currentString = currentString.substring(0,  n);
    //         let lastIndexOfSpace = currentString.lastIndexOf(" ");
    //         if( lastIndexOfSpace != -1) {
    //             return currentString.substring(0, lastIndexOfSpace) + "...";
    //         }
    //             return currentString.substring(0, n-3) + "...";

    //     }
    // }
    String.prototype.truncate = function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
      if(this.toString().length <= n){
          return this.toString();
      } else {
          let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
          if(lastIndex != -1){
              return this.toString().substr(0, lastIndex) + "...";
          } else {
              return this.toString().substr(0, n-3) + "...";
          }
      }
    };
    String.format = function (string, ...params) {
        for(let i=0; i<params.length; i++){
            let index = string.indexOf("{"+i+"}");
            while (index != -1) {
                string = string.replace("{"+i+"}", params[i]);
                index = string.indexOf("{"+i+"}");
            }
        }
        return string;
    };
})();

// let pesho = "the quick brown fox jumps over the lazy dog";
// console.log(pesho.truncate(10));


function SortedList() {
    let sortedList = (function () {
        let arr = [];
        let size = 0;
        let sorting = function (a,b) {
            return a - b;
        };

        let add = function (elem) {
            arr.push(elem);
            arr.sort(sorting);
            this.size++;
            return this;
        };
        let remove = function (index) {
            if( 0 <= index && index < arr.length ) {
                arr.splice(index,1);
                this.size--;
                return this;
            }
        };
        let get = function (index) {
            if( 0 <= index && index < arr.length ) {
                return arr[index];
            }
        };
        // let size = function () {
        //     return this.size;
        // }
        return {add,remove,get,size}; 
    })(); 
    return sortedList;
}

let myList = SortedList();
asd.add(8);
asd.add(9);
// asd = asd.add(7);
// asd = asd.add(6);
// asd = asd.add(3);
console.log(asd);