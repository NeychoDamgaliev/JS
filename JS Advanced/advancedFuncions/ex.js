function sortArray(arr, sortType) {
    let asc = function (a,b) {
        return a-b;
    };
    let desc = function (a,b) {
        return b-a;
    };

    let sortOrder  = {
        asc,
        desc
    }

    return arr.slice(0).sort(sortOrder[sortType]);
}

// console.log(sortArray([14, 7, 17, 6, 8], 'desc'));

function argumentInfo() {
    let args = {};
    for (let i = 0; i < arguments.length; i++ ) {
        let curElem = arguments[i];
        let curType = typeof curElem;
        console.log(`${curType}: ${curElem}`);

        if(!args.hasOwnProperty(curType)) {
            args[curType] = 0;
        }
        args[curType] += 1;
    }

    Object.keys(args)
    .sort((a,b) => {
        return args[b] - args[a];
    })
    .forEach((key) => {
        console.log(`${key} = ${args[key]}`);
    });
}

// argumentInfo({ name: 'bob'}, 3.333, 9.999);

// let add = (function () {
//     let sum = 0;
//     function calc(elem) {
//         sum += elem;
//         return calc;
//     };
//     calc.toString = function () {
//         return sum;
//     };
//     return calc;
// })();

// console.log(add(5)(2).toString());

function add(num) {
    let sum = num;

    function addToSum(elem) {
        sum += elem;
        return addToSum;
    };
    addToSum.toString = function () {
        return sum;
    };
    return addToSum;
};


// let bmi = personalBMI ('Dragan', 20, 80, 185);
function personalBMI(name, age, weight, height) {
    let BMI = (weight / ( ( height / 100.0 ) * ( height / 100.0 ) )).toFixed(1);
    let status;
// •	underweight, for BMI less than 18.5;
// •	normal, for BMI less than 25;
// •	overweight, for BMI less than 30;
// •	obese, for BMI 30 or more;
    if ( BMI < 18.5 ) {
        status = "underweight";
    } else if( BMI < 25 ){
        status = "normal";
    } else if( BMI < 30 ) {
        status = "overweight";
    } else {
        status = "obese";
    }
    let result =  {
        name,
        "personalInfo": {
            age,
            weight,
            height
        },
        "BMI": Math.round(BMI),
        status
    };
    if( status === "obese") {
        result['recommendation'] = 'admission required';
    }
    return result;
};
// console.log(bmi);


let vectorMath = (function vectorMath () {
    let add = function (vec1, vec2) {
        return [vec1[0]+vec2[0], vec1[1]+vec2[1]];
    };
    let multiply = function (vec, multiplier) {
        return [vec[0] * multiplier, vec[1] * multiplier];
    };
    let length = function (vec) {
        let dX = vec[0];
        let dy = vec[1];
        let len = Math.sqrt ( dX * dX + dy * dy);
        return len;
    };
    let dot = function (vec1, vec2) {
        return (vec1[0] * vec2[0] + vec1[1] * vec2[1]);
    };
    let cross = function (vec1, vec2) {
        return (vec1[0] * vec2[1] - vec1[1] * vec2[0]);
    };

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
}) ();

// console.log(vectorMath.add([1, 1], [1, 0]));
// console.log(vectorMath.multiply([3.5, -2], 2));
// console.log(vectorMath.length([3, -4]));
// console.log(vectorMath.dot([1, 0], [0, -1]));
// console.log(vectorMath.cross([3, 7], [1, 0]));


let solution =  (function () {
    let robot = {
        "protein": 0,
        "carbohydrate": 0,
        "fat": 0, 
        "flavour": 0
    };

    let meals = {
        "apple": {
            "carbohydrate": 1,
            "flavour" : 2
        },
        "coke": {
            "carbohydrate": 10,
            "flavour" : 20
        },
        "burger": {
            "carbohydrate": 5,
            "fat": 7,
            "flavour" : 3            
        }, 
        "omelet": {
            "protein": 5,
            "fat": 1, 
            "flavour": 1
        },
        "cheverme" : {
            "protein": 10,
            "carbohydrate": 10,
            "fat": 10, 
            "flavour": 10
        }   
    };

    return function(input) {
        let tokens = input.split(" ");
        let command = tokens[0];
        if (command === "restock" ) {
            let elem = tokens[1];
            let quantity = +tokens[2];
            robot[elem] += quantity;
            // console.log("Success");
            return "Success";
        } else if ( command === "report" ) {
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
        } else if ( command === "prepare" ) {
            let meal = tokens[1];
            let quantity = +tokens[2];
            let currentProductIngredients = meals[meal];
            
            // for ( let i = 0; i<quantity; i++) {
                let hasAllIngredients = true;
                for ( let ingredient in currentProductIngredients) {
                    let neededIgredient = currentProductIngredients[ingredient] * quantity;
                    if (robot[ingredient] < neededIgredient) {
                        hasAllIngredients = false;
                        return `Error: not enough ${ingredient} in stock`;
                        // break;
                    }
                }
                if (hasAllIngredients) {
                    for ( let ingredient in currentProductIngredients) {
                        let neededIgredient = currentProductIngredients[ingredient] * quantity;
                        robot[ingredient] -= neededIgredient;
                    } 
                    // console.log("Success");
                    return "Success";
                } 

            // }
        }
    }

}) ();

// solution("restock carbohydrate 10");
// solution("restock flavour 10");
// solution("prepare apple 1");
// solution("restock fat 10");
// solution("prepare burger 1");
// solution("report");


// solution("prepare cheverme 1");
// solution("restock protein 10");
// solution("prepare cheverme 1");
// solution("restock carbohydrate 10");
// solution("prepare cheverme 1");
// solution("restock fat 10");
// solution("prepare cheverme 1");
// solution("restock flavour 10");
// solution("prepare cheverme 1");
// solution("report");

// console.log(solution('restock protein 100'));
// console.log(solution('restock carbohydrate 100'));
// console.log(solution('restock fat 100'));
// console.log(solution('restock flavour 100'));
// console.log(solution('report'));
// console.log(solution('prepare apple 2'));
// console.log(solution('report'));
// console.log(solution('prepare apple 1'));
// console.log(solution('report'));


// monkeyPatcher
function monkeyPatcher (input) {
    if(input === "upvote") {
        this.upvotes++;
    } else if ( input === "downvote") {
        this.downvotes++;
    } else if ( input === "score") {
        return score(this);
    }

    function score(obj) {
        let modifier = 0;
        if ( obj.upvotes + obj.downvotes > 50 ) {
            modifier = Math.ceil(Math.max(obj.upvotes, obj.downvotes) * 0.25);
        }
        let score = obj.upvotes - obj.downvotes;
        let rating = '';
        if (obj.upvotes + obj.downvotes < 10) {
            rating = 'new';
        } else if (score < 0) {
            rating = 'unpopular';
        } else if (obj.upvotes / (obj.upvotes + obj.downvotes) > 0.66) {
            rating = 'hot';
        } else if (obj.upvotes > 100 || obj.downvotes > 100) {
            rating = 'controversial';
        } else {
            rating = 'new';
        }
        return [obj.upvotes + modifier,
            obj.downvotes + modifier,
            score,
            rating];
     }
}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
monkeyPatcher.call(post, 'downvote');       // (executed 50 times)
score = monkeyPatcher.call(post, 'score');
