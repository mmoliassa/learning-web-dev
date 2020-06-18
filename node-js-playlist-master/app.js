console.log('hi');
//alert("hi");

//4. Global Object
//Things that were available in window object
//are also available in this global object

console.log('hi mane')//works in node

/*
setTimeout(function(){
  console.log("3 seconds have passed");
}, 3000);

let time = 0;
*/
/*
setInterval(function(){
  time+=2;
  console.log(time + " seconds have passed");
}, 2000);
*/
/*
let timer = setInterval(function(){
  time+=2;
  console.log(time + " seconds have passed");
  if(time > 5){
    clearInterval(timer);
  }
}, 2000)

console.log(__dirname);
console.log(__filename);
*/


//5.

//normal Function
function sayHi(){
    console.log('hi');
}

//function expression

let f = function(){
  console.log('BYE');
}
f();


//6.

//Use require

//let counter = require("./counter");
//console.log(counter(['one', 'two','three']));

//7. Module Patterns
//Say we want to add more than just the count in count.js
//Rename as stuff.js

let stuff = require("./stuff"); //store whole object in stuff object
console.log(stuff.counter(['one', 'two','three']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));



//8

let events = require('events');
//element.on('click', function(){})

let myEmitter = new events.EventEmitter(); //custom event

myEmitter.on('someEvent', function(message){
  console.log(message);
});

myEmitter.emit('someEvent', 'The event was emitted');

let util = require("util"); //Utilities built in module

let Person = function(name){
  this.name = name;
};
//Want the person to inherit the event emitter so that we can attach custom
//events to people

//Anything created with person constructor can have custom events attached to it
util.inherits(Person, events.EventEmitter);

let james = new Person("james");
let mary = new Person("mary");
let ryu = new Person("ryu");

//make custom events for each
let people = [james,mary,ryu];
//Taking each person object and attaching a listener to it
//Attaching custom event to each person
people.forEach(function(person){
  person.on("speak", function(message){ //Attaching listeners to each object
    console.log(person.name + " said: " + message);
  }); //
});
//emitting events
james.emit("speak", "hi everyone");
ryu.emit("speak", "Hello");


//9. Reading and Writing files

let fs = require("fs");

//Store what is read in a variable
//let readMe = fs.readFileSync("./readMe.txt", "utf8");
//console.log(readMe);

//fs.writeFileSync("writeMe.txt", readMe);


fs.readFile('./readMe.txt', 'utf8', function(err,data){
  //console.log(data);
  fs.writeFile("writeMe.txt", data, function(){});//Do this after file read
});


//10.

fs.unlink('writeMe.txt', function(){});

//making directory, then reading the file
//creates directory, then reads and writes a file to the directory
fs.mkdir("stuff", function(){
  fs.readFile("readMe.txt", "utf8", function(err,data){
    fs.writeFile("./stuff/writeMe.txt", data, function(){
    });
  });
});



//12. SErver
/*
let http = require("http");

let server = http.createServer(function(request,response){
  console.log("request was made: " + request.url);
  response.writeHead(200,{"content-type": "text/plain"}) //Setup response headers
  response.end("HI"); // response body itself
});

server.listen(3000, "127.0.0.1");
console.log("Now listening to Port 3000");
*/

//14. Create Readable Stream
//15. write stream
//Need fs
//let fs = require("fs");
/*
let myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
let myWriteStream = fs.createWriteStream(__dirname + "/writeME.txt")
//start listening for event called data.
myReadStream.on("data", function(chunk){
  console.log("new chunk received: ");
  console.log(chunk);
  myWriteStream.write(chunk)
});
*/

//16. Pipes

//let myWriteStream2 = fs.createWriteStream(__dirname + "/writeME2.txt")
//myReadStream.pipe(myWriteStream2); //Used instead of code above



//using code from 12, 14-15:
let http = require("http");

let server = http.createServer(function(request,response){
  console.log("request was made: " + request.url);
  response.writeHead(200,{"content-type": "text/plain"}) //Setup response headers
  let myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
  myReadStream.pipe(response)
  //response.end("HI"); // response body itself
});

server.listen(3000, "127.0.0.1");
console.log("Now listening to Port 0");



//17. Use HTML
let server2 = http.createServer(function(request,response){
  console.log("request was made: " + request.url);
  response.writeHead(200,{"content-type": "text/html"}) //Setup response headers
  let myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(response)
  //response.end("HI"); // response body itself
});

server2.listen(3001, "127.0.0.1");
console.log("Now listening to Port 3001");

//18. JSON

let server3 = http.createServer(function(request,response){
  console.log("request was made: " + request.url);
  response.writeHead(200,{"content-type": "application/json"}) //Setup response headers
  let obj = {
      name: "Joe",
      job: "Ninja",
      age: 15
  };
  //Want to send this object back as json to the client
  response.end(JSON.stringify(obj));
});
server3.listen(3002, "127.0.0.1");
console.log("Now listening to Port 3002");

let server4 = http.createServer(function(req, response){
  console.log("request was made: " + req.url);
  console.log(req.url);
  if(req.url === '/home' || req.url === '/'){ //THIS IS A ROUTE
    response.writeHead(200, {"Content-Type": "text/html"});
    //Create read stream for html, pipe to the response object
    fs.createReadStream(__dirname + "/index.html").pipe(response);
    //response.end()
  }
  else if(req.url === "/contact"){
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + "/contact.html").pipe(response);
  }
  else if(req.url === "/api/ninjas"){
    //USUALLY GET THIS DATA FROM A DB, not making it here
    let ninhas = [{name: "ryu", age: 30}, {name: "hi", age: 10}];
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(ninhas));
  }
  else{
    response.writeHead(404, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + "/404.html").pipe(response);
  }
});
server4.listen(3003, "127.0.0.1");
console.log("Now listening to Port 3003");
