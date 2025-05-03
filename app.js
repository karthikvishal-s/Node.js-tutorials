//Filesystem Asynchronous or default
// File System Module

const {readFile,writeFile}=require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    return}
    console.log(result)
})

readFile('./content/empty.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    return}
    console.log(result)
})