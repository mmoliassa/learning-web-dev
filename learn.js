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
  alert("I Don't Know You");
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
alert(`hi ${x}`);
object3.age;
//Can use variable that is prompted from user input to query object
let nameq = prompt("what is your query??")
alert(object3[nameq]);

//Prompt for added value. This can be done with keys too
let addition = prompt("what do you want to add?");
object3.added = addition;
alert(object3.added);
console.log(object3);


//Function that returns an object
//short form (name of keys same as parameter names)
function testObject(first, last, age, birthplace){
  return {
    age,
    first,
    last,
    birthplace
  };
}

let object4 = testObject("John","Doe",20, "New York");


//For...in loop
for(let key in object4){
  console.log(typeof object4[key]);
  if(typeof object4[key] == "number"){
    object4[key] = 100;
  }
}
