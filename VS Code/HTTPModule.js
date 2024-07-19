import http from 'http'

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.statusCode = 202;
    res.statusMessage = 'bad';
   
    res.end('<h1><center>Happy Ramnavmi !<h1>');
})

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT,HOST,()=>{
    console.log(" Server running at Port no: http://localhost:8000")
});
