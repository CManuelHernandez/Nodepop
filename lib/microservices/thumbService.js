'use strict';

// Servicio para crear thumbnail

const cote = require('cote');
const resize = require('../imgThumb');

// microservice

const responder = new cote.Responder({ name: 'Generador de Thumbnail'});

// logica microservicio

responder.on('Resize', async (req,done) => {
    console.log('service:', req.imgName, Date.now());
    await resize(req.imgName);
    done();
});