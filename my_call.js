// Write a `Function.prototype.myCall(context)` method, that accepts an object, 
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.


Function.prototype.myCall = function(context, ...args){
  return this.bind(context, ...args)();
}


class Hello {
  constructor() {
    this.answer = "Hello!"
  }
  sayHello(name1, name2) {
    return this.answer + name1 + name2;
  }
}

class Goodbye {
  constructor() {
    this.answer = "Goodbye!"
  }
}

let hello = new Hello;
let goodbye = new Goodbye;

let sayHelloFromGoodbye = hello.sayHello.call(goodbye, "Fanny", "Fanny2");
console.log(sayHelloFromGoodbye)
sayHelloFromGoodbye = hello.sayHello.myCall(goodbye, "Bryan", "Bryan2");
console.log(sayHelloFromGoodbye)