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

const totalStudents = (obj) => {
  const keys = Object.keys(obj);
  let total = 0;
  for (const key in keys) {
    total += obj[keys[key]].numeroEstudantes;
  }
  return total;
};

console.log(totalStudents(allLessons));
// console.log(allLessons);
// console.log(lesson2);
// console.log(showKeys(lesson1));
// console.log(showValues(lesson3));