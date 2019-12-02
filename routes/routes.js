var express = require('express')
var router = express.Router()


router.get('/',(req,res)=>{
    res.json({
        message:'Hello World'
    })
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

module.exports = router