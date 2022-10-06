const http = require('http');
const httpStatus = require('http-status-codes');
const port = 3000;
const app = http.createServer((req,res)=>{
    console.log('Incoming request recieved');
    res.writeHead(httpStatus.OK, {'Content-type' : 'text/html'});
    let responseMessage = '<h1>This is the response</h1>';
    res.write(responseMessage);
    res.end();
    console.log(`Sent a response:${responseMessage}`);
});    

app.listen(port);