import Animal from './animal';

export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
    console.log(new Animal());
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }
}