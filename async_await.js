// hum kisi b function ko async bana sktay aur uske ander promise ko await kr sktay
// async function always returns a promise

// function hello(){
//     console.log("hello")
// }

// setTimeout(hello, 2000)


// function sum(a,b){
//     console.log(a+b)

// }

// function calculator(a,b, sumCallback){
//     sumCallback(a,b)
// }

// calculator(1,9, sum)

// function getData(dataId) {
//     setTimeout(() => 
//         {console.log("data", dataId);
//     }, 2000)
// }

// now assume we need data1, data2 and data3 in order
// function getData (dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         getNextData();
//     }, 2000);
// }

// getData(1, () => {
//     getData(2)
// })


// let promise = new Promise( (resolve, reject) => {
//     console.log("I am a promise");
//     // reject("some error");
//     // resolve("123");
// })

// async makes a function return a Promise
// await makes a function wait for a Promise
// async function getData() {
//   const result = await Promise.resolve("Hello World");
//   console.log(result);
// }

// getData();

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error")
//     })
// }

// let promise = getPromise();

// promise.then( (res) => {
//     console.log("promise fulfilled")
// })

// promise.catch((err) => {
//     console.log("rejected")
// })


// function asyncfunc1 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// };

// function asyncFunc2 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000);
//     });
// };
// console.log("Fetching data1....")
// asyncfunc1.then((res) => {
//     console.log("Fetching data2...")
//     asyncFunc2.then((res) => {});
// });


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data:", dataId);
//             resolve("success");
//         }, 2000)
//     })
// };

// // async await
// async function getAllData() {
//     console.log("getting data1....")
//     await getData(1);
//     console.log("getting data2....")
//     await getData(2);
//     console.log("getting data3....")
//     await getData(3);
//     console.log("getting data4....")
//     await getData(4);
// }

// practice Q
// async function greet() {
//     return console.log("hello");
// };

// greet().then(() =>{
//     console.log("message");
// })


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // delay function
// async function task1() {
//     console.log("starting...");
//     await delay(2000);
//     console.log("done");
// }
// task1()


async function test(){
    console.log("A");
    await Promise.resolve("value");
    console.log("B");
}
test();
console.log("C");
