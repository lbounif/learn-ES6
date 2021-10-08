//Problem of copying objects (references)
let array1 = [1,2,3]
let array2 = [4,5,6]

// Using ES5
let array3 = array1.concat(array2)
// console.log(array3)//  [1,2,3,4,5,6]

// Using ES6
let array4 = [...array1, ...array2, 7]
console.log(array4)//  [1,2,3,4,5,6,4,5,6,7]

//Create two copies of an object
let object1 = { firstName: 'John', lastName: 'Brown' }
let object2 = { age: 25 }

let newObject1 = { ...object1, ...object2, profession: "teacher" }
console.log(newObject1)
/* {
firstName:"John",
lastName:"Brown",
age:25,
profession: "teacher"
}*/

//The rest parameter (...) 
const sum = (...args) => {
    console.log("args: ", args)
    //[4, 9, 16, 25, 29, 100, 66, 77]
    let sum = 0
    for (let arg of args) sum += arg
    return sum
  }
let x = sum(4, 9, 16, 25, 29, 100, 66, 77)

console.log(x)