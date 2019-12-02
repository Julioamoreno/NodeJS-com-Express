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

app.use((req, res, next) => {
    req.nome = 'julio'
    console.log('Eu sou middleware')
    next()
});

app.get('/', (req, res) => {
    res.send('Hello '+ req.nome);
});

app.get('/world', (req, res) => {
    res.send('World');
});

//Centralizando os erros
app.use((err, req, res, next) => {
    res.status(500).json({
        message:   'Ocorreu um Erro'
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});