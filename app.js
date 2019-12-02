var express = require('express')
var http = require('http')
var app = express()

app.get('/', (req, res) => {
    res.send('Hello world');
});

// http.createServer(app).listen(3000,() => {
//     console.log("Rodando na porta 3000")
// })

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});