const http = require('http');
const path = require('path');
const mimeTypes = require('./utilities/mime');
const staticFile = require('./utilities/static_file');

const PORT = 3500;
http
  .createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case '/':
        staticFile(res, '/html/main_page.html', '.html');
        break;

      default:
        const extname = path.extname(url).toLowerCase();
        if (mimeTypes[extname]) {
          staticFile(res, url, extname);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
        break;
    }
  })
  .listen(PORT, () => console.log(`Server is running on port ${PORT}`));
