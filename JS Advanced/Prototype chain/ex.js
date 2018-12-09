function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color,gasWeight,ribbonColor,ribbonLength) {
            super(color,gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            };
        }
        get ribbon() {
            return this._ribbon;       
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color,gasWeight,ribbonColor,ribbonLength,text) {
            super(color,gasWeight,ribbonColor,ribbonLength);
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    };
}


function people() {
    class Employee {
        constructor(name, age) {
            if(new.target === Employee) {
                throw new Error("Abstract class!")
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work(){
            let currentTask = this.tasks.shift();
            console.log(`${this.name} ` + currentTask);
            this.tasks.push(currentTask);
        }

        getSalary(){
            return this.salary;
        }

        collectSalary(){
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push("is working on a simple task.");
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name,age);
            this.tasks.push("is working on a complicated task.");
            this.tasks.push("is taking time off work.");
            this.tasks.push("is supervising junior workers.");
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push("scheduled a meeting.");
            this.tasks.push("is preparing a quarterly report.");
        }
        getSalary(){
            return super.getSalary() + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

function posts() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let string =  super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if(this.comments.length > 0){
                string += "\nComments:";
                this.comments.forEach(c => string += `\n * ${c}`);
            }

            return string;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

function Elemelons() {
    class Melon{
        constructor(weight, melonSort){
            if(new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }
    }
    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Water";
        }

        toString(){
            return `Element: ${this.element}\n` + super.toString();
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Fire";
        }

        toString(){
            return `Element: ${this.element}\n` + super.toString();
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Earth";
        }

        toString(){
            return `Element: ${this.element}\n` + super.toString();
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Air";
        }

        toString(){
            return `Element: ${this.element}\n` + super.toString();
        }
    }
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
        morph(){
            if(this.element == "Water"){
                this.element = "Fire";
            } else if (this.element == "Fire"){
                this.element = "Earth";
            } else if(this.element == "Earth"){
                this.element = "Air";
            } else {
                this.element = "Water";
            }
        }
    }
    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    };
}

let Melolemonmelon = Elemelons().Melolemonmelon;
let mel = new Melolemonmelon(150, "Melo");
console.log(mel.element);
console.log(mel);
mel.morph();
console.log(mel.element);
console.log(mel);
mel.morph();
console.log(mel.element);
console.log(mel);
mel.morph();


console.log(mel.toString());