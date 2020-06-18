let express = require("express");

let app = express(); //Express app running

app.set("view engine", "ejs");

app.get("/", function(request,response){
  response.send("This is the homepage");
}); //respond to get request
app.get("/contact", function(request,response){
  response.sendFile(__dirname + "/index.html");
}); //respond to get request

//Instead of send file, for partial views, use render
app.get("/contacts", function(request,response){
  response.render("contact");
}); //respond to get request
app.get("/home", function(request,response){
  response.render("index");
}); //respond to get request

app.get("/profile/:id", function(request, response){
  response.send("You requested to see the profile with the id of " + request.params.id);
});
app.get("/profiles/:name", function(request, response){
  let data = {age: 20, job: "internship", hobbies: ["reading", "film", "hiking"]}; //More DATA ADDED
  response.render("profile", {person: request.params.name, data: data});
});


app.listen(3000); //listening to port 3000
