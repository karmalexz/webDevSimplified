const fs =require ('fs')
// fs.readFile('1.txt','utf-8',(err,dataStr)=>{
//     console.log(err)
//     console.log('-------')
//     console.log(dataStr)
// })
// if read successfully, the err is null 
// if read failed, the err is an error object, dataStr is undefined. 

fs.readFile('11.txt','utf8',(err,dataStr)=>{
    if(err){
        console.log("failed!" +  err.message)
    }
    else{
        console.log('successful!'+dataStr)
    }
})