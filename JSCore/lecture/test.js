function circleArea(radius){
    let area = Math.PI * radius * radius;
    console.log(area);
    console.log(Math.round(area * 100) / 100);
}

function evenOrOdd(num) {
    if (!Number.isInteger(num)) {
        console.log("invalid");
    } else if (num %2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
function multiply(a, b){
    return a*b;
}
function boxesAndBottles(n,k){
    let result = Math.ceil(n / k);
    return result;
}
function leapYear(year) {
    let leap =  (year % 4 ===0 && year % 100 !==0) || (year %400 === 0);
    if (leap) {
        console.log('yes'); 
    } else {
        console.log('no'); 
    }

}

function circleArea(r) {
    let area = Math.PI * r * r;
    // console.log(typeof(area));
    console.log(+area);
}

function triangleArea(a,b,c) {
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * ( sp -a) * (sp - b) * (sp - c));
    console.log(area);
}

console.log("0"  == false);
// circleArea(5);
// leapYear(1900);
// let val = false || "" || '';
// let val = 1 && 5 && true;
// console.log(typeof(val));
// console.log(val);
// console.log(boxesAndBottles(20,5));
// console.log(boxesAndBottles(15,7));
// console.log(boxesAndBottles(5,10));
// console.log(multiply(5,7));
// evenOrOdd(0);
// console.log(Math.round(5.555,0.01));