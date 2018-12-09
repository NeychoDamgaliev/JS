function nonDecreasing(arr) {
    let lastMax = -Infinity;
    let rez = arr
    .filter((a) => {
        if( a >= lastMax) {
            lastMax = a;
            return a;
        }
    })
    .forEach(e => console.log(e));
}

nonDecreasing([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );