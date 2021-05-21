function greet(){
   console.log("Hello there");
}
greet();
//Using Return in Functions
function myFunct2(){
  return 100;
}
//declaring a function
let results=myFunct2();
console.log(results);

let myObj=function speak(){
  console.log("Hello there");
}
myObj();
myObj();
myObj();


function newFunct(name){
  console.log("Have a good day",name);
};
newFunct("John Doe");
newFunct("Jane Doe");

//Setting the defaults for the parameters
function justSpeak(name="John",time="night"){
  console.log("Good",time,name);
};
justSpeak("Marion","Morning");
justSpeak();
justSpeak("Shaun");
