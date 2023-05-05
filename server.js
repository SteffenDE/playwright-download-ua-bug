const http = require("http");

http.createServer(async (req, res) => {
  console.log(req.headers);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("<a id=\"download\" download=\"name\" href=\"/\">Download</a>");
}).listen(8080);

console.log(`Server running at http://127.0.0.1:8080/`);
