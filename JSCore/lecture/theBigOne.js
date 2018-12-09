// warehouseMachine([
//     "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
//     "IN, Folgers, Black Silk, 2023-03-01, 14",
//     "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
//     "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
//     "IN, Folgers, Black Silk, 2022-01-01, 10",
//     "IN, Lavazza, Intenso, 2022-07-19, 20",
//     "OUT, Dallmayr, Espresso, 2022-07-19, 5",
//     "OUT, Dallmayr, Crema, 2022-07-19, 5",
//     "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
//     "REPORT",
//     "INSPECTION",
//   ]);

  function warehouseMachine(input) {
      let data = input.slice(0);

      let storage = {};

      for ( let line of data) {
        if ( line === "REPORT") {
            // REPORT CASE
            console.log(">>>>> REPORT! <<<<<");
            Object.keys(storage).forEach( curBrand => {
                console.log(`Brand: ${curBrand}:`); 
                Object.keys(storage[curBrand]).forEach(curType => {
                    console.log(`-> ${curType} -> ${storage[curBrand][curType].expDate} -> ${storage[curBrand][curType].quantity}.`);
                });
            });
        } else if( line === "INSPECTION") {
            // INSPECTION CASE
            console.log(">>>>> INSPECTION! <<<<<");
            Object.keys(storage).sort((a,b) => a.localeCompare(b))
            .forEach( curBrand => {
                console.log(`Brand: ${curBrand}:`); 
                Object.keys(storage[curBrand])
                .sort((a,b) =>  {
                    // console.log("aaaaaaaaaaa    -  " + a );
                    let aQuantity = storage[curBrand][a].quantity;
                    let bQuantity = storage[curBrand][b].quantity;

                    return bQuantity - aQuantity;
                })
                .forEach(curType => {
                    console.log(`-> ${curType} -> ${storage[curBrand][curType].expDate} -> ${storage[curBrand][curType].quantity}.`);
                });
            });
        }

        let tokens = line.split(", ").map(l => l.trim());
        let command = tokens[0];
        let brand = tokens[1];
        let type = tokens[2];
        let expDate = tokens[3];
        let quantity = +tokens[4];
        if(command === "IN") {
            if ( !storage.hasOwnProperty(brand) ) {
                storage[brand] = {};
            }
            if ( !storage[brand].hasOwnProperty(type) ) {
                storage[brand][type] = {
                    expDate,
                    "quantity": null};
            }
            if(storage[brand][type].expDate === null) {
                storage[brand][type].expDate = expDate;
                storage[brand][type].quantity = quantity;
            } else if( storage[brand][type]["expDate"].localeCompare(expDate) < 0 ) {
                storage[brand][type].expDate = expDate;
                storage[brand][type].quantity = quantity;
            } else if (storage[brand][type]["expDate"].localeCompare(expDate) === 0) {
                storage[brand][type].quantity += quantity;                
            }
        } else if( command === "OUT") {
            if( storage.hasOwnProperty(brand) && storage[brand].hasOwnProperty(type) ) {
                let curExpDate = storage[brand][type].expDate;
                if( expDate.localeCompare(curExpDate) < 0) {
                    let quantityInStorage = storage[brand][type].quantity;
                    if( quantityInStorage >= quantity) {
                        storage[brand][type].quantity -= quantity;
                    }
                }
            }
        }
      }
  }


//   tickets('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');
// tickets(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');


  function tickets(textInput, commandInput) {
    let data = [];
    data.push(textInput);
    data.push(commandInput);
    const namesRegex = /\s(([A-Z][a-zA-Z]*?)\-([A-Z][a-zA-Z\.]*?)(\-([A-Z][a-zA-Z\.]*?))?)\s/gm;
    const airPortRegex = /\s([A-Z]{3})\/([A-Z]{3})\s/gm;
    const flightNumberRegex = /\s([A-Z]{1,3}[0-9]{1,5})\s/gm;
    const airlineRegex = /\-\s([A-Z][a-zA-Z]*)\*([A-Z][a-zA-Z]*)\s/gm;


    let firstName;
    let secName;
    let lastName;
    let fromAirport;
    let toAirport;
    let flightNumber;
    let airline;

    let match = namesRegex.exec(data[0]);
    if(match) {
        // console.log(match.length);
        // for (let i = 0; i < match.length; i++) {
        //     console.log(match[i]);
        // }
        firstName = match[2];
        secName = match[3];
        lastName = match[5];
        if(lastName !== undefined && !secName.endsWith('.')) {
            match = namesRegex.exec(data[0]);
        } 
        if (lastName === undefined && secName.includes('.')) {
            match = namesRegex.exec(data[0]);
        }

    }

    match = airPortRegex.exec(data[0]);
    if(match) {
        fromAirport = match[1];
        toAirport = match[2];
    }
    
    match = flightNumberRegex.exec(data[0]);
    if (match) {
        flightNumber = match[1];
    }

    match = airlineRegex.exec(data[0]);
    if (match) {
        airline = match[1] + " " + match[2];
    }

    let command = data[1];
    let printName = firstName + " " + secName;
    if(lastName !== undefined) {
        printName += " " +lastName;
    }
    if (command === "name") {
        console.log(`Mr/Ms, ${printName}, have a nice flight!`);
    } else if ( command === 'flight') {
        console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`);
    } else if ( command === 'company' ) {
        console.log(`Have a nice flight with ${airline}.`);
    } else if ( command === 'all' ) {
        console.log(`Mr/Ms, ${printName}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${airline}.`);
    }
  }

  atmMachine([[20, 5, 100, 20, 1],
    [457, 146],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
   ]);

   function atmArr(input) {
    let data = input.slice(0);
    let balance = 0;
    let atm = [];
    
    function withdraw(params) {
        
        let atmMachine = params[0].slice(0);
        let neededMoney = params[1];
    
        
        // .filter(b => atmMachine[b] != 0)
        let sorted = atmMachine.sort((a,b) => b - a)
        .map(bankNote => {
            if(neededMoney != 0 && neededMoney / bankNote >= 1) {
                    neededMoney -= bankNote;
                    bankNote = null;
            }
            return bankNote;
        });
        return sorted.filter( el => el != null);
    }
    for ( let i = 0; i< data.length; i++) {
        
        if ( data[i].length > 2) {

            // INSERT CASE

            let deposit = 0;
            for ( let banknote of data[i]) {
                if(banknote != "0"){
                    atm.push(+banknote);
                    deposit += Number(banknote);
                }
            }
            balance += deposit;
            console.log(`Service Report: ${deposit}$ inserted. Current balance: ${balance}$.`);
        }

        if ( data[i].length === 2)  {
            // WITHDRAW  CASE
            let personBalance = +data[i][0];
            let moneyNeeded = +data[i][1];
            
            if (moneyNeeded > personBalance) {
                console.log(`Not enough money in your account. Account balance: ${personBalance}$.`);
            } else if (balance < moneyNeeded) {
                console.log('ATM machine is out of order!');
            } else {
                if (moneyNeeded >= 0 ){ 
                atm = withdraw([atm,moneyNeeded]);
                balance -= moneyNeeded;
                console.log(`You get ${moneyNeeded}$. Account balance: ${personBalance - moneyNeeded}$. Thank you!`);
                }
            }

        
        }

        if (data[i].length ===1)  {
            let reportBanknote = +action[0];
            if (atm.includes(reportBanknote)) {  
                let count = atm.filter(b=> b === reportBanknote).length;
                console.log(`Service Report: Banknotes from ${reportBanknote}$: ${count}.`)
            } 
        }
    }
}

   function atmMachine(input) {
        let data = input.slice(0);
        let balance = 0;
        let atm = {};


        function withdraw(params) {
        
            let atmMachine = JSON.parse(JSON.stringify(params[0]));
            let neededMoney = params[1];
            while (neededMoney != 0) {
            Object.keys(atmMachine)
            // .filter(b => atmMachine[b] != 0)
            .sort((a,b) => b - a)
            .map(bankNote => {
            if(neededMoney != 0) {
                while ( atmMachine[bankNote] != 0 && neededMoney / +bankNote >= 1) {
                    neededMoney -= +bankNote;
                    atmMachine[bankNote] --;
                }
            }
                return bankNote;
            });
            }
            return atmMachine;
        }



    for ( let action of data) {
        
        if ( action.length > 2) {
            let deposit = 0;
            for ( let banknote of action) {
                if( !atm.hasOwnProperty(banknote) ){
                    atm[banknote] = 0;
                }
                atm[banknote] += 1;
                deposit += Number(banknote);
            }

            balance += deposit;
            console.log(`Service Report: ${deposit}$ inserted. Current balance: ${balance}$.`);
            continue;
            // INSERT CASE
        }

        if ( action.length === 2)  {
            // WITHDRAW  CASE
            let personBalance = +action[0];
            let moneyNeeded = +action[1];
            
            if (moneyNeeded > personBalance) {
                console.log(`Not enough money in your account. Account balance: ${personBalance}$.`);
                continue;
            }
            if (balance < moneyNeeded) {
                console.log('ATM machine is out of order!');
                continue;
            }
                atm = withdraw([atm,moneyNeeded]);
                balance = balance - moneyNeeded;
                console.log(`You get ${moneyNeeded}$. Account balance: ${personBalance - moneyNeeded}$. Thank you!`);
            continue;
        } 

        if (action.length === 1)  {
            let reportBanknote = +action[0];
            if (atm.hasOwnProperty(reportBanknote)) {
                console.log(`Service Report: Banknotes from ${reportBanknote}$: ${atm[reportBanknote]}.`)
            } else {
                console.log(`Service Report: Banknotes from ${reportBanknote}$: 0.`)
            } 

            continue;
        }
    }
   }


//    coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
//    '1.00, coffee, decaf, 0']);

   function coffeeMachine(input) {
       let data = input.slice(0);
        let moneyNeeded = 0;
        let spendMoney = 0;
       for (let row of data) {
           let tokens = row.split(", ").map(el=> el.trim());

           let coins = +tokens[0];
           let drinkType = tokens[1];
           if( drinkType === "coffee") {
               let coffeeType = tokens[2];
               if(coffeeType === "caffeine") {
                   moneyNeeded = 0.8;
               } else if (coffeeType === "decaf") {
                   moneyNeeded = 0.9;
               }
           } else if ( drinkType === "tea") {
               moneyNeeded = 0.8;
           }
           let milk = false;
           if (tokens[3] === "milk") {
               milk = true;
               moneyNeeded = moneyNeeded + +((moneyNeeded * 0.1).toFixed(1));
           } else if (tokens[2] === "milk") {
            moneyNeeded = moneyNeeded + +((moneyNeeded * 0.1).toFixed(1));
           }
           let sugar = 0;
           let sugarQuantity = 0;
           if (milk) {
                sugarQuantity = +tokens[4];
           } else {
            sugarQuantity = +tokens[3];
           }
           if (sugarQuantity >0) {
               moneyNeeded += 0.1;
           }

            if( moneyNeeded <= coins) {
                console.log(`You ordered ${drinkType}. Price: ${moneyNeeded.toFixed(2)}$ Change: ${(coins-moneyNeeded).toFixed(2)}$`);
                spendMoney += moneyNeeded;
            } else {
                console.log(`Not enough money for ${drinkType}. Need ${(moneyNeeded-coins).toFixed(2)}$ more.`);
            }
       }
       console.log(`Income Report: ${spendMoney.toFixed(2)}$`);
   }