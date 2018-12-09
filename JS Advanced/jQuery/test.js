function commonDivider(a, b) {
    let m = a;
    let n = b;    
    residual = a;
    while ( residual != 0) {
        if(m < n ) {
            let temp = m;
            m = n;
            n = temp;
        }
        m = m % n;
        residual = m;
        
    }
    console.log(n);
}

// commonDivider(9, 12);
function simpleNumbers(maxElem) {

    let numbers = [];
    let simpleNumbersArray = [];
    for (let i = 2; i<=maxElem; i++) {
        if(numbers[i] === undefined) {
            let j = i * i;
            while ( j <= maxElem ) {
                numbers[j] = 1;
                j = j + i;
            }
            simpleNumbersArray.push(i);
        }
    }

    console.log(simpleNumbersArray.join());
}

simpleNumbers(100);