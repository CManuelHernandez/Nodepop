'use strict';

// middleware de comprbación de JWT

const jwt = require('jsonwebtoken');

module.exports = function() {
  return (req, res, next) => {
    // recoger el token de la petición
    const token = req.get('Authorization') || req.query.token || req.body.token;
    console.log(token); 
    
    // si no nos recibimos el token no pueden pasar
    if (!token) {
        const error = new Error('no token provided');
        error.status = 401;
        next(error);
        return;
      }
    
    // verificar que el token sea válido
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            const error = new Error('invalid token');
            err.status = 401;
            next(error);
            return;
        }
        // para conocer la identificación del usuario, dentro del token
        req.apiAuthUserId = payload._id;
        console.log('._id: '+ payload._id)
        next();
    });
  };
}
