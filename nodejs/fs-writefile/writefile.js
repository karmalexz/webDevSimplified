const fs =require('fs')
fs.writeFile('2.txt','abcde',(err)=>{
    // console.log(err)
    //if it's successful, err is null
    //if it's failed, err is an error object
    if (err){
        return console.log('failed!'+ err.message)
    }
    console.log('successful!')
})