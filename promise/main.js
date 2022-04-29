// const promise = setTimeoutPromise(250)
// promise.then(()=>{
//     console.log("noob")
// })
// function setTimeoutPromise(duration){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,duration)
// })
// }
// ==========================================================

// const button=document.querySelector("button")
// const promise=addEventListenerPromise(button,"click")
// promise.then( e =>{
//     console.log("clicked")
//     console.log(e)
// })
// function addEventListenerPromise (element,method){
//     return new Promise((resolve,reject)=>{
//         element.addEventListener(method,e=>{
//             resolve(e)
//         })
//     })
// }
// ==========================================================
Promise.all([]);
Promise.resolve("happy").then((message) => console.error(message));
// ==========================================================

Promise.all([
  Promise.resolve("1"),
  Promise.reject("Error on 2"),
  Promise.resolve("1"),
])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
// ==========================================================
Promise.allSettled([
    Promise.reject("error on 1"),
    Promise.reject("error on 2"),
    Promise.reject("error on 3"),
])
.then(messages=>{
    console.log(messages)
})
.catch(error=>{
    console.error(error)
})
// ==========================================================
const promise = Promise.resolve("here")

promise.then(message=>{
    console.log(message)
}).catch(error=>{
    console.error(error)
}).finally(()=>{
    console.log("finally")
})