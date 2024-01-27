const http = require('http');
const fs = require('fs');
const PORT = 3500;

http.createServer(function(req, res){
    const url = req.url;
    console.log(url);

    res.setHeader("Content-Type", "text/html; charset=utf-8;");

    switch (url) {
        case '/':
            console.log('main');
            res.write('<h1>Main page</h1>');
            break;
        case '/contact':
            console.log('contact');
            let data = fs.readFileSync('./contact.html',{encoding: 'utf8', flag : 'r'});
            res.write(data);
            break;
        default:
            console.log('404');
            res.write('<h1>404</h1>');
    }
    res.end();
}).listen(PORT);