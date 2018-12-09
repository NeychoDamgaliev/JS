// solve('Pesho');
// areaAndperimeter(2,2);


function solve(name) {
	console.log('Hello, ' + name + ', I am JavaScript!');
}


function areaAndperimeter(sideA, sideB) {
    let area = sideA * sideB;
    let per = 2 * (sideA + sideB);

    console.log(area);
    console.log(per);
}


// distanceOverTime([0, 60, 3600]);
function distanceOverTime(values){
    let delta = Math.abs(values[0] - values[1]);
    let speedInMeterPerSecond = delta * 1000 / 3600;
    let time = values[2];
    let dist = time * speedInMeterPerSecond;
    console.log(dist);
}


// distIn3D([3.5, 0, 1, 0, 2, -1]);
function distIn3D(coords) {
    let p1x = coords[0];
    let p1y = coords[1];
    let p1z = coords[2];
    let p2x = coords[3];
    let p2y = coords[4];
    let p2z = coords[5];

    let dist1 =  Math.sqrt(Math.pow((p2x - p1x), 2) + Math.pow((p2y - p1y), 2)) ;
    let dist2 =  p2z - p1z ;

    let dist = Math.sqrt(Math.pow(dist1,2) + Math.pow(dist2,2));
    console.log(dist);
}

// gradToDeg(-50);
function gradToDeg(angle) {
    let grad = angle %400; 
    if(grad < 0) {
        grad = 400+grad;
    }

    let deg = grad * 360 / 400;
    console.log(deg);
}


// 6.	Compound Interest
// compoundInterest([1500, 4.3, 3, 6]);
function compoundInterest(input){
    let principalSum = input[0];
    let interestRate = input[1]/100;
    let period = input[2];
    let timeSpan = input[3]*12;
    let compoundFrequency = 12 / period;
    let periods = Math.floor (timeSpan / period);

    let totalSum = principalSum *  Math.pow( (1 + interestRate / compoundFrequency) , compoundFrequency * input[3]);
    console.log(totalSum);
}


// 7.	*Rounding
// round([10.5, 3]);
function round(params){
    let number = params[0];
    let precision = params[1];
    let multyplier = Math.pow(10, precision);

    let result = Math.round(number * multyplier) / multyplier;
    console.log(result);
}

// 8.	Imperial Units
// convertImperial(11); 
function convertImperial(inches) {
    let feet = Math.floor(inches / 12);
    let residual = inches % 12;
    console.log(`${feet}'-${residual}"`);
}

// 9.	Now Playing
// nowPlaying(['Number One', 'Nelly', '4:09']);
function nowPlaying(trackData) {
    let song = trackData[0];
    let singer = trackData[1];
    let duration = trackData[2];
    console.log(`Now Playing: ${singer} - ${song} [${duration}]`);
}


// 10.	Compose Tag
// composeTag(['smiley.gif', 'Smiley Face']);
function composeTag(params) {
    let fileLoc = params[0];
    let altText = params[1];

    console.log(result);
}

// 11.	Binary to Decimal
// binaryToDecimal('00001001');
function binaryToDecimal(numAsString) {
    console.log(parseInt(numAsString, 2));
}

//12.	Assign Properties
// assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600','Pesho']);
function assignProperties(params) {
    // let result = "{";  
    // for (let i = 0; i < params.length;i+=2) {
    //     result += ` ${params[i]}: '${params[i+1]}',`;
    // }
    // if(result.substr(result.length-1) ===","){
    //     result = result.slice(0,-1);
    // }
    // result += ` }`;
    // console.log(result);
    let obj = {};
    for (let i = 0; i < params.length - 1;i+=2) {
        obj[params[i]] = params[i+1];
    }
    console.log(obj);
}

//13.	*Last Month
// dayMonthYear([17, 3, 2002]);
function dayMonthYear(params) {
    let date = new Date(params[2],params[1]-1,0);
    console.log(date.getDate());
}


//1.	Biggest of 3 Numbers
// bigestOfThree([5,-2,7]);
function bigestOfThree(nums) {
    // let num1 = nums[0];
    // let num2 = nums[1];
    // let num3 = nums[2];
    // let max = Math.max(num1, num2, num3);
    console.log((nums) => Math.max(nums[0], nums[1], nums[2]));
    // console.log(max);

}

//2.	Point in Rectangle

// pointInRectangle([8,-1,2,12,-3,3]);
function pointInRectangle(input) {
    let [x,y,xMin, xMax, yMin, yMax] = input;
    if(x>=xMin && x <=xMax && y >= yMin && y <= yMax ) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

// 3.	Odd Numbers 1 to N

// oddNumbers1toN(5);
function oddNumbers1toN(num) {
    for (let i = 1; i <=num; i+=2) {
        // if (i % 2 != 0) {
            console.log(i);
        // }
    }
}

//4.	Triangle of Dollars

// triangleOfDolars(8);
function triangleOfDolars(count) {
    for(let i = 1; i<=count; i++) {
        // let row="";
        // for(let j=1; j <=i; j++) {
        //     row += "$"; 
        // }
        // console.log(row);
        console.log("$".repeat(i));
    }
}

//5.	Movie Prices

// moviePrices([`Schindler's LIST`, 
// 'monday']
// );
function moviePrices([title,dayOfWeek]) {
    title = title.toLowerCase();
    dayOfWeek = dayOfWeek.toLowerCase();
    switch (title) {
        case "the godfather":
            // console.log("the godfather");
            if(dayOfWeek =="monday") {
                console.log(12);
            } else if(dayOfWeek =="tuesday") {
                console.log(10);
            } else if (dayOfWeek =="wednesday") {
                console.log(15);
            } else if (dayOfWeek =="thursday") {
                console.log(12.50);
            } else if (dayOfWeek =="friday") {
                console.log(15);
            } else if (dayOfWeek =="saturday") {
                console.log(25);
            } else if (dayOfWeek =="sunday") {
                console.log(30);
            } else {
                console.log("error");
            }
            break;
        case "schindler's list":
            if(dayOfWeek =="monday") {
                console.log(8.50);
            } else if(dayOfWeek =="tuesday") {
                console.log(8.50);
            } else if (dayOfWeek =="wednesday") {
                console.log(8.50);
            } else if (dayOfWeek =="thursday") {
                console.log(8.50);
            } else if (dayOfWeek =="friday") {
                console.log(8.50);
            } else if (dayOfWeek =="saturday") {
                console.log(15);
            } else if (dayOfWeek =="sunday") {
                console.log(15);
            } else {
                console.log("error");
            }    
        // console.log("schindler's list");
            break;
        case "casablanca":
            if(dayOfWeek =="monday") {
                console.log(8);
            } else if(dayOfWeek =="tuesday") {
                console.log(8);
            } else if (dayOfWeek =="wednesday") {
                console.log(8);
            } else if (dayOfWeek =="thursday") {
                console.log(8);
            } else if (dayOfWeek =="friday") {
                console.log(8);
            } else if (dayOfWeek =="saturday") {
                console.log(10);
            } else if (dayOfWeek =="sunday") {
                console.log(10);
            } else {
                console.log("error");
            }
            // console.log("casablanca");
            break;
        case "the wizard of oz":
            if(dayOfWeek =="monday") {
                console.log(10);
            } else if(dayOfWeek =="tuesday") {
                console.log(10);
            } else if (dayOfWeek =="wednesday") {
                console.log(10);
            } else if (dayOfWeek =="thursday") {
                console.log(10);
            } else if (dayOfWeek =="friday") {
                console.log(10);
            } else if (dayOfWeek =="saturday") {
                console.log(15);
            } else if (dayOfWeek =="sunday") {
                console.log(10);
            } else {
                console.log("error");
            }
            // console.log("the wizard of oz");
            break;
        default:
        console.log("error");
        break;
    }
}

//6.	Quadratic Equation
// quadraticEquation(6, 11, -35);

function quadraticEquation(a,b,c){
    
    let disctiminant = b * b - 4 * a * c;

    if(disctiminant > 0) {
        let x1 = (-1 * b + Math.sqrt(disctiminant)) / (2*a);
        let x2 = (-1 * b - Math.sqrt(disctiminant)) / (2*a);
        console.log(Math.min(x1,x2));
        console.log(Math.max(x1, x2));
    } else if(disctiminant == 0) {
        console.log(-1*b / (2 * a));
    } else {
        console.log("No");
    }
}

// 7.	Multiplication Table
// multiplicationTable(5);
function multiplicationTable(size) {
    let result = `<table border="1">\n\r<tr><th>x</th>`;
    for (let i = 1; i<= size; i++) {
        result += `<th>${i}</th>`;
    }
    result += `</tr>\n\r`
    for (let row = 1; row<= size; row++) {
        result += `<tr><th>${row}</th>`;
        for (let col = 1; col<= size; col++) {
            result += `<td>${row * col}</td>`;
        }
        result += '</tr>\n\r';
    }
    result += `</table>`;
    console.log(result);
}

//8.    Figure of 4 squares
figureOf4Squares(4);
function figureOf4Squares(num) {
    num = Number(num);
    let length = num % 2 == 0 ? num - 1 : num;

    for(let i = 1; i<= length; i++) {
        if(i == 1 || i == length || (length +1)/i == 2) {
            console.log("+" + "-".repeat(num-2) + "+" + "-".repeat(num-2) + "+");
        } else {
            console.log("|" + " ".repeat(num-2) + "|" + " ".repeat(num-2) + "|");
        }
    }
}