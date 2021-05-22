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
console.log(p2.dob);

//Recarp
function Employee(name,department,salary){
  this.name=name;
  this.department=department;
  this.salary=salary;
}
var emp=new Employee("John Doe","Human Resource",23000);
console.log(emp);
console.log(emp.salary);
var emp2=new Employee("Jane Doe","IT Department",40000);
console.log(emp2);
console.log(emp2.name);
