const http = require('http');

http.createServer(function(req, res){
    console.log(req.url);
    console.log(req.method);
    console.log('server work');
    res.setHeader('Content-Type', "text/html; charset=utf-8;");
    res.write('<h1>Main page</h1>');
    res.write('<p>hello world</p>');
    res.end();
}).listen(3500);