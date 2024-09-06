
const http = require('http')
const fs = require("fs");
const home = fs.readFileSync('file1.html','utf-8');
const about = fs.readFileSync('file2.html','utf-8');
const services = fs.readFileSync('file3.html','utf-8');
const contact = fs.readFileSync('file4.html','utf-8');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req,res)=>{
   
    res.writeHead(200,{'content-type':'text/html'});
    url = req.url
    if(url=='/'){
        res.end(home)
    }

    else if(url=='/about'){
        res.end(about)
    }
    else if(url=='/services'){
        res.end(services)
    }
    else if(url=='/contact'){
        res.end(contact)
    }
    else{
        res.end('Page not found')
    }
    

})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})