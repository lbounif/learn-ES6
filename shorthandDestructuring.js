//Shorthand 
const name1 = "Lynda"
const user = {
    name1:name1, //name1,
    location: "Algiers"
}
console.log(user)

//Object destructuring
const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    no: "NO"
}
// const label = product.label
// const stock = product.stock
//destructuring
// const {label, stock} = product
// console.log(label)
// console.log(stock)
// rename variables
// const { label: productLabel, stock, no} = product
// console.log(productLabel + " "+ stock + " " + no)

const { label: productLabel, stock, no = 5} = product
console.log(productLabel + " "+ stock + " " + no)
console.log(`${productLabel} ${stock} ${no}`)

//using function
const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}
console.log(transaction("order", product))