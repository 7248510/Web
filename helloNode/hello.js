//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
const http = require("http"); //Pulling the http module
const hostname = "127.0.0.1";
const port = 8000;
const server = http.createServer((req,res) => //req = request, res = response
{
    res.writeHead(200, {'Content-Type': 'text/plain'}); //http 200 = OK response code. Mozilla(the request has succeeded)
    res.end('Hello world\n'); //Text
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); //Outputting the servers IP & Port #
});