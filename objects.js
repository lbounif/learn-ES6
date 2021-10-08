/* ES6 features */
//classes
class Car {
    constructor(name1, year1, color1) {
      this.name = name1
      this.year = year1
      this.color = color1
    }
}
//creation of objects
let myCar1 = new Car("Ford", 2014, "Gray")
let myCar2 = new Car("Audi", 2019, "Green")
console.log(myCar1, myCar2)

//Object.entries and object.values
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
}
let entries = Object.entries(person)
console.log(entries)
console.log(Object.values(person))
