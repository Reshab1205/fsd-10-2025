// const data =  Promise.resolve().then(() => {console.log('Hello')})
// // const rej = Promise.reject()
// console.log(data)

// const promise = new Promise((resolve,reject)=> {
//     let success = true;
//     if(success) {
//         resolve('Successfull')
//     } else {
//         reject("Failed")
//     }
// });
// promise
// .then((x) => console.log(x))
// .catch((y) => console.log(y))

// https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => console.log(res.json()))
// .then((data) => console.log(data))
.catch((err) => console.log(err))