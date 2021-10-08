//Array functions
//.find()
//.forEach()
//.filter()
//.map()
//.reduce()

//FIND
const people = [
    { name: 'Amine', age: 15 },
    { name: 'Max', age: 5 },
    { name: 'Lilia', age: 9 },
   ]

// JavaScript
function findPerson(name) {
 for (let i = 0; i < people.length; i++) {
   let person = people[i]
   if (person.name == name) {
     return person
   }
 }
}
// ES6
const findPerson = (name) => {
 return people.find(person => person.name == name)
}
console.log(findPerson("Max"))

//Example 2 Find
const numbers = [4, 9, 16, 25, 29]
let first = numbers.find(myFunction)
function myFunction (value, index, array) {
  return value > 18
}
// //or
let first = numbers.find(value => {
  return value > 18
})
// // console.log(first)

//FOREACH
const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }]

// JavaScript
function showEachOne(name) {
 for (let i = 0; i < people.length; i++) {
   console.log(people[i].name)
 }
}

// ES6
const showEachOne = ( ) => people.forEach(person => console.log(person.name))
console.log(showEachOne())

/*   FILTER  */
const products = [{name:"Milk",price:15}, {name:"Water", price:9}, {name:"Bread", price:5}]

// JavaScript
function filterProducts() {
 let cheapProducts = []
 for (let i = 0; i < products.length; i++) {
   if (products[i].price < 10) cheapProducts.push(products[i])
 }
 return cheapProducts
}

// ES6
const filterProducts = () => products.filter(product => product.price < 10)

/* MAP gives copy of array */
const products = [
    { name: 'Milk', price: 15 },
    { name: 'Water', price: 9 },
    { name: 'Bread', price: 5 },
   ]

   // JavaScript
   function changeProducts() {
    for (let i = 0; i < products.length; i++) {
      products[i].price += 2 //products[i].price = product[i].price + 2
    }
    return products
   }
   
   // ES6
   const changeProducts = () =>
    products.map(product => ({ ...product, price: product.price + 2 }))
 
    console.log(changeProducts())
   console.log(products)

/* REDUCE  */

//includes
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.includes("Mango")
console.log(fruits.includes("Mango"))
console.log(fruits.includes("hello"))