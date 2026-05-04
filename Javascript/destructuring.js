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

// const arr = [1,2,3]
// const x = [...arr]

// x.push(4)
// console.log(x)
// console.log(arr)


// const arr = [1,2,3,4,5]

// const users = [
//     {name: 'Reshab', age:28},
//     {name: 'Ravi', age:27},
//     {name: 'Shubham', age:29},
//     {name: 'Baibhav', age:28},
//     {name: 'Avinash', age:29},
// ]
// console.log(users[0])

// const x = function () {
// console.log('Hello')
// }

// x()


// const mul = () => {
//     console.log('Bye')
// }
// mul()

// const res = users.map((data) => data.age)
// res.forEach((data) => {
//     // console.log(data)
//     smsService.send(data)
// })
// console.log(res)

// const result = arr.map((data) => data * 2)
// console.log(result)
// console.log(arr)

// const result = arr.map((data)=> {return data * 2})
// console.log('result', result)
// const result1 = arr.filter((data)=> {return data * 2})
// console.log('result1', result1)

const arr = [1,2,3,4,5]
const arr1 = [6,7,8,9]

const arr2 = [...arr, ...arr1]
console.log(arr2)


const [x,y,z,...a,d] = arr
// console.log(x,y)
// console.log(a)

// const x = arr.map((data) => {return data % 2 === 1} )
// console.log(x)
// const y = arr.filter((data1) => {return data1 % 2 === 0} )
// console.log(y)

// {}
// const data = arr.reduce((x,y,z) => {
//     console.log('y',z)
//     return x + y
// },0)



// const obj = {
//     id:1,
//     name:"Reshab"
// }

// const {name, id} = obj
// console.log(name)

// console.log(obj['id'])

// const users = [
//     {id:1, name:"A", age:12, email: "a@gmail.com"},
//     {id:2, name:"B", age:13, email: "b@gmail.com"},
//     {id:3, name:"C", age:14, email: "c@gmail.com"}
// ]

// const data1 = users.reduce((acc, curr) => {
//      acc[curr.id] = [curr.name, curr.age, curr.email]
//      return acc
// },{})

// for(let i in data1) {
//     console.log(data1[i])
// }
// console.log(data1)

// const apple = [[1,2], [3,4],[5,6]]

// const data2 = apple.reduce((acc, curr) => {
//     acc = acc.concat(curr)
//     return acc
// }, [])
// console.log(data2)
// [1,2,3,4,5,6]




