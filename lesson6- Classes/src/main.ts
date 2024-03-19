// Classes

class Coder1 {
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

class Coder {
  //  we dont want to initialize it right away wit exclanation manrk "!"
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number, // use just in this class
    protected lang: string = "Typescript" // Use in derived classes also
  ) {
    this.name = name;
    this.music = music;
    // this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, i'm ${this.age} years old`;
  }
}

const Mahdi = new Coder("Mahdi", "Rap", 30, "Farsi");
console.log(Mahdi.getAge());
// console.log(Mahdi.lang);
// console.log(Mahdi.age);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Fatemeh = new WebDev("Mona Computer", "Fatemeh", "Lofi", 25);
console.log(Fatemeh.getLang());
// console.log(Fatemeh.lang);
// console.log(Fatemeh.age);

////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  // name: string;
  // instrument: string;
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Matthew", "Setar");
console.log(Page.play("Tombac"));
////////////////////

class Peeps {
  // static, It applies to the class directly itself
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    // this.name = name
    this.id = ++Peeps.count;
  }
}

const Ahmad = new Peeps("Ahmad");
const Abbas = new Peeps("Abbas");
const Negar = new Peeps("Negar");

console.log(Peeps.count);
console.log(Abbas.id);
// /////////////////

class Band {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Params is not an array of string");
  }
}

const MyBands = new Band();

MyBands.data = ["Man", "Love", "To"];

console.log(MyBands.data);

MyBands.data = [...MyBands.data, "ZZ", " LalaLand"];

console.log(MyBands.data);

// MyBands.data = "Halle";
