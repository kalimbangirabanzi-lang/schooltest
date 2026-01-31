const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from my first Codespace app kalimba!");
}).listen(3000);
