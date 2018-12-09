

function orderRects (rectData) {
    function createRect(width, height) {
        let rect = {
            width,
            height,
            'area': function() {
                return rect.width * rect.height;
            },
            'compareTo': function (other) {
                let result = other.area() - rect.area();
                return result || other.width - rect.width;
            }
        };
        return rect;
    }

    let rects = [];
    for ( let [width, height] of rectData) {
        rects.push(createRect(width,height));
    }
    rects.sort((a,b) => {
        return a.compareTo(b);
    });
    return rects;
};

// orderRects([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]);
// // orderRects([[10, 5], [5, 12]]);
// orderRects([[1,1],[15,1],[1,1],[1,15],[7,7],[25,3],[13,3],[15,5]]);


function counterClosure() {
    let counter = 0;
    function getNextCount() {
        console.log(++counter);
    };
    return getNextCount;
}
// let count = counterClosure();
// count();
// count();
// count();
// count();
// count();


// processCommands(['add hello', 'add again', 'remove hello','add again', 'print']);

function processCommands(input) {
    let commandProcessor = (function () {
        let arr = [];
        let add = function (str) {
            arr.push(str);
        };
        let remove = function (str) {
            arr = arr.filter((el) => el != str);
        };
        let print = function () {
            console.log(arr.join(","));
        };
        return {
            add,
            remove,
            print
        };
    })();

    let data = input.slice(0);
    data.forEach((el) => {
        let tokens = el.split(" ");
        let command = tokens[0];
        let param = tokens[1];
        if ( command === "add" ) {
            commandProcessor.add(param);
        }  else if ( command === "remove" ) {
            commandProcessor.remove( param );
        } else if ( command === "print" ) {
            commandProcessor.print();
        }
    });
}


// carEditor(['create c1',
// 'create c2 inherit c1',
// 'set c1 color red',
// 'set c2 model new',
// 'print c1',
// 'print c2']
// );

function carEditor(input) {
    let cars = {};
    let data = input.slice(0);

    let commandProcessor = {
        'create': function([newName, inherits, parentName]) {
            let parent = cars[parentName] != null ? cars[parentName] : null;
            let newCar = Object.create(parent);
            cars[newName] = newCar;
        },
        'set' : function ([obj,prop,value]) {
            cars[obj][prop] = value;
        },
        'print' : function (obj) {
            let curCar = cars[obj];
            let res = [];
            // Object.keys(curCar).forEach((key) => {
            //     res.push(`${key}:${curCar[key]}`);
            // })
            for ( let key in curCar) {
                res.push(`${key}:${curCar[key]}`);
            }
            console.log(res.join(", "));
        }
    };

    data.forEach((elem) => {
        let tokens = elem.split(' ');
        let command = tokens[0];
        if( command === "create") {
            commandProcessor.create([tokens[1], tokens[2], tokens[3]]);
        } else if ( command === "set" ) {
            commandProcessor.set([tokens[1], tokens[2], tokens[3]]);
        } else if ( command === "print" ) {
            commandProcessor.print(tokens[1]);
        }
    });
}


