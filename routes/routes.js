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
module.exports = router