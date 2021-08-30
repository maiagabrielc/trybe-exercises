// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

const customer1 = {
  firstName: 'Gabriel',
  age: 28,
  job: 'Estudante',
};

const addKey = (obj, key, value) => {
  const object = obj;
  object[key] = value;
  return object;
};

addKey(customer1, 'lastName', 'Maia');
addKey(customer1, 'fullName', `${customer1.firstName} ${customer1.lastName}`);
console.log(customer1);