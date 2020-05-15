let response = prompt("Who's There?");
if(response === "Admin"){
  let password = prompt("Password");
  if(password === "TheMaster"){
    alert("Welcome!");
  }
  else if(password == ""|| password == null){
    alert("Canceled");
  }
  else{
    alert("Wrong Password");
  }
}
else if(response == ""|| response == null){
  alert("Canceled");
}
else{
  alert("Ion Know You");
}


let p = prompt("give me a number");

while(p<=100&&p!=null){
  p = prompt("give me a number");
}

//Section 3. Objects

let object1 = new Object();
let object2 = {};
let object3 = {
  "name": "Matthew",
  "age":20,
  "birth month":"December",
  "birth year": 1999,
  "college": "University of Michigan"
};
let x = object3.name;
object3.age;
let namer = prompt("what is your query??")
alert(`hi ${x}`);
alert(object3[namer]);
