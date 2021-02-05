var express = require('express');
var router = express.Router();
const Ad = require('../models/Ad');

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.locals.ejemplo = 'esto es un ejemplo';
  res.locals.title = 'NodePop'

  try {
    // recuperar datos de entrada
    const name = req.query.name;
    const sale = req.query.sale;
    const price = req.query.price;
    const tag = req.query.tag;

    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const fields = req.query.fields;
    const sort = req.query.sort;

    // crear el filtro vacio
    const filter = {};

    if (name) {
      filter.name = new RegExp('^' + name);
    }

    if (sale) {
      filter.sale = sale;
    }

    if (price) {
      let rango;

      if (precio.indexOf('-') >= 0) {
          rango = price.split('-');

          if (rango[0] === '' && rango[1] !== '') {
            filter.precio = { '$lte': parseInt(rango[1]) };
          } else if (rango[0] !== '' && rango[1] === '') {
            filter.precio = { '$gte': parseInt(rango[0]) };
          } else if (rango[0] !== '' && rango[1] !== '') {
            filter.precio = { '$gte': parseInt(rango[0]), '$lte': parseInt(rango[1]) };
          }
      } else {
        filter.price = price;
      }
    }

    if (tag) {
      filter.tags = { '$all': [tag] };
    }

    const anuncios = await Ad.listar(filter, limit, skip, fields, sort);
    // res.locals.results = anuncios;

  res.render('index', { results: anuncios });
} catch (err) {
  next(err);
}
});

module.exports = router;
