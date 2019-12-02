// write a `Function.prototype.myApply(context, argsArr)` that accepts an object 
// and an array of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the arguments array. Do NOT use the
// built-in `Function.prototype.apply` or `Function.prototype.call` methods in 
// your implementation.


Function.prototype.myApply = function (context, argsArr = []){
  return this.bind(context, ...argsArr)()
}

Cat = function Cat(name) {
  this.name = name;
};

Cat.prototype.sayHello = function () {
  return this.name + " says hello!";
};

Cat.prototype.greetOne = function (otherCat) {
  return this.name + " says hello to " + otherCat.name;
};

Cat.prototype.greetTwo = function (otherCat1, otherCat2) {
  return this.name + " says hello to " + otherCat1.name + " and " +
    otherCat2.name;
};

sally = new Cat("Sally");
markov = new Cat("Markov");
curie = new Cat("Curie");


// invokes the function it is called on
console.log(sally.greetOne.myApply(sally, [markov])); //"Sally says hello to Markov"


//can take any number of arguments
console.log(sally.greetTwo.myApply(sally, [markov, curie])); //"Sally says hello to Markov and Curie"


// should call the function method style on the context
console.log(sally.sayHello.myApply(markov)); //"Markov says hello!"
