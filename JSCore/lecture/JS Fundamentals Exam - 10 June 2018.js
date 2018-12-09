// travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
// console.log("");
// console.log("=====================================================")
// console.log("");
// travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);

function travelPlans(input) {
    let data = input.slice(0);
    let gold = 0;
    const specializedProfessions = ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"];
    const averageProfessions = ["Driving", "Managing", "Fishing", "Gardening"];
    const clumsyProfessions = ["Singing", "Accounting", "Teaching", "Exam-Making", "Acting", "Writing", "Lecturing", "Modeling", "Nursing"];
    let specializedCustomersCount = 0;
    let clumsyCustomersCount = 0;

    for (let i in data) {
        let tokens = data[i].split(" : ");       
        let profession = tokens[0];
        let money = +tokens[1];

        if (specializedProfessions.includes(profession)) {
            if(money >= 200) {
                gold += (money * 0.8);
                specializedCustomersCount++;
                if(specializedCustomersCount % 2 === 0) {
                    gold += 200;
                }
            }
        } else if ( clumsyProfessions.includes(profession)) {
            clumsyCustomersCount++;
            if(clumsyCustomersCount % 2 == 0) {
                money -= money * 0.05;
            } else if (clumsyCustomersCount % 3 === 0) {
                money -= money * 0.1;
            }
            gold += money;
        } else if (averageProfessions.includes(profession)) {
            gold += money;
        }
    }
console.log(`Final sum: ${gold.toFixed(2)}`);
gold-1000 >=0 ?
console.log(`Mariyka earned ${(gold - 1000).toFixed(2)} gold more.`) : 
console.log(`Mariyka need to earn ${(1000 - gold).toFixed(2)} gold more to continue in the next task.`) ;
}



// travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
// "@,",
// "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
// "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
// "someone continues as no "]);
// console.log("");
// console.log("=================================================================================================================")
// console.log("");
// travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
// "@,",
// "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
// "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
// "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]);


function travelInvestigation(input) {
    let delimiter = input[1];
    let companies = input[0].split(delimiter).map(c=> c.trim());
    let data = input.splice(2).map(sent => sent.toLowerCase());
    let valid = [];
    let invalid = [];

    for (const key in data) {
        let res = companies.filter(c => {
            return data[key].includes(c);    
        });
        if(res.length === companies.length) {
            valid.push(data[key]);
        } else {
            invalid.push(data[key]);
        }
    }
    if(valid.length !== 0) {
        console.log("ValidSentences");
        valid.forEach((sent,index) => {
            console.log(`${index+1}. ${sent}`);
        });
    }
    if(valid.length !== 0 && invalid.length !== 0) {
        console.log("==============================");
    }
    if(invalid.length !== 0) {
        console.log("InvalidSentences");
        invalid.forEach((sent,index) => {
            console.log(`${index+1}. ${sent}`);
        });
    }
}



// minkeDecode(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
// minkeDecode(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);
// minkeDecode(["3", "5", "gar","114 BultoriA � sDf117ia aTe114.223432 1, riDl10 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery101 an unpacked as he"])
function minkeDecode(input) {
    let startIndex = +input[0];
    let endIndex = +input[1];
    let replacement = input[2];
    let text = input[3];
    let firstCountry;
    let textMatch = text.match(/[A-Z]{1}[\w]+[A-Z]{1}/);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    if(textMatch) {
        firstCountry = textMatch[0];
        firstCountry = capitalizeFirstLetter(firstCountry.replace(firstCountry.substring(startIndex,endIndex+1),replacement));
    }
    const regex = /[\d]{3}(\.[\d]+)?/g;
    let digitsMatch = regex.exec(text);
    let result = [];
    while (digitsMatch) {
        let digit = +digitsMatch[0];
        let digitCeil = Math.ceil(digit);
        result.push(digitCeil);
        digitsMatch = regex.exec(text);
    }
    let secCountry = capitalizeFirstLetter(result.map(d=> String.fromCharCode(d)).join(""));

    console.log(`${firstCountry} => ${secCountry}`)
}   

travelTime(["Bulgaria > Sofia > 500",
"bulgaria > sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200" ]
);

function travelTime(input) {
    let data = input.splice(0);
    let dest = {};
    for (let d of data) {
        let [country,town,cost] = d.split(" > ").map(el=> el.trim());
        town = town.charAt(0).toUpperCase() + town.slice(1);

        if(!dest.hasOwnProperty(country)) {
            dest[country] = {};
        }
        if(!dest[country].hasOwnProperty(town)) {
            dest[country][town] = Number.POSITIVE_INFINITY;
        }
        if (dest[country][town] > cost) {
            dest[country][town] = cost;
        }
    }

    let sortedCountries = Object.keys(dest).sort( (a,b) => {
        "use strict";
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    for (let country of sortedCountries) {
        let output = `${country} -> `;

        let sortedTowns = Object.keys(dest[country]).sort((a,b) => {
            "use strict";
            return dest[country][a] - dest[country][b];});
            
            for (let town of sortedTowns) {
                output += `${town} -> ${dest[country][town]} `
            }
        console.log(output.trim());
    }
}


// function travelTime(arr) {
 
//     let result = {};
 
//     for (let line of arr) {
 
//         let [state, town, price] = line.split(" > ").map(x=>x.trim());
 
//         town = town.charAt(0).toUpperCase() + town.slice(1);
 
//         if (!result.hasOwnProperty(state)) {
//             result[state] = {};
//         }
//         if (!result[state].hasOwnProperty(town)) {
//             result[state][town] = Number.POSITIVE_INFINITY;
//         }
//         if ( result[state][town] > Number(price)) {
//             result[state][town] = Number(price);
//         }
//     }
//     let sortedStates = Object.keys(result).sort((a, b)=>{
//         "use strict";
//         return a.toLowerCase().localeCompare(b.toLowerCase());
//     });
 
//     for (let state of sortedStates) {
//         let innerResult = "";
//         innerResult += (state + " -> ");
 
//         let sortedTownsByPrice = Object.keys(result[state]).sort((t1,t2)=>{
//             "use strict";
//             return result[state][t1] - result[state][t2];
//         });
 
//         for (let obj of sortedTownsByPrice) {
//             innerResult += (obj + " -> ");
//             innerResult += (result[state][obj]+ " ");
//         }
 
//         console.log(innerResult.trim());
//     }
// }