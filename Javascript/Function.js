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

// function EmiCalculator(amt, int, time) {
//   const intAmt = (amt * int * 1) / 100 
//   const totalInt = intAmt * time
//   const totalAmt = amt + totalInt
//   const totalMonths = time * 12;
//   const emi = totalAmt / totalMonths;
//   return emi
// }

// console.log(EmiCalculator(1000000, 10, 10))

// function salaryBonus(salary, bonusPer) {
//   const bonus = (salary * bonusPer) / 100
//   return totalAmt = salary + bonus
// }

// console.log(salaryBonus(50000, 20))



// const arr = [1,2,3,4,5,6];
// // const arr1 = [6,7,8,9,10];
// console.log(arr[5])

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// const d = arr.push(7)
// console.log(d)
// console.log(arr)

// const data = arr.map(item => {
//   return item * 2
// })




// console.log(arr)
// console.log(data)

// console.log(arr.fill(2, 3, 5))
// console.log(arr.at(5))
// console.log(arr1.concat(arr))
// console.log(arr.copyWithin(0,2,3))
// console.log(arr.copyWithin(1,3))


// console.log(arr.)
// console.log(typeof(arr))

const arr = [1,2,1,3,5,2,5,7,8,3]
let arr1 = []
for(let i = 0; i < arr.length; i++) {
let check = true
  for(let j = i+1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        check = false
      }
  }
  if(check == true) {
    arr1.push(arr[i])
  }
}

console.log(arr1)
//[1,3,2,5]