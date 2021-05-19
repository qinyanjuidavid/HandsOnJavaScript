console.log("Hello Friend");
 for (let i =0; i<10;i++){
  console.log(i);
 }


 for(let num=0;num<10;num++){
   console.log(num);
 }

let n=0;
for (n;n<100;n++){
  console.log(n);
}

var m=100;
for(m;m>0;m--){
  console.log(m);
}
let t=0;
for(t;t<=10;t++){
  console.log(t);
}

let trial=0;
for(trial;trial<=10;trial++){
  console.log("For Loop Number:"+trial);
}
//while Loops
let x=0;

while(x<10){
  console.log("While Loop Number:"+x);
  x++;
}

let z=10;
while(z>0){
  console.log("While Loop Inverse Number:"+z);
  z--;
}

const todos=[
  {
    id:1,
    text:"Take out trash",
    isCompleted:true,
  },
  {
    id:2,
    text:"Meeting with boss",
    isCompleted:true,
  },
  {
    id:3,
    text:"Dentist appointment",
    isCompleted:false
  }
];

for(let todo=0;todo<todos.length;todo++){
  console.log(todos[todo].text);
}


const company=[
  {
    name:"John Doe",
    age:35,
    department:"IT Department",
    salary:35000
  },
  {
    name:"Jane Doe",
    age:33,
    department:"Human Resource",
    salary:38000
  },
  {
    name:"Jamie Saint Patrick",
    age:38,
    department:"Managerial",
    salary:40000
  }
];
for(let c=0;c<company.length;c++){
  console.log(company[c].name);
}




const newCompany=[
  {
    name:"John Doe",
    age:35,
    department:"IT Department",
    salary:35000
  },
  {
    name:"Jane Doe",
    age:33,
    department:"Human Resource",
    salary:38000
  },
  {
    name:"Jamie Saint Patrick",
    age:38,
    department:"Managerial",
    salary:40000
  }
];

for(s of newCompany){
  console.log(s.salary);
}
//High order array
//forEach
newCompany.forEach(function(c){
  console.log(c.age);
});

//map
