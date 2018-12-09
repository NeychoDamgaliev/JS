function calcAggregates(input) {
    let arr = input.slice(0);

    let sum = arr.reduce((acc,cur) => {
        acc += cur;
        return acc;
    },0);
    console.log(sum);

    let min = arr.reduce((acc,cur) => {
        return acc<cur ? acc: cur;
    });
    console.log(min);

    let max = arr.reduce((acc,cur) => {
        return acc>cur ? acc: cur;
    });
    console.log(max);

    let prod = arr.reduce((acc,cur) => {
        return acc=acc*cur;
    },1)
    console.log(prod);

    let join = arr.reduce ((acc,cur) => {
        return acc += cur;
    },"");
    console.log(join);  
}


// calcAggregates([2, 3, 10, 5])


commandProcessor(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);
function commandProcessor(input) {
let processor = (function () {
    let str = "";
    let append = function(text) {
        str += text;
    };
    let removeStart = function(index) {
        str = str.slice(index);
    };
    let removeEnd = function(index) {
        str = str.slice(0, str.length - index);
    };
    let print = () => {
        console.log(str);
    };
    return {
        append,
        removeStart,
        removeEnd,
        print
    }
})();

input.forEach( el => {
    let tokens =  el.split(" ");
    processor[tokens[0]](tokens[1]);
})
}