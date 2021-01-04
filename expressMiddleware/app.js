//npm install express --save
//npm install serve-index --save
const express = require('express'); //Requiring the module express
const app = express();
const port = 3000;
const hostname = '10.0.1.4';
var serveIndex = require('serve-index');
app.get('/', (req, res) => {
    res.send('Hello world')
});
app.get('/', (req, res) => {
    res.send('Got a post request');
});
app.put('/user', (req, res) => {
    res.send('Got a put request at /user');
});
app.delete('/', (req, res) => {
    res.send('Got a DELETE request at /user');
});
//Callbacks
var callBack0 = function (request,response, next) {
    console.log('Call back 0');
    next();
}
var callback1 = function (request,response, canbenamedAnything) {
    console.log('Call back 1');
    canbenamedAnything();
}
var callback2 = function (request,response) {
    console.log('Call back 2');
    response.send('Last call back');
}
app.get('/callbacks',[callBack0, callback1, callback2]);

//Begin serving static files & serving directories
app.use('/static',express.static('code')); //Index.html automatically loads. Any other static file needs to be directly accessed via their url. Example http://10.0.1.4:3000/static/hello.html || http://10.0.1.4:3000/static/ will load the index
app.use('/serve', express.static('serve'), serveIndex('serve'));



//(directory that the user requests), 'folder name'
app.listen(port, hostname, () => {
    console.log(`Testing application listening on ${hostname}:${port}!`);
    console.log(`A static directory can be found at ${hostname}:${port}/static`);
    console.log(`A file index can be found at ${hostname}:${port}/serve`);
});