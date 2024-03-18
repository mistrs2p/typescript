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
    constructor(computer) {
        this.computer = computer;
    }
}
