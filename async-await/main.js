/*
function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(`you waited ${delay} ms`);
      // }, delay);
      reject("error")},delay)
    });
  }
  // setTimeoutPromise(250)
  //   .then(() => {
    //     console.log("1");
    //     return setTimeoutPromise(250);
    //   })
    //   .then(() => {
      //     console.log("2");
      //   })
      //   .catch(e=>{
        //     console.error(e)
        //   })
        
        async function doStuff() {
          try {
            console.log(await setTimeoutPromise(250));
            console.log("1");
            console.log(await setTimeoutPromise(250));
            console.log("2");
          }
          catch(error){
            console.log("here")
            console.error(error)
          }
          
        }
        doStuff();
        
*/

function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}
function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, delay);
  });
}
async function doStuff(){
  try {
   console.log(await getValueWithDelay("alex",250))
   console.log(await getValueWithDelay("alex2",250))
   console.log(await getValueWithDelayError("youtube",250))
  }
  catch(error){
    console.error(error)
  }finally{
    console.log("finally")
  }
}
doStuff()

getValueWithDelay("kyle",250).then(message=>{console.log(message)})
getValueWithDelay("kyle",250).then(message=>{console.log(message)})
getValueWithDelay("kyle",250).then(message=>{console.log(message)})