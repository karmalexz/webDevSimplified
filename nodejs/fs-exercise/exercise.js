const fs =require('fs')

fs.readFile('grades.txt','utf8',(err,data)=>{
    if(err){
        return console.log('read failed'+err.message)
    }
    
    // console.log(data)
    const arrOld=data.split(' ')
    const arrNew = []
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    const newStr=arrNew.join('\n')
    console.log(arrOld)
    console.log(arrNew)
    console.log(newStr)
    fs.writeFile('grades2.txt',newStr,(err)=>{
        if(err){
            console.log("failed"+err.message)
        }
        else{
            console.log("great!")
        }
    })
})

