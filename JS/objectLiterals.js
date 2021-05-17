const person={
  firstName:'John',
  lastName:'Doe',
  age:30,
  hobbies:['music','movies','sports'],
  address:{
    street:'50 main St',
    city:'Boston',
    state:'MA'
  }
}
console.log(person);
console.log(person.firstName);
console.log(person.hobbies);
console.log(person.firstName,person.lastName)
console.log(person.hobbies[1]);
console.log(person.address.city);
//Destracturing
const {firstName,lastName,address:{city}}=person;
console.log(firstName);

const {address:{state}}=person;
console.log(state);
person.email='john@gmail';
console.log(person);
person.tel="+12563456";
console.log(person);
