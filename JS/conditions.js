const x=20;
if (x===10){
  console.log("X is 10");
}
else if(x>10){
  console.log("X is greater than 10");
}
else{
  console.log("X is not 10");
}

let maths=77;
let sst=75;
let scie=70;
let kis=78;
let eng=65;

let total=maths+sst+scie+kis+eng;
// var avg=total/5;
let avg=56;
if (avg>=80 && avg<=100){
  console.log("A");
}
else if(avg>=74 && avg<=79){
  console.log("A-");
}
else if(avg>=66 && avg<=73){
  console.log("B+");
}
else if(avg>=60 && avg<=65){
  console.log("B");
}
else if(avg>=54 && avg<=59){
  console.log("B-");
}
else if(avg>=47 && avg<=53){
  console.log("C+");
}
else if(avg>=40 && avg<=46){
  console.log("C");
}
else if(avg>=34 && avg <=39){
  console.log("C-");
}
else if(avg>=29&&avg<=24){
  console.log("D+");
}
else if(avg>=19&&avg<=23){
  console.log("D");
}
else if(avg>=14&&avg<=18){
  console.log("D-");
}
else if(avg>=5 && avg<=13){
  console.log("E");
}
else if(avg>=0 && avg <=4){
  console.log("F");
}

else{
  console.log("Invalid Marks");
}
