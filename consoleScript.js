function myFunction(){
  console.log("abcd");
  const PI=3.141
  console.log(PI);
  var name="David";
  let colle="Taita Taveta University";
  console.log("my name is",name,", I am a student at",colle,".");
}
myFunction()

// Trial
function newFunct(name,age,school){
  console.log("My name is",name,"I am",age,"years old","and i school in",school);

}
newFunct("David",23,"TTU");
newFunct("Micheal",16,"Silver Hill");
//Single Argument
function BeMyFunction(myString){
  console.log(myString);
}
BeMyFunction("Abcd..");
BeMyFunction("efgh...");
BeMyFunction(2356);
//Multiple Arguments
function MultipleArguments(myString,myString2=0){
  console.log(myString);
  console.log(myString2);

}
MultipleArguments("AbCD","Awesome");
MultipleArguments("EFGH",1234);
MultipleArguments("Single Argument");//The other parameter appears undefined
// Return

function ReturnFunct(name,age,job){
  //all the code
  return {key:"Value"};
  // anything below the return is not printed
  console.log(age);
  console.log(job);
  console.log(name);

}
let myResult=ReturnFunct("Day",24,"Software Engineer");
console.log(myResult);

// Working with Functions Further
// Return a Function
function myKeyValue(empName,Depart,salary){
  //New Code
  return function(){
    console.log('Hello, this is my new Function');
  };
  console.log(empName);
  console.log(Depart);
  console.log(salary);
}
let myNewResults=myKeyValue('John Doe',"Human Resource",12000);
console.log(myNewResults())
// Working with an if in the Function
function myTest(){
  var myVariable=100;
  var myAge=20;
  // let iWant;
  // Declaring let outside all the blocks makes it accessible globally
  console.log(iWant);
  if(myAge==20){
    var iWant="Pizza";
    // let iWant="Pizza";
    //let is scope oriented, it results to an error if the variable iWant is used outside the scope if
  }
  console.log(myVariable);
  console.log(myAge);
  console.log(iWant);
  //
}

myTest();

//Working with let in the Global and Let Scope
function myFunctWithLet(){
  var age=20;
  let newWant="Ugali";
  if( age==20){
    let newWant="Sukuma Wiki";
    console.log(newWant);
  }
  console.log(newWant);
}
myFunctWithLet();

//Trial II
function GetMeABeer(){
  var age=20;
  let drink="Juice";
  if(age>=18){
    let drink="Beer";
    console.log(drink);
  }
  console.log(drink);
}
GetMeABeer();

// Variable Scope
function myFunction(){
  var a=100;
  console.log(a);
}
myFunction()
// console.log(a)
// The variable is locally and cant be accessed outside the function
