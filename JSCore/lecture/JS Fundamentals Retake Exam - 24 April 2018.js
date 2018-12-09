// gladiatorExpenses(7,2,3,4,5);
// gladiatorExpenses(23, 12.50, 21.50, 40, 200);

function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let costs = 0;
    let shieldCount = 0;
    for (let i = 1; i<=lostFightsCount; i++) {
        if(i % 2 === 0 ) {
            costs += helmetPrice;
        }
        if(i % 3 === 0 ) {
            costs += swordPrice;
        }
        if ( i % 2 === 0 && i % 3 === 0) {
            costs += shieldPrice;
            shieldCount ++;
        }
        if(shieldCount % 2 === 0  && shieldCount !== 0) {
            costs += armorPrice;
            shieldCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${costs.toFixed(2)} aureus`);
}



// gladiatorInventory(["SWORD Shield Spear", "Buy Bag", "Trash Shield", "Repair Spear", "Upgrade SWORD-Steel", "Upgrade Spear-Steel", "Fight!"]);
// gladiatorInventory(["SWORD Shield Spear", "Trash Bow", "Repair Shield", "Upgrade Helmet-V", "Fight!"]);

function gladiatorInventory(input) {
    let inventory = input[0].split(" ");
    let commands = input.slice(1);

    for (let commandParams of commands) {
        if (commandParams === "Fight!") {
            break;
        }
        let tokens = commandParams.split(" ");
        let command = tokens[0];
        let equipment = tokens[1];
        
        if( command === "Buy") {
            if(!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if( command === "Trash") {
            if(inventory.includes(equipment)) {
                inventory.splice(inventory.indexOf(equipment),1);
            }
        } else if ( command === "Repair") {
            if (inventory.includes(equipment)) {
                inventory.splice(inventory.indexOf(equipment),1);
                inventory.push(equipment);
            }
        } else if ( command === "Upgrade") {
            let uprade = equipment.split("-");
            let curEquipment = uprade[0];
                if(inventory.includes(curEquipment)) {
                    let index = inventory.indexOf(curEquipment);
                    inventory.splice(index+1, 0, equipment.replace("-",":"));
                }
        }
    }
    console.log(inventory.join(" "));
}

// ancientVsMemory(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
// '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 ']);
// ancientVsMemory([ '32656 19759 32763 0 8 0 86 101 114 111 110 105 107 97 0 0 0 0 0 0 0 0' ]);

function ancientVsMemory(input) {
    let data = input.join(" ").split(" ");
    let result = [];

    for (let index = 0; index < data.length; index++) {
        
        if( data[index] === "32656" && data[index + 1] === "19759" && data[index + 2] === "32763" && data[index + 3] === "0" && data[index + 5] === "0") {
            let count = +data[index + 4];
            let word = "";
            for (let charIndex = index + 6 ; charIndex < index + 6 + count; charIndex++) {
                word += String.fromCharCode(+data[charIndex]);
            }
            result.push(word);
        }
    }

    result.forEach(r => console.log(r));
}


arenaTier(["Pesho -> Duck -> 400", "Julius -> Shield -> 150", "Gladius -> Heal -> 200", "Gladius -> Support -> 250", "Gladius -> Shield -> 250", "Pesho vs Gladius", "Gladius vs Julius", "Gladius vs Gosho", "Ave Cesar"]);


function arenaTier(input) {
    let data = input.slice(0);
    let gladData = {};
    function totalPoins(glad,skils){
        return Object.keys(gladData[glad]).reduce((acc, current) => acc + gladData[glad][current],0);
    }
    function removeNullElements(obj) {
        const newObject = Object.keys(obj).reduce((acc, key) => {
            const _acc = acc;
            if (obj[key] !== null) _acc[key] = obj[key];
            return _acc;
          }, {});
          return newObject;
    }
    for ( let row of data) {
        if( row === "Ave Cesar") {
            break;
        }
        if( row.includes(" -> ")) {
            let tokens = row.split(" -> ");
            let gladiator = tokens[0];
            let technique = tokens[1];
            let skill = +tokens[2];
            if( !gladData.hasOwnProperty(gladiator)) {
                gladData[gladiator] = {};
            }
            if ( !gladData[gladiator].hasOwnProperty(technique)) {
                gladData[gladiator][technique] = Number.MIN_SAFE_INTEGER;
            }
            if( gladData[gladiator][technique] < skill) {
                gladData[gladiator][technique] = skill;
            }
        } else {
            let tokens = row.split(" vs ");
            let first = tokens[0];
            let second = tokens[1];
            if(gladData.hasOwnProperty(first) && gladData.hasOwnProperty(second)) {
                let firstTechs = Object.keys(gladData[first]);
                let secTechs = Object.keys(gladData[second]);
                let common = firstTechs.filter(f=> secTechs.includes(f));
                if(common.length != 0) {
                    let firstPoint = totalPoins(first,common);
                    let secPoint = totalPoins(second,common);
                    let looser;
                    if (firstPoint > secPoint) {
                        looser = second;
                    } else {
                        looser = first;
                    }
                    gladData[looser] = null;
                }
                //FIGTH
            }
        }
        gladData = removeNullElements(gladData);
        let asd="";
        // .map(d=> gladData[d]);
    }
    Object.keys(gladData).sort((a,b) => {
        firstPoints = totalPoins(a,Object.keys(gladData[a]));
        secondPoints = totalPoins(b,Object.keys(gladData[b]));
        if( firstPoints === secondPoints) {
            return a.localeCompare(b);
        }
        return secondPoints - firstPoints;
    })
    .forEach(glad => {
        points = totalPoins(glad,Object.keys(gladData[glad]));
        console.log(`${glad}: ${points} skill`);
        Object.keys(gladData[glad]).sort((a,b) => {
            if (gladData[glad][a] === gladData[glad][b]) {
                return a.localeCompare(b);
            } 
            return gladData[glad][b] - gladData[glad][a];
        })
        .forEach(t => console.log(`- ${t} <!> ${gladData[glad][t]}`));
    });
}