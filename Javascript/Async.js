// console.log('Hello World')
// console.log('Hii')
// console.log('Bye')

// console.time()
// setTimeout(() => {
//     console.log('Hello World')
// })
// console.timeEnd()

// console.log('Hii')
// setTimeout(() => {
//     console.log('Ist')
//     setTimeout(() => {
//         console.log('2nd')
//         setTimeout(() => {
//             console.log('3rd')
//             setTimeout(() => {
//                 console.log('4th')
//             },3000)
//         },2000)
//     },1000)
// })

// Promise.resolve().then(()=> console.log('promise'))
// console.log('Bye')

// function hello() {
//   console.log("Hello");
// }

// function greet() {
//   console.log("How are you");
//   hello();
// }

// greet()

// function hello() {
//     console.log('Hello')
// }

// let count = 0
// const x = setInterval(() => {
//     hello();
//     count++
//     if(count >= 5) {
//         clearInterval(x)
//         console.log('Function runs 5 times')
//     }
// },1000)
// console.log('Bye')

// setTimeout(() => {
//     hello()
// }, 1000)

// setInterval(hello, 1000)
// clearInterval(x)

// hello()

// call apply bind

const data = {
  fname: "Reshab",
  greet: function (age) {
    console.log("My Name is " + this.fname + " and my age is " +  age);
  },
};
const user = [
  { fname: "Ravi", age: 28 },
  { fname: "Baibhav", age: 27 },
  { fname: "Shubham", age: 29 },
  { fname: "Avinash", age: 28 },
];

const user1 = { fname: "Ravi"}

// data.greet.apply(user1, [28, "Vaishali", true])
// const result = data.greet.bind(user1, [28, "Vaishali", true])
// result()

// for(let i of user) {
//     // console.log(i)
//     // data.greet.apply(i);
//    const result =  data.greet.bind(i)
//    result()
// }

for( let i of user) {
    data.greet.apply(i, [i.age])
}
