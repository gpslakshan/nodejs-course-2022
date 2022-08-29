const http = require("node:http");
const PORT = 5000;

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

console.log(`Server is running on http://localhost:${PORT}`);

server.listen(PORT);
