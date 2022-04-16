// Import stylesheets
import './style.css';

// class
// **************************************

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

console.log(halley.name); //Halley
console.log(halley.behavior); //0

//method call
halley.incrementBehavior();

console.log(halley.name); //Halley
console.log(halley.behavior); //1

// constructor
// ********************************************

//1. Create an empty class named Surgeon.
//2. Inside the Surgeon class, create a constructor() method that accepts two parameters: name and department.
//3. Inside the Surgeon constructor(), create name and department properties and set them equal to your input parameters.
//4. In the Surgeon constructor, prepend the name and department properties with an underscore (_).
//5. Inside of the constructor(), add a property named _remainingVacationDays and set it equal to 20.
//6. Under the constructor(), create a getter called name that returns the value saved to _name.
//6. Under the name getter, create a getter called department that returns the value saved to _department.
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name(){
    return this._name;
  }

  get department(){
    return this._department;
  }

  get remainingVacationDays(){
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff
      }

}

//4. Create an instance of the Surgeon class — set the name to 'Francisco Romero' and department to 'Cardiovascular'.

// Save the instance to a constant variable called surgeonRomero.
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

//5. Create an instance of the Surgeon class — set the name to 'Ruth Jackson' and department to 'Orthopedics'.

// Save the instance to a constant variable called surgeonJackson.
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');


// Methods
// *********************************

