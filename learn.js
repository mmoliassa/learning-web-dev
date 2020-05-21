"use strict";

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
//Loops through all the keys in the object

for(let key in object4){
  console.log(typeof object4[key]);
  if(typeof object4[key] == "number"){
    object4[key] = 100;
  }
}


//Object Copying and References

//Object Methods

let object5 = {
  name: "John",
  last: "Doe",
  age: 30,
  son:{
    name: "Bob",
    age: 1
  }
};

//function specific to the object
object5.getName = function(){
  console.log(object5.name);
};

//general function added as a property of the object
function getProp(object,property){
  return object[property];
}
function sayName(){
  console.log(this.name);
}

object5.sayName = sayName;
let test = getProp(object5,"age");
console.log(test);
object5.sayName(); //Shows name of object called on



//4.4 Exercises

//Calculator
let calculator = {
  read(){
    this.object1 = +prompt("Give First Value");
    this.object2 = +prompt("Give Second Value");
  },
  sum(){
    return Number(this.object1) + Number(this.object2);
  },
  mul(){
    return this.object1 * this.object2;
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


//4.5 Exercises

//Calc Constructor
function Calculator(){
  this.read = function() {
    this.val1 = +prompt("val 1?");
    this.val2 = +prompt("val 2?");
  }
  this.sum = function() {
    return this.val1 + this.val2;
  }
  this.mul = function(){
    return this.val1 * this.val2
  }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//Accumulator
function Accumulator(startingValue){
  this.value = startingValue;
  this.read = function(){
    this.value+=(+prompt("Give a number"));
  }
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values


//Arrays

let arr = [1,2,3,4,5];
arr.push(6);
let x = arr.shift();
arr.unshift(8);
console.log(arr);
console.log(x);

//Exercises

let arr = [];
arr.push(function sumInput() {
  let addition = prompt("Give a number");
  //console.log(typeof addition);
  //console.log(addition != null);
  let sum = 0;
  while(typeof addition == "number" && addition != null && addition != ""){
    arr.push(+addition);
    sum+=addition;
    addition = prompt("Number");
  }
  return sum;
})
arr[0]();



//Find and filter

let usernmames = [
  {name:"Bob", id: 1},
  {name:"Phil", id: 2},
  {name:"Tom", id: 3},
  {name:"Joe", id: 4},
  {name:"Bob", id: 5},
  {name:"James", id: 6},
  {name:"James", id: 7},
  {name:"Bob", id: 8},
  {name:"John", id: 9},
  {name:"Mike", id: 10},
];
let bobAndJames = usernames.filter(person => person.name == "Bob" || person.name == "James");
console.log(bobAndJames);
let bob = usernames.find(person => person.name == "Bob");
console.log(bob);

//Array Exercises

function camelize(str){
  let arr = str.split('-');
  let arr2 = arr.map((s,index) => (index == 0)? s: s[0].toUpperCase() + s.slice(1));
  arr2.forEach(alert);
  return arr2.join("");
}

//filter range

let filterRange = (arr, a, b) => arr.filter(value => value<=b && value>=a);

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//filter in place

function filterRangeInPlace(arr, a, b){
  for(let i = 0; i<arr.length; ++i){
    let
  }
}

//copy and sort Array

copySorted(arr){
  let reverse = arr.slice();
  return reverse.sort();
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)


//Map to names

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);/* ... your code */

alert( names ); // John, Pete, Mary

//Map to Objects

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(item => {
  fullname: item.name+" "+item.surname,
  id: item.id});/* ... your code ... */


/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith



//MAPS

//Unique values
function unique(arr){
  let s1 = new Set(arr);
  let output = [];
  for(element of s1){
    output.push(element);
  }
  return output;
}

//Better code
return Array.from(new Set(arr));


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O


//Object iteration

function sumSalaries(salaries){
  let sum = 0;
  for(let value of Object.values(salaries)){
    sum+=value;
  }
  return sum;
}

//Destructuring

let user = {
  name: "John",
  years: 30
};
let [name, age, isAdmin = false] = user;
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries){
  let max = 0;
  let mName = null;
  for(let [name,value] of Object.entries(salaries)){
    if(value > max) max = value;
    mName = name;
  }
  return mName;
}
