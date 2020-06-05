//Section 8
//Inheritance

//Exercises

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__:head;
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:table;
};

let pockets = {
  money: 2000,
  __proto__:bed;
};



////AJAX REQUESTS

//THis is an asynch request. Code reaches send, request is
//sent to a new thread, and the stack continues without waiting
//for send to finish

window.onload = function(){

  let http = new XMLHttpRequest();

  ////Every time the ready state changes, it prints the request
  http.onreadystatechange = function(){
    console.log(http);
    if(http.readyState == 4 && http.status == 200){ //when data received
      //do something
      console.log(JSON.parse(http.response)
    }
  }

  //use methods on this http request variable we made
  //prepare to get data
  //type of request, url to data, asynch or not (T/F)
  http.open("GET","learning-web-dev/tweets.json", true);

  //Tell JS to get data with send method
  http.send();

  console.log(http);
  //Look at ready states (0,1,2,3,4)


};



//CALLBACK Functions

window.onload = function(){

  //synchronous example

  let fruits = ["banana", "apple", "pear"];
  //The passed in function is a Call back function
  //This is a synchronous CALLBACK

  function callback(data){
    console.log(data);
  }
  fruits.forEach(callback);


  //Asynchronous callback

  $.get("learning-web-dev/tweets.json",callback);

};




//Promises


//promise is returned before data is brought back, immediately
let promise = get("learning-web-dev/tweets.json"); // new promise, placeholder
//once promise fulfilled, use then method for what to do.
promise.then(function(tweets){ //
  console.log(tweets);
  return get("learning-web-dev/tweets2.json");
}).then(function(tweets2){
  console.log(tweets2);
}).catch(function(error){
  console.log(error);
});
