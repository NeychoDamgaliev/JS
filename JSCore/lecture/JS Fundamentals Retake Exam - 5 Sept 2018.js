// f1Race(["Vetel Hamilton Raikonnen Botas Slavi",
// "Pit Hamilton",
// "Overtake LeClerc",
// "Join Ricardo",
// "Crash Botas",
// "Overtake Ricardo",
// "Overtake Ricardo",
// "Overtake Ricardo",
// "Crash Slavi"]
// );

function f1Race(input) {
    let racers = input.shift().split(" ");
    // let data = input.slice(1);
    for (let event of input) {
        let tokens = event.split(" ");
        let action = tokens[0];
        let pilot = tokens[1];
        let pilotExists = racers.includes(pilot);
        let index = racers.indexOf(pilot);
        if ("Join" === action) {
            if(!pilotExists) {
                racers.push(pilot);
            }
        } else if ("Crash" === action) {
            if(pilotExists) {
                racers.splice(index,1);
            }
        } else if ("Pit" === action) {
            if (pilotExists) {
                if(index !== racers.length - 1){
                    racers.splice(index,1);
                    // racers[index] = null;
                    // racers.push(pilot);
                     racers.splice(index + 1, 0, pilot);
                }
            }
        } else if ("Overtake" === action) {
            if (pilotExists && index > 0) {
                
                let bubble = racers[index];
                racers[index] = racers[index-1];
                racers[index-1] = bubble;
                
            }
        }
        // racers = racers.filter(r => r != null);
    }
    console.log(racers.join(" ~ "));
}



// DNAex(['!@ру?би#=4--57<<polecat',
//     '?do?@#ri#=4--89<<polecat',
//     '=12<<cat',
//     '!vi@rus?=2--142',
//     '@pa!rcu>ba@cteria$=13--234<<mouse',
//     '?!cur##viba@cter!!=11--680<<cat',
//     'Stop!']);

    function DNAex(input) {
        let lines = input.slice(0);
        const regex = /([a-z\!\@\#\$\?]+)=([\d]+)--([\d]+)<<([a-z]+)/;
        let beans = {};
        for ( let line of lines) {
            if(line ==="Stop!") {
                break;
            }
            let match = line.match(regex);
            if(match) {
                let pat = /[\!\@\#\$\?]+/gi;
                let geneName = match[1].replace(pat,"");
                let geneLength = +match[2];
                let geneCount = +match[3];
                let organismName = match[4];
                if(geneName.length === geneLength) {
                    if(!beans.hasOwnProperty(organismName)){
                        beans[organismName] = 0;
                    }
                    beans[organismName] += geneCount;
                }
                // console.log(`Gene: ${geneName} -> GeneNameLength: ${geneLength} -> GeneCount: ${geneCount} -> Organism: ${organismName}`)
            }
        }
        Object.keys(beans)
        .sort((a,b) => {
            return beans[a] < beans[b];
        })
        .forEach( b => console.log(`${b} has genome size of ${beans[b]}`));
    }


    championship(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Ferrari -> Sebastian Vettel -> 18",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]
    );

    function championship(input) {
        let results = input.slice(0);
        let teams = {};
        results.forEach( item => {
            let tokens = item.split(" -> ");
            let team = tokens[0];
            let pilot = tokens[1];
            let points = +tokens[2];
            if(!teams.hasOwnProperty(team)){
                teams[team] = {};
            }
            if(!teams[team].hasOwnProperty(pilot)) {
                teams[team][pilot] = 0;    
            }
            teams[team][pilot] += points;
        });
        Object.keys(teams).sort((a,b) => {
            let teamApoints = Object.keys(teams[a]).reduce((acc,cur) => acc +teams[a][cur],0);
            let teamBpoints = Object.keys(teams[b]).reduce((acc,cur) => acc +teams[b][cur],0);
            return teamApoints < teamBpoints;
        })
        .slice(0,3)
        .forEach(team => {
            let points = Object.keys(teams[team]).reduce((acc,cur) => acc +teams[team][cur],0);
            console.log(`${team}: ${points}`);
            Object.keys(teams[team]).sort((a,b) => {
               return  teams[team][a] < teams[team][b];
            })
            .forEach(player => console.log(`-- ${player} -> ${teams[team][player]}`));
        });
    }