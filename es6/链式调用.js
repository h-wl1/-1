const fs=require('fs')

function getters(url){
    return new Promise((resolve, reject) => {
        fs.readFile(url,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

getters('./resource/出师表.md').then(res=>{
    console.log(res.toString());
    const data=res.toString()
    return data
}).then(data=>{
     getters('./resource/桃花源记.md').then(res=>{
        console.log(res.toString());
        let result=res.toString()
        return result
     })
}).then(res=>{
    console.log(res);
})