var express = require('express')
var router = express.Router()

router.use((req, res, next) => {
    console.log('Eu sou middleware do router')
    next()
});

router.get('/',(req,res,next)=>{
    next(new Error('custom error')) //simulando um erro
})
//criando uma rota com expressao regular
router.get('/a?r',(req,res)=>{
    res.send('router a?r');
})

router.get('/params/:name',(req,res)=>{
    res.json({
        params  :   req.params,
        host    :   req.hostname,
        headers :   req.headers
    })
})

router.post('/body',(req,res)=>{
    res.json(req.body.nome)
})

router.get('/res',(req,res)=>{
    res.status(201).json({   //mudando valor do status response
        nome: 'julio', 
        sobrenome: 'Armando'
    });
})

module.exports = router