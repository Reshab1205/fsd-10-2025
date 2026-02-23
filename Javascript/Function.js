// function hello() {

// }

// function hello() {

// }

//  var hii = () => {
//     return false
//  }
//  console.log(hii)

//  var hii = true

// let hii = {
//     hello : function () {

//     }
// }

// function sayhello() {
//     console.log('Hello')
//     setTimeout(() => {
//         ask()
//     }, 2000)

// }

// function ask() {
//     console.log('How are you')
// }

// sayhello()

// const x = parseInt(prompt("Enter first value: "));
// const y = parseInt(prompt("Enter 2nd value: "));

// // const add = () => {

// // }

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// function mul(a, b) {
//   return a * b;
// }

// function div(a, b) {
//   return a / b;
// }

// function addGst(amt, tax) {
//   const gst = (amt * tax) / 100 
//   const totalAmt = amt + gst
//   return totalAmt
// }

// console.log(addGst(1000, 28))


// const products = [
//   {
//   product_name:"Shoes",
//   product_mrp: 2000,
//   product_gst:18
// },
// {
//    product_name:"Shoes",
//   product_mrp: 2000,
//   product_gst:18
// }
// ]

function EmiCalculator(amt, int, time) {
  const intAmt = (amt * int * 1) / 100 
  const totalInt = intAmt * time
  const totalAmt = amt + totalInt
  const totalMonths = time * 12;
  const emi = totalAmt / totalMonths;
  return emi
}

console.log(EmiCalculator(1000000, 10, 10))