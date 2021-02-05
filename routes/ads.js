'use strict';

var express = require('express');
var router = express.Router();


router.use(function(req, res, next){
    console.log('middleware de router ads');
    if (condicion) {
        res.send('respuesta');
        return;
    }
    next();
})

router.get('/', function(req, res, next){
    res.send('respuesta a ads');
});

// prueba
router.get('/:id', function(req, res, next){ 
    console.log(req.params);
    res.send('recibido parametro ' + req.params.id);
});

// prueba
router.post('/', function(req, res, next){
    console.log('req.body', req.body);
    res.json({recibido: req.body.num})
});



module.exports = router;