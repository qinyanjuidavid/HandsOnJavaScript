const x=11;
const color=x>10 ? 'red' :'blue';
console.log(color);

const day=5

const d=1===day?'Sunday':2===day?'Monday':3===day?"Tuesday":day===4?"Wednesday":day===5?"Thursday":day===6?"Friday":day===7?"Sutday":"Invalid Entry";
console.log(d);
//Switch
let c="blue"
switch(c){
  case 'red':
    console.log("Color is red");
    break;
  case 'blue':
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}
//Ttial

const dayOfTheWeek=7
switch(dayOfTheWeek){
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day!");
    break;
}
