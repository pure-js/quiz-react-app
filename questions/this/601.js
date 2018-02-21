function Person() {
  this.canSleep = true;
  this.canHide = false;
}

Person.prototype.canSleepF = function () {
  return this.canSleep;
};

function Ninja() {
  this.canHide = true;
}
Ninja.prototype = Person.prototype;

Ninja.prototype.canHideF = function () {
  return this.canHide;
}

var person = new Person();
var ninja = new Ninja();
console.log(ninja.canSleepF());
console.log(person.canHideF());
