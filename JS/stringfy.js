//String Concatination
const name="Jane Doe";
const age=30;
console.log("My name is "+name+" I am "+age+" years old.");
//Template String
const hello="My name is ${name} and I am ${age} years old";
console.log(hello);
let salary=256000
console.log('My salary is ${salary} KSH.');
//Above metods does not work in my code...
//Additional methods
const s="Hello Friend";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
const word='technology, computers, IT, Code';
console.log(word.split(','));
//Arrays-->Variables that hold multiple values
/*Multi
lined Comments
*/
const numbers=new Array(1,2,3,4,5);
console.log(numbers);
const fruits=['apple','oranges','pears'];
console.log(fruits);
console.log(typeof fruits);
console.log(fruits[1]);
console.log(fruits[10]);
fruits[3]='grapes';
console.log(fruits);
fruits.push('Water Melon');
console.log(fruits);
fruits.unshift("Strawberries");
console.log(fruits);
fruits.push("Pine Apples");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray("apple"));
console.log(fruits.indexOf('Water Melon'));
