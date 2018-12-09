let result = (function() {

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
  
    class Form {
        constructor(...txtboxes) {
            this._element = $("<div>").addClass("form");
            this.textboxes = txtboxes;
        }
        set textboxes(txtboxes) {
            let allValid = true;
            txtboxes.forEach((box) => {
                if (!box instanceof Textbox) {
                    allValid = false;
                    throw new Error("Wrong type of element!!!")
                }
            })
            if(allValid) {
                this._textboxes = txtboxes;
                for ( let txtb of this._textboxes ) {
                    for ( let tb of txtb._elements){
                        this._element.append($(tb));
                    }
                }
            }
        }
        submit() {
            let allValidTB = true;
            this._textboxes.forEach((b) => {
                if(b.isValid()) {
                    for ( let tb of b._elements){
                        $(tb).css("border","2px solid green");
                    }
                } else {
                    for ( let tb of b._elements){
                        $(tb).css("border","2px solid red");
                    }
                    allValidTB = false;
                }
            })
            return allValidTB;
        }
        attach(selector) {
            $(selector).append($(this._element));
        }
    }
    return {
        Textbox: Textbox,
        Form: Form
    }
}());



  let Textbox = result.Textbox;
  let Form = result.Form;
  let username = new Textbox("#username",/[^a-zA-Z0-9]/);
  let password = new Textbox("#password",/[^a-zA-Z]/);
  let name = new Textbox(".name",/[^a-zA-Z]/);
  username.value = "username";
  password.value = "password2";
  let form = new Form(username,password);
  form.attach("#root");
