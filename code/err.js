const http=require('http')
const data=[
{
    "title":"wings of fire",
    "author":"abdul kalam"
},{
    "title":"monk who sold hie ferrari",
    "author":"robin sharma"
}

]
const server=http.createServer((req,res)=>{
    if(req.method==="get")
    {
    res.writeHead(200,"this is the status",{'content-type':'application/json'})
    res.write(JSON.stringify(data))
    }
    if(req.method==="post"){
        let body=''
    server.on("request",(chunk)=>{
    body=body+chunk;
    })
    console.log(body)
    }
    res.end()
})
server.listen(5000,()=>{
    console.log("server is running at  http://localhost:5000")
})