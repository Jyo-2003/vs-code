const fs=require ('fs');
//fs.writeFileSync('prasad.txt',"hello to node js")

//const data=fs.readFileSync('prasad.txt','utf-8')
//console.log(data)


//fs.readFileSync('prasad.txt','utf-8',(err,data)=>{
  //  if(err)throw err;
    //console.log(data)
//})

//fs.appendFileSync('prasad.txt',"this is extra text");

//fs.unlinkSync('prasad.txt')

const obj=require('./sample')
obj.sum(2,3)