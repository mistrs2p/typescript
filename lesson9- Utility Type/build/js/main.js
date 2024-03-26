"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
// What this does, this requires all property even property verified?:
const recordAssignment = (assign) => {
    // send to database etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 77
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Fatemeh: "A",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Fatemeh: { assign1: 99, assign2: 95 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// RetrunType
// type newAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const TSAssign = createNewAssign("Utility Types", 100);
console.log(TSAssign);
const assignArgs = ["Generics", 100];
const TSAssign2 = createNewAssign(...assignArgs);
console.log(TSAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
console.log(fetchUsers());
fetchUsers().then((users) => console.log(users));
