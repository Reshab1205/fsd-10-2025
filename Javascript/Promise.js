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

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res) => console.log(res.json()))
// // .then((data) => console.log(data))
// .catch((err) => console.log(err))

// const a = 10;
// let b = 10;

// if(a == b) {
//     console.log('True')
// } else {
//     console.log('False')
// }

// const obj = [1,2,3]

// const obj1 = [1,2,3]

// if( obj == obj1) {
//     console.log('True')
// } else {
//     console.log('False')
// }

// const data = new Promise((resolve, reject) => {
//     let success = true;
//     if(success) {
//         resolve('Successfull')
//     } else {
//         reject('Failed')
//     }
// });
// data
// .then((result) =>console.log(result))
// .catch((err) => console.log(err))
// .finally(() => console.log('CHalo Chale Mitwa Ham Hamesa Chalte rahenge koi farak nhi padta ki tum resolve ho ya reject ho'))

// function add(a,b) {
//     const c = a + b
//     return c
// }

// const sub = (a,b) => {
//     const c = a -b
//     return c
// }

// console.log(add(3,4))

// console.log('Ist',url)
// url.then((res) => {
//     if(!res.ok) {
//         console.log('HTTP Error')
//     }
//     return res.json()

// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
// let lat = 23.23352524875869;
// let lon = 77.44076033565044;
// let APIkey = '6010abdb2e857568d280c8ef3fcec838';
// let url = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);

//   url
//     .then((res) => {
//       if (!res.ok) {
//         console.log("HTTP Error");
//       }
//       return res.json();
//     })
//     .then((data) => console.log(data.weather[0].description))
//     .catch((err) => console.log(err));

// let apiKey = '23a13401e6964d149835d8022a7fa787'
//     let url1 = fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`);

//   url1
//     .then((res) => {
//       if (!res.ok) {
//         console.log("HTTP Error");
//       }
//       return res.json();
//     })
//     .then((data) => console.log(data.results[0].formatted))
//     .catch((err) => console.log(err));


// Promise.all([
//     data,
//     url
// ])
// .then((result) => console.log(result))
// .catch((err) => console.log(err))


// function getLocation(lat, lon) {
//   let apiKey = '23a13401e6964d149835d8022a7fa787'
//   const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`
//   fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data.results[0].formatted))
//   .catch((err) => console.log(err))
// }

// getLocation(23.23352524875869,77.44076033565044)

// const arr = {fnmae: 'Reshab'}


// const str = 'Reshab'
// str = 'Ravi'
// console.log(str) //Ravi

let lat = 23.23352524875869
let lon = 77.44076033565044
let apiKey = '23a13401e6964d149835d8022a7fa787'
const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`

fetch(url)
.then((res)=> res.json())
.then((data) => console.log(data.results[0].formatted))
.catch((err) => console.log(err))

