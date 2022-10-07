const fs = require('fs');
const getJSONString =require('./getJSONString')
const http = require('http');
const httpStatus = require('http-status-codes');
const port = 3000;
const app = http.createServer();


http.createServer((req,res)=>{
    let body = [];
    req.on("data",(bodyData)=>{
        body.push(bodyData);
    });
    
    req.on("end",()=>{
        body = Buffer.concat(body).toString();
        fs.writeFile('./second_server/data.txt',body, {flag:'a'} ,(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log('data.txt modified');
            }
        });
        console.log(`Request body contents: ${body}`)
       
    });

    getJSONString.getJSONString(req.url);
    getJSONString.getJSONString(req.method);
    getJSONString.getJSONString(req.headers);

    res.writeHead(httpStatus.OK, {'Content-Type' : 'text/html'});
    let responseMessage = "<h1>This is the response message</h1>";
    res.end(responseMessage);

}).listen(port,()=>{console.log(`Server started and is listening on port: ${port}`)});