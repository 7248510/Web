const express = require('express'); //Requiring the modules express
const app = express();
const port = 3000;
const hostname = '10.0.1.4'
app.get('/', (req, res) => {
    res.send('Hello world')
});
app.listen(port, hostname, () => {
    console.log(`Example application listening on ${hostname}:${port}!`)
});