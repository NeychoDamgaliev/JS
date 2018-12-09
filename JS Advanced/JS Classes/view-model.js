// class Textbox {
//     constructor(selector, regex) {
//         this._invalidSymbols = regex;
//         this._elements = $(selector);
//         this._value = this._elements.val();
//         let that = this;
//         this._elements.on("input", function () {
//             that.value = $(this).val();
//         })
//     }
//     get value() {
//         return this._value;
//     }

//     set value(value) {
//         this._value = value;
//         for (let el of this._elements) {
//             $(el).val(this._value);
//         }
//     }
//     get elements() {
//         return this._elements;
//     }
//     isValid(){
//         if(this._invalidSymbols.match(this._elements.val())) {
//             return false;
//         }
//         return true;
//     }
// }



// let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
// let inputs = $('.textbox');

// inputs.on('input',function(){console.log(textbox.value);});



// class Textbox {
//     constructor(selector,regex) {
//         // this.value
//         this._elements = $(selector);
//         this._invalidSymbols = regex;
//         this._value = $(this._elements[0]).val();

//         let that = this;
//         this._elements.on("input",function () {
//             that.value = $(this).val();
//         })
//     }
//     get elements() {
//         return this._elements;
//     }

//     get value() {
//         return this._value;
//     }
//     set value(newVal) {
//         this._value = newVal;
//         for (let el of this._elements) {
//             $(el).val(newVal);
//         }
//     }
//     isValid(){
//         return !this._invalidSymbols.test(this.value);
//     }
// }

class Textbox {
    constructor(selector,regex) {
        this._elements = $(selector);
        this._value = $(this._elements[0]).val();
        this._invalidSymbols = regex;
        let classContext = this;
        this._elements.on("input", function () {
            classContext.value = $(this).val();
        })
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
        for ( let el of this._elements){
            $(el).val(newValue);
        }
    }
    get elements() {
        return this._elements;
    }
    isValid() {
        return !this._invalidSymbols.test(this._value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});


