import Person from "./class/person";

const person = new Person("Ram", "Kulkarni");

document.getElementById("nameSpan").innerHTML = person.getFirstName() + " " + person.getLastName();