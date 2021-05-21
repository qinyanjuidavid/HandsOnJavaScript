function Person(firstName,lastName,dob){
  this.firstName=firstName;
  this.lastName=lastName;
  this.dob=dob;
}
const p1= new Person("John ","Doe","4-3-1970");
console.log(p1);
const p2=new Person("Jane", "Doe","12-12-1970");
console.log(p2);
console.log(p1.firstName);
console.log(p2.firstName);
