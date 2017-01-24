var kittycat = [{name: "Dingo", favouriteFood: "chips with brown suace"}];


var createCatClass = function (name, favouriteFood){
  var catul = document.createElement('ul');
  catul.classList.add('cat');
  var licatname = document.createElement('li');
  licatname.innerText = name;
  var licatfood = document.createElement('li');
  licatfood.innerText = favouriteFood;
  catul.appendChild(licatname);
  catul.appendChild(licatfood);
  return catul;
}


var appendElements = function (cats, catul){
  cats.appendChild(catul);
}


var addCat = function (name, favouriteFood){
  var catul = createCatClass(name, favouriteFood);
   var cats = document.getElementById("cats");
   appendElements(cats, catul);
 }


var app = function () {
  for (var cat of kittycat){
   addCat(cat.name, cat.favouriteFood);
  }
}

window.onload = app;

 

// Homework

// Use the code provided to complete the following tasks:

// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
// Refactor the code to make it easy to add a new cat, just like we did with the quotes.
// OPTIONAL: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.
// OPTIONAL: Style the site!
// Hint: Be careful with the order you append your elements to each other! Also be careful with what you need to pass when setting an image's width via the DOM.