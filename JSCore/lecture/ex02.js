// 1. Inside Volume

function insideVolume(params) {
    for (i=0;i<params.length;i+=3) {
        let x = params[i];
        let y = params[i+1];
        let z = params[i+2];

        if(10 <= x && x <= 50 && 20 <= y && y <= 80 && 15 <= z && z <= 50) {
            console.log("inside");
        }  else {
            console.log("outside");
        }
    }
}

// insideVolume([13.1, 50, 31.5,
//     50, 80, 50,
//     -5, 18, 43]
//     );



// 2.	Road Radar
function roadRadar(input) {
    let currentSpeed = input[0];
    let currentZone = input[1];

    let speedLimit = getLimit(currentZone);
    let infraction = getInfraction(currentSpeed,speedLimit);
    if (infraction){
        console.log(infraction);
    }

    function getLimit(zone) {
        if(zone ==="motorway") {
            return 130;
        } else if (zone === "interstate") {
            return 90;
        } else if (zone === "city") {
            return 50;
        } else if (zone === "residential") {
            return 20;
        }
    }
    function getInfraction(curSpeed, speedLimit) {
        let overspeed = curSpeed - speedLimit;
        if (overspeed <= 0) {
            return false;
        } else if(overspeed <= 20) {
                return "speeding";
        } else if (overspeed <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }
}

// roadRadar([40, 'city']);
// roadRadar([21, 'residential']);
// roadRadar([120, 'interstate']);
// roadRadar([200, 'motorway']);


// 3.	Template format

// templateFormat(["Dry ice is a frozen form of which gas?",
// "Carbon Dioxide",
// "What is the brightest star in the night sky?",
// "Sirius"]
// );

function templateFormat(input) {
    let result = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n`;
    for (let i = 0; i<input.length; i+=2) {
        let question = `  <question>\n    ${input[i]}\n  </question>\n`;
        let answer = `  <answer>\n    ${input[i+1]}\n  </answer>\n`;
        result += (question + answer);
    }
    result += `</quiz>`
    console.log(result);
}


//4.	Cooking by Numbers
// cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
// cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);

    function cookingByNumbers(input) {
        let action = function (operation) {
            if ( operation === "chop") {
                return function (param) { return param / 2;}
            } else if ( operation === "dice") { 
                return function (param) { return Math.sqrt(param);}
            } else if (operation === "spice") {
                return function (param) { return param + 1;}
            } else if (operation === "bake") {
                return function (param) { return param * 3;}
            } else if (operation === "fillet") {
                return function (param) { return param - (param * 0.2);}
            }
        }

        let number = input[0];
        for (let index = 1; index < input.length; index++) {
            let command = input[index];
            let result = action(command);
            number = result(number);
            console.log(number);
        }
    }


    //5.	Modify Average
    // modifyAverage(101);
    // modifyAverage(5835);
    // modifyAverage(-1);

function modifyAverage(number) {
    let getAverage = function getAverage(num) {
        let arr = Array.from(Math.abs(num).toString());
        let size = arr.length;
        let sum = 0;
        for (let index = 0; index < arr.length; index++) {
            sum += +arr[index];
        }
        return sum / size;
    }
    let increaseNumber = function increaseNumber(num) {
        let arr = Array.from(num.toString());
        arr.push(9);
        return arr.join('');
    }

    let curAverage = getAverage(number);
    while (curAverage <=5 ) {
        number = increaseNumber(number);
        curAverage = getAverage(number);
    }
    console.log(number);    
}


//6.	Validity Checker
// validityChecker([3, 0, 0, 4]);
// validityChecker([2, 1, 1, 1]);

function validityChecker(coords){
    let p1x = coords[0];
    let p1y = coords[1];
    let p2x = coords[2];
    let p2y = coords[3];

    function getDistance(p1x, p1y, p2x = 0, p2y = 0) {
        return Math.sqrt( Math.pow((p2x - p1x),2) + Math.pow((p2y - p1y),2)) ;
    }
    function validateDistance(dist) {
        let distAsInt = Math.round(dist);
        if (distAsInt === dist) {
            return "valid";
        }
        return "invalid";
    }


    let p1dist = getDistance(p1x, p1y);
    let p2dist = getDistance(p2x, p2y);
    let dist = getDistance(p1x, p1y, p2x, p2y);

    console.log(`{${p1x}, ${p1y}} to {0, 0} is ${validateDistance(p1dist)}`);
    console.log(`{${p2x}, ${p2y}} to {0, 0} is ${validateDistance(p2dist)}`);
    console.log(`{${p1x}, ${p1y}} to {${p2x}, ${p2y}} is ${validateDistance(dist)}`);
}

//7.	Treasure Locator
// treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
// treasureLocator([6, 4]);

function treasureLocator(coords){
    let islands = {"tuvalu": {"x1":1, "y1":1, "x2":3, "y2":3, "name": "Tuvalu"},
                    "tonga": {"x1":0, "y1":6, "x2":2, "y2":8, "name": "Tonga"},
                    "samoa": {"x1":5, "y1":3, "x2":7, "y2":6, "name": "Samoa"},
                    "cook": {"x1":4, "y1":7, "x2":9, "y2":8, "name": "Cook"},
                    "tokelau": {"x1":8, "y1":0, "x2":9, "y2":1, "name": "Tokelau"}
                };
    function checkIsland(x,y,island) {
        return (island.x1 <= x && x <= island.x2 && island.y1 <= y && y <= island.y2);
    }

    for (let i = 0; i < coords.length; i+=2) {
        let x = coords[i];
        let y = coords[i+1];
        let found = false;
        for (let island in islands) {
            if (checkIsland(x,y,islands[island])) {
                console.log(islands[island].name);
                found = true;
                break;
            }
        }
        if(!found) {
            console.log("On the bottom of the ocean");
        }
    }
}


//8.	Trip Length

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);

function tripLength(coords){
    let [x1, y1, x2, y2, x3, y3] = coords.map(Number);

    let d12 = Math.sqrt ( Math.pow ( x2 - x1 , 2 ) + Math.pow ( y2 - y1 , 2 ));
    let d13 = Math.sqrt ( Math.pow ( x3 - x1 , 2 ) + Math.pow ( y3 - y1 , 2 ));
    let d23 = Math.sqrt ( Math.pow ( x3 - x2 , 2 ) + Math.pow ( y3 - y2 , 2 ));
    
    let dist123 = d12 + d23;
    let dist132 = d13 + d23;
    let dist213 = d12 + d13;

    let minDist = Math.min(dist123, dist132, dist213);

    if(minDist === dist123) {
        console.log(`1->2->3: ${minDist}`)
    } else if (minDist === dist132) {
        console.log(`1->3->2: ${minDist}`)
    } else {
        console.log(`2->1->3: ${minDist}`)
    }
}