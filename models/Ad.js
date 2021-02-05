'use strict';

const mongoose = require('mongoose');

// Definimos un squema
const adSchema = mongoose.Schema({
    name : { type: String, index: true, required: 'Name is required '},
    sale : { type: Boolean, index: true, required: 'Type of Ad is required' },
    price: { type: Number, index: true, required: 'Price is required' },
    image: { type: String },
    tags : { type: [String], index: true }
});

// creamos el modelo con el esquema definido
const Ad = mongoose.model('Ad', adSchema);

// exportamos el modelo (opcional)
module.exports = Ad;