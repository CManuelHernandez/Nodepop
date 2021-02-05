'use strict';

var express = require('express');
var router = express.Router();

const Ad = require('../../models/Ad');

/* GET /api/ads */
// Listado de Anuncios
router.get('/',async function(req, res, next) { // async para asyncawait
    try {
        const resultado = await Ad.find();
        res.json(resultado);
      } catch (error) {
        next(error);
      }
});

// GET / api/ad:id
// Obtener un Anuncio
router.get('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;

        const ad = await Ad.findOne({ _id: _id });

        if(!ad){
            return res.status(404).json({ error: 'not found '});
        }
        res.json({ result: ad });
    } catch (error) {
        next(error);
    }
});

// POST / api/ad (body)
// Crear un Anuncio
router.post('/', async (req, res, next) =>{
    try {
        const adData = req.body;

        const ad = new Ad(adData);

        const createdAd = await ad.save();

        res.status(201).json({result: createdAd});
    } catch (error) {
        next(error);
    }
});

// PUT /api/ad:id (body)
// Actualizar un Anuncio
router.put('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const adData = req.body;

        const updatedAd = await Ad.findOneAndUpdate({ _id: _id}, adData, { 
            new: true,
            useFindAndModify: false
        });
        // usamos { nwe: true } para que nos devuelva el anuncio actualizado

        if(!updatedAd) {
            res.status(404).json({error: 'not found' });
            return;
        }

        res.json({ result: updatedAd });
    } catch (error) {
        next(error);
    }
});

// DELETE /api/ad:id
// Elimina un Anuncio
router.delete('/:id', async (req, res, next) =>{
    try {
        const _id = req.params.id;

        await Ad.deleteOne({_id: _id});

        res.json();
    } catch (error) {
        next(error);  
    }
});

module.exports = router;