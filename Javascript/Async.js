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

function hello() {
  console.log("Hello");
}

function greet() {
  console.log("How are you");
  hello();
}

greet()
