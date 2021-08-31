const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const add = (obj, key, value) => {
  const objectKey = obj;
  objectKey[key] = value;

  return objectKey;
};

// const showKeys = (obj) => Object.keys(obj);

// const showValues = (obj) => Object.values(obj);

add(lesson2, 'turno', 'manhã');

const allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 });

// const totalStudents = (obj) => {
//   const keys = Object.keys(obj);
//   let total = 0;
//   for (const key in keys) {
//     total += obj[keys[key]].numeroEstudantes;
//   }
//   return total;
// };

// const getValueByNumber = (obj, number) => Object.values(obj)[number];

// const verifyPair = (obj, key, value) => {
//   const arr = Object.entries(obj);
//   let isEqual = false;
//   for (const index in arr) {
//     if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//   }
//   return isEqual;
// };

// const mathEst = (obj) => {
//   const arr = Object.keys(obj);
//   let total = 0;
//   for (const index in arr) {
//     if (obj[arr[index]].materia === 'Matemática') {
//       total += obj[arr[index]].numeroEstudantes;
//     }
//   }
//   return total;
// };

const getInfo = (obj, name) => {
  const arrLessons = [];
  let allStudents = 0;
  const array = Object.values(obj);
  for (const index in array) {
    if (array[index].professor === name) {
      arrLessons.push(array[index].materia);
      allStudents += array[index].numeroEstudantes;
    }
  }
  return { lessons: arrLessons, estudantes: allStudents };
};

const createReport = (lessons, name) => {
  const report = {
    professor: name,
  };
  // report.professor = name;
  Object.assign(report, getInfo(lessons, name));
  return report;
};

console.log(createReport(allLessons, 'Maria Clara'));
// console.log(mathEst(allLessons));
// console.log(verifyPair(lesson2, 'professor', 'Carlos'));
// console.log(getValueByNumber(lesson1, 1));
// console.log(totalStudents(allLessons));
// console.log(allLessons);
// console.log(lesson2);
// console.log(showKeys(lesson1));
// console.log(showValues(lesson3));