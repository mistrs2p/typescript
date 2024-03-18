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
  constructor(public computer) {}
}
