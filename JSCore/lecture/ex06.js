// heroicInventory(['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']
// );

function heroicInventory(input) {
    let heroData = [];
    let data = input.slice(0);

    heroData =  data.map(hero => {
       let heroTokens = hero.split(" / ");
       let heroName = heroTokens[0];
       let heroLevel = +heroTokens[1];
       let heroItems = [];
       if(heroTokens.length >2) {
           heroItems = heroTokens[2].split(", ");
       }

       let curHero = {
           "name": heroName,
           "level" : heroLevel,
           "items" : heroItems
       }
       return curHero;
    });
    console.log(JSON.stringify(heroData));
}
function registerOfHeroes(input) {
 
    let heroData=[];
   
    for (let i = 0; i < input.length; i++){
        let currentHeroArg = input[i].split(" / ");
        let currentHeroName=currentHeroArg[0];
        let currentHeroLvl=+currentHeroArg[1];
        let currentHeroItem=[];
        let hero={};
 
        if (currentHeroArg.length>2)        {
         currentHeroItems=currentHeroArg[2].split(', ');
             hero={
                name: currentHeroName,
                level: currentHeroLvl,
                items:currentHeroItems}
        }
        else {
             hero={
            name: currentHeroName,
            level: currentHeroLvl,
            items: currentHeroItem
            };
        }
 
 
        heroData.push(hero);
 
 
 
    }
    console.log(JSON.stringify(heroData));
 
}

// jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
// '{"name":"Teo","position":"Lecturer","salary":1000}',
// '{"name":"Georgi","position":"Lecturer","salary":1000}']);

function jsonTable(input) {
    let data = input.slice(0);
    let result = "<table>\n";
        for ( let i = 0; i < data.length; i++) {
            let parsed = JSON.parse(data[i]);
            result += "	<tr>\n";
            Object.keys(parsed).forEach( (key) => {
                result += `		<td>${parsed[key]}</td>\n`; 
            })
            result += "	</tr>\n";
        }
    result += "</table>";
    console.log(result);
}


// cappyJuice(['Kiwi => 234',
// 'Pear => 2345',
// 'Watermelon => 3456',
// 'Kiwi => 4567',
// 'Pear => 5678',
// 'Watermelon => 6789']
// );

function cappyJuice(input) {
    let data  = input.slice(0);
    let factory = {};
    let bottles = {};
    data.forEach((row) => {
        let tokens = row.split(" => ");
        let fruit = tokens[0];
        let quantity = +tokens[1];
        if(!factory.hasOwnProperty(fruit)) {
            factory[fruit] = 0;
        } 
            factory[fruit] += quantity;
        
        if(factory[fruit] >= 1000) {
            bottles[fruit] = parseInt(factory[fruit] / 1000) ;
        }
    });
    Object.keys(bottles).forEach(bottle => {
        console.log(`${bottle} => ${bottles[bottle]}`);
    });
}

// storeCatalogue(['Appricot : 20.4',
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10']
// );

function storeCatalogue(input) {
    let data = input.slice(0);
    let catalog = {};
    data.forEach(item => {
        let firstChar = item.substring(0,1);
        if(!catalog.hasOwnProperty(firstChar)){
            catalog[firstChar] = [];
        }
        let itemTokens = item.split(" : ");
        item = `${itemTokens[0]}: ${itemTokens[0]}`;
        catalog[firstChar].push(item);
    });
 
    Object.keys(catalog)
    .sort((a,b) => {
        return a.localeCompare(b);
    })
    .forEach(key => {
        console.log(key);
        catalog[key].sort((a,b) => {
           return a.localeCompare(b);
        })
        .forEach(item => {
            console.log(`  ${item}`);
        });
    });
}


// autoCompany(['Audi | Q7 | 1000',
// 'Audi | Q6 | 100',
// 'BMW | X5 | 1000',
// 'BMW | X6 | 100',
// 'Citroen | C4 | 123',
// 'Volga | GAZ-24 | 1000000',
// 'Lada | Niva | 1000000',
// 'Lada | Jigula | 1000000',
// 'Citroen | C4 | 22',
// 'Citroen | C5 | 10']
// );

function autoCompany(input) {
    let data = input.slice(0);
    let company = {};
    let index = 0;
    data.forEach(row => {
        let tokens = row.split(" | ");
        let brand = tokens[0];
        let model = tokens[1];
        let quantity = +tokens[2];

        if(!company.hasOwnProperty(brand)){
            company[brand] = {
                "index": index++
            };
        }
        if(!company[brand].hasOwnProperty(model)){
            company[brand][model] = 0;
        }
        company[brand][model] += quantity;
        
    });
    Object.keys(company).sort((a,b) => {
       return company[a].index > company[b].index;
    })
    .forEach(brand => {
        console.log(brand);
        Object.keys(company[brand])
        .filter(name => name !=="index")
        .forEach(model => {
            console.log(`###${model} -> ${company[brand][model]}`);
        });
    });
}


// systemComponent(['SULS | Main Site | Home Page',
// 'SULS | Main Site | Login Page',
// 'SULS | Main Site | Register Page',
// 'SULS | Judge Site | Login Page',
// 'SULS | Judge Site | Submittion Page',
// 'Lambda | CoreA | A23',
// 'SULS | Digital Site | Login Page',
// 'Lambda | CoreB | B24',
// 'Lambda | CoreA | A24',
// 'Lambda | CoreA | A25',
// 'Lambda | CoreC | C4',
// 'Indice | Session | Default Storage',
// 'Indice | Session | Default Security']
// );

function systemComponent(input){
    let data = input.slice(0);
    let sys = {};
    data.forEach(comp => {
       let tokens = comp.split(" | ");
       let systemName = tokens[0];
       let componentName = tokens[1];
       let subComponentName = tokens[2];

       if(!sys.hasOwnProperty(systemName)) {
            sys[systemName] = {};
       }
       if(!sys[systemName].hasOwnProperty(componentName)){
            sys[systemName][componentName] = [];
       }
       if(!sys[systemName][componentName].includes(subComponentName)){
        sys[systemName][componentName].push(subComponentName);
       }
       
    });

    Object.keys(sys).sort( (a,b) => {
        let aCount = Object.keys(sys[a]).length;
        let bCount = Object.keys(sys[b]).length;
        let countCompare = bCount > aCount;
        let alfaBetCompare = a.toLowerCase().localeCompare(b.toLowerCase());
        if (aCount === bCount) {
            return alfaBetCompare;
        } 
        return countCompare;
    })
    .forEach(system=> {
        console.log(system);
        Object.keys(sys[system]).sort((a,b) => {
            return a.length > b.length;
        })
        .forEach(subSys => {
            console.log(`|||${subSys}`);
            sys[system][subSys]
            // .sort((a,b) => {
            //     return a.toLowerCase().localeCompare(b.toLowerCase());
            // })
            .forEach(subS => console.log(`||||||${subS}`));
        });
    });
}


userNames(['Denise',
'Ignatius',
'Ignatius',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']
);

function userNames(input) {
    let names = [];
    input.forEach(name => {
        if(!names.includes(name)){
            names.push(name);
        }
    });

    let sorted = names.sort((a,b) =>sorting(a,b) )
    .forEach (n => console.log(n));

    function sorting(a,b) {
            if(a.length === b.length) {
                return a.localeCompare(b);
            }
            return a.length - b.length;
    }
}