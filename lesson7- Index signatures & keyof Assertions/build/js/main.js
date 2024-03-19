"use strict";
// Index Signatures
// Useful when creating objects but not know exact names of object keys, but know shape of the object
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transations) => {
    let total = 0;
    for (const transaction in transations) {
        total += transations[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions[prop] = 40;
console.log(todaysTransactions["Dave"]);
const student = {
    name: "Mahdi",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// if i dont know the interface use below
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
