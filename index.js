// Import stylesheets
import './style.css';

//take a moment to study the class
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

//the class instantiation, method call, and console.log()
const halley = new Dog('Halley');

console.log(halley.name);   //Halley
console.log(halley.behavior);   //0

//method call
halley.incrementBehavior();

console.log(halley.name);   //Halley
console.log(halley.behavior);   //1
