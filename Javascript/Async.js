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
// const a = 'Ravi'
data.greet.call({fname: "Ravi"}, 28)
// const user = [
//   { fname: "Ravi", age: 28 },
//   { fname: "Baibhav", age: 27 },
//   { fname: "Shubham", age: 29 },
//   { fname: "Avinash", age: 28 },
// ];

// const user1 = { fname: "Ravi"}

// data.greet.apply(user1, [28, "Vaishali", true])
// const result = data.greet.bind(user1, [28, "Vaishali", true])
// result()

// for(let i of user) {
//     console.log(i)
//     data.greet.apply(i);
//    const result =  data.greet.bind(i)
//    console.log(typeof result)
//    result()
// }

// function add() {

// }

// () => {}

// const app = function () {
//   return true
// }
// console.log(app())

// for( let i of user) {
//     data.greet.apply(i, [i.age])
// }

// const btn = document.querySelectorAll('button')
// btn.addEventListener('click', () => {})

// const num = '100%10';
// console.log(eval(num))


// const x = Promise.reject("Hello");
// const success = false;

// if(success === true) 
//   x.then((data) => console.log(data))
// .catch((err) => console.log(err))
// console.log(first)
// function dbConnect(url) {
//   Promise.resolve(mongoose.connect(url))
//   .then(() => console.log('Db connected'))
//   .catch(() => console.log('Db not connected'))
  
// }
// dbConnect()
// console.log(first)

// function add(a,b) {
//     console.log(a+b)
// }

// setInterval(() => {
//     add(2,5)
// })
// setTimeout(() => {
//     console.log('Hii')
// })
// console.log('Hello')


// function greet(callback) {
//     console.log('Hello')
//     callback()
//     // fname()
// }

// function fname() {
//     console.log('Reshab')
// }

// function fname1() {
//     console.log('Ravi')
// }

// greet(fname)
// truegreet(fname1)



// function sendMsg(name, callback) {
//     console.log(`Sending msg to ${name}`)
//     callback(name)
// }

// function sendNewYearGreeting(name) {
//     console.log(`Happy New Year ${name}`)
// }

// const arr = ["Reshab", "Ravi", "Shubham", "Baibhav", "Avinash"]
// for(let i of arr) {
//     sendMsg(i, sendNewYearGreeting)
// }

// function getSender() {
//     console.log('Sender')
// }

// function verifySender() {
//     console.log('Verify Sender')
// }


// function getReceiver() {
//     console.log('Reshab')
// }

// function sendMoney() {
//     getSender()
//     getReceiver()
//     verifySender()
//     console.log('Money sent')
// }

// sendMoney()


// function verifyCardWithServer() {
// console.log('CARD server verification')
// return true
// }
// const token = 'TRSD'
// const amount = 15000
// function verifyCard() {
//     if(!token.trim()) {
//         return 'Card Invalid'
//     }
//     if(verifyCardWithServer() === true) {
//         cashWithDrawl()
//     }

    
// }

// function checkBalance(amount, callback) {
//     const fetchBankBalance = 10000
//     if(amount <= fetchBankBalance) {
//        callback()
//     } else {
//         console.log('Insufficient Balance') 
//     }
// }

// function cashWithDrawl () {
//     console.log('WithDrawl Successfull')
// }

// checkBalance(amount, verifyCard)
// checkBalance(amount, cashWithDrawl)







