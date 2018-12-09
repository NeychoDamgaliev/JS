// splitByDelimiter('One-Two-Three-Four-Five', '-');
// splitByDelimiter('http://platform.softuni.bg', '.');

function splitByDelimiter(string, delimiter) {
    let result = string.split(delimiter);
    result.forEach(element => {
        console.log(element);
    });
}

// repeatStringNTimes('repeat', 5);
// repeatStringNTimes('magic is real', '3');

function repeatStringNTimes(string, repCount) {
    let result = string.repeat(repCount);
    console.log(result);
}

// console.log(stringStartsWithSrt('How have you been?', 'how'));
// console.log(stringStartsWithSrt('The quick brown fox…', 'The quick brown fox…'));

function stringStartsWithSrt(string, elem) {
    return string.startsWith(elem);
}   

// console.log(stringEndsWithSrt('This sentence ends with fun?', 'fun?'));
// console.log(stringEndsWithSrt('This is Houston, we have…', 'We have…'));

function stringEndsWithSrt(string, elem) {
    return string.endsWith(elem);
}


// stringCapitalization('Capitalize these words');
// stringCapitalization('Was that Easy? tRY thIs onE for SiZe!');

function stringCapitalization(item) {
    let resultStr = item
    .toLowerCase()
    .split(' ')
    .map( word => word.substring(0,1).toUpperCase() + word.substring(1))
    .join(' ');
    console.log(resultStr);
}

// captureTheNumbers(['The300', 
// 'What is that?', 
// 'I think it’s the 3rd movie.', 
// 'Lets watch it at 22:45']
// );
// captureTheNumbers(['123a456', 
// '789b987', 
// '654c321', 
// '0']
// );
// captureTheNumbers(['Let’s go11!!!11!',
// 'Okey!1!']
// );
// captureTheNumbers(['asdasdasd']);
function captureTheNumbers(input) {
    const regex = /[0-9]+/gm;
    let string = input.join(' ');
    let match = regex.exec(string);
    let result = [];
    while (match) {
        result.push(match[0]);
        match = regex.exec(string);
    }
    console.log(result.join(' '));
}


// findVariableNameInAString('The _id and _age variables are both integers.');
// findVariableNameInAString('Calculate the _area of the _perfectRectangle object.');
// findVariableNameInAString('__invalidVariable _evenMoreInvalidVariable_ _validVariable');

function findVariableNameInAString(input) {
    const regex = /\b_([a-zA-Z\d]+)\b/gm;
    let match = regex.exec(input);
    let result = [];
    while(match) {
        result.push(match[1]);
        match = regex.exec(input);
    }

    console.log(result.join(','));
}

// console.log(findOccurencesOfWord('The waterfall was so high, that the child couldn’t see its peak.','the'));
// console.log(findOccurencesOfWord('How do you plan on achieving that? How? How can you even think of that?', 'how'));
// console.log(findOccurencesOfWord('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'));

function findOccurencesOfWord(input,word) {
    const regex = new RegExp(`\\b${word}\\b`,"gmi");
    let matchCollection = input.match(regex);
    if(matchCollection != null ){
        return matchCollection.length;
    }
    return 0;
    
}


// extractTheLinks(['Join WebStars now for free, at www.web-stars.com', 
// 'You can also support our partners:', 
// 'Internet - www.internet.com', 
// 'WebSpiders - www.webspiders101.com', 
// 'Sentinel - www.sentinel.-ko']);

// extractTheLinks(['Need information about cheap hotels in London?', 
// 'You can check us at www.london-hotels.co.uk!', 
// 'We provide the best services in London.', 
// 'Here are some reviews in some blogs:', 
// '"London Hotels are awesome!" - www.indigo.bloggers.com', 
// '"I am very satisfied with their services" - ww.ivan.bg', 
// '"Best Hotel Services!" - www.rebel21.sedecrem.moc']
// );

function extractTheLinks(input) {
    let string = input.join(' ');

    const regex = /(www\.)[a-zA-Z\d-]+(\.[a-z]+)+/gm;
    let match = regex.exec(string);

    while(match) {
        console.log(match[0]);
        match = regex.exec(string);
    }
}


// secretData(["Agent *Ivankov was in the room when it all happened.", 
// 'The person in the room was heavily armed.', 
// 'Agent *Ivankov had to act quick in order.', 
// 'He picked up his phone and called some unknown number.']);
// secretData(['I think it was +555-49-796', 
// "I can't really remember...", 
// 'He said something about "finishing work"', 'with subject !2491a23BVB34Q and returning to Base _Aurora21', 
// 'Then after that he disappeared from my sight.', 
// 'As if he vanished in the shadows.', 
// 'A moment, shorter than a second, later, I saw the person flying off the top floor.', 
// "I really don't know what happened there.", 
// 'This is all I saw, that night.', 
// 'I cannot explain it myself...']
// );

function secretData(input) {
    input.forEach( element => {
        let line = element.replace(/(\*[A-Z][a-zA-Z]*)(?=\s|\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/gm,
        (find) => '|'.repeat(find.length));
        console.log(line);
    })
}