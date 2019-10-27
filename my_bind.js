// write a `Function.prototype.myBind(context)` method. It should return a copy 
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind time and call time.


Function.prototype.myBind = function (context, ...bindArgs) {
  const that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};


class Hello{
  constructor(){
    this.answer = "Hello!"
  }
  sayHello(name1, name2){
    return this.answer + name1 + name2;
  }
}

class Goodbye{
  constructor(){
    this.answer = "Goodbye!"
  }
}

let hello = new Hello;
let goodbye = new Goodbye;

let sayHelloFromGoodbye = hello.sayHello.bind(goodbye, "Fanny");
console.log(sayHelloFromGoodbye("Fanny2"))
sayHelloFromGoodbye = hello.sayHello.myBind(goodbye, "Bryan");
console.log(sayHelloFromGoodbye("Bryan2"))
