//spread and rest
// const arr = [1,2,3]
// const arr1 = [4,5,6]

// let x = [...arr, ...arr1]
// console.log(x)
// [1,2,3,4,5,6]

// const [y,a,...x] = [1,2,3,4,5,6]
// console.log(x)

// const obj = {
//     fname: "Reshab",
//     lname: "kumar",
//     age:28,
//     city: "Bhopal"
// }

// const {age,...x} = obj

// console.log(x)

const arr = [1,2,3]
const x = [...arr]

x.push(4)
console.log(x)
console.log(arr)