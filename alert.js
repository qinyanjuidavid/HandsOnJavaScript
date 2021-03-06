// alert, prompt,confirm
// alert("Hello");
// alert({'a':'b'})
myNum=10
// alert(myNum)
// confirm('Are you sure you want to delete this?')
// var results=confirm("Are you sure you want to delete this?")
// console.log(results);
function MyFunction(){
// var newResults=confirm("Are you sure you want to delete this?");
var newResults=false;
if(newResults==true){
  console.log("The File was successfully deleted!");
}
else if(newResults==false){
  console.log("The process was successfully aborted!");
}
else{
  console.log("This line is always printed...");
}
}

MyFunction();

// let results=prompt("What is your name?");
// console.log(results);
// If one cancels it returns null meaning no value

//Trial
// let name=prompt("Enter your name:");
// let age=prompt("Enter your age:");
// let job=prompt("Enter your job:");
// console.log("My name is",name,",I am",age,"I am a",job);
