
//traditional function
function add(a, b) {
    return a + b
}
//Arrow function
const add = (a, b) => {
    return a + b
}
const add = (a, b) => a + b
const division = a => a/2
console.log(add(2,4))

//Higher Order Function
let sayHello = () =>{return `Hello` }
// let sayBye = () => alert()`Bye`
//sayHello(); // “Hello” will be alerted
// Let’s create a function that takes an argument and call it as if it was a function
let doSomething = somethingToDo => {
 somethingToDo()
}
//  Now any function we send to “doSomething()” function will be called right away
console.log(doSomething(sayHello)) // “Hello” will be alerted
