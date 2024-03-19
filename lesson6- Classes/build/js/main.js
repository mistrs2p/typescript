"use strict";
// Classes
class Coder1 {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
class Coder {
    constructor(name, music, age, // use just in this class
    lang = "Typescript" // Use in derived classes also
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        // this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, i'm ${this.age} years old`;
    }
}
const Mahdi = new Coder("Mahdi", "Rap", 30, "Farsi");
console.log(Mahdi.getAge());
// console.log(Mahdi.lang);
// console.log(Mahdi.age);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Fatemeh = new WebDev("Mona Computer", "Fatemeh", "Lofi", 25);
console.log(Fatemeh.getLang());
class Guitarist {
    // name: string;
    // instrument: string;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Matthew", "Setar");
console.log(Page.play("Tombac"));
////////////////////
class Peeps {
    constructor(name) {
        this.name = name;
        // this.name = name
        this.id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
// static, It applies to the class directly itself
Peeps.count = 0;
const Ahmad = new Peeps("Ahmad");
const Abbas = new Peeps("Abbas");
const Negar = new Peeps("Negar");
console.log(Peeps.count);
console.log(Abbas.id);
// /////////////////
class Band {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Params is not an array of string");
    }
}
const MyBands = new Band();
MyBands.data = ["Man", "Love", "To"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ", " LalaLand"];
console.log(MyBands.data);
// MyBands.data = "Halle";
