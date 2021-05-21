function AddNumbers(num1,num2){
  const sum=num1+num2;
  console.log(sum);
}
AddNumbers(4,5);
//Setting default values in the arguments
function SubNumbers(n1=1,n2=2){
  console.log(n2-n1);
}
SubNumbers();

//Returning
function MultiplyNumbers(m1,m2){
  return m1*m2;
}
console.log(MultiplyNumbers(5,5));
