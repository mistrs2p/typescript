// Index Signatures
// Useful when creating objects but not know exact names of object keys, but know shape of the object

// interface TransactionObj {
//   readonly [index: string]: number;
// }

interface TransactionObj {
  readonly [index: string]: number;

  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transations: TransactionObj): number => {
  let total = 0;
  for (const transaction in transations) {
    total += transations[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));
// todaysTransactions[prop] = 40;

console.log(todaysTransactions["Dave"]);
//////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Mahdi",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// if i dont know the interface use below
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");

////////////////////

// interface Incomes {
//   [key: string]: number;
// pizza: string
// }

type Streams = "salary" | "bonus" | "sidehustle";

// using utility type => Record
type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
