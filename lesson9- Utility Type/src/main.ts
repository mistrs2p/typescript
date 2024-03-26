// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

// What this does, this requires all property even property verified?:
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignVerified.grade = 77
recordAssignment({ ...assignGraded, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Fatemeh";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Fatemeh: "A",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Fatemeh: { assign1: 99, assign2: 95 },
};

// Pick and Omit
// Pick, what we want from assignment
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

// Omit do the opposit of pick
type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable

type AllPossibleGrades = "Mahdi" | "Ahmad" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// RetrunType

// type newAssign = { title: string; points: number };
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const TSAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(TSAssign);

// Parameters - Derive a type from a function

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const TSAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(TSAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};
console.log(fetchUsers());

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
