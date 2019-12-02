var express = require('express')
var app = express()
var routes = require('./routes/routes')

app.use('/hello',routes)

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/world', (req, res) => {
    res.send('World');
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});