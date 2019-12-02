var express = require('express')
var path = require('path')
var app = express()
var routes = require('./routes/routes')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/hello',routes)
app.use('/public', express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/world', (req, res) => {
    res.send('World');
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});