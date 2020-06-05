//6. make separate module files

let counter = function(arr){
  return "There are " + arr.length + " elements in this array";
};

//console.log(counter(["bob", "joe", "bobert"]));

let adder = function(a,b){
  return `The sum of the two numbers is ${a+b}`;
};

let pi = 3.142;

//Want to access all of these three things when we require this module

//module.exports = counter;
// module.exports is just an empty object, so you can add properties,
//for example:

module.exports.counter = counter;
module.exports.adder = adder; //adding to different properties
module.exports.pi = pi;

//Instead of just doing module exports for each one, can do this:

module.exports.minus = function(a,b){
  return a-b;
}

//Or, could do:
/*
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi

};
*/
