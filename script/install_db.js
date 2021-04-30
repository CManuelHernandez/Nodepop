'use strict';
const Ad = require('../models/Ad');
const Usuario = require('../models/Usuarios');
const adData = require('../data/ads.json');
require('../lib/connectMongose');

async function resetData() {
    try { 
        await Ad.remove({});
        await Usuario.remove({});
        await initUsuarios();
        const adArray = Ad.insertMany(adData['advertisement']);

       await Promise.all([adArray])
       .then(()=>{
            console.log('###############################');
            console.log('Datos cargados correctamente');
            console.log('###############################');
            process.exit(0);})
        .catch((error)=>{
            console.log('Error al cargar los datos: ',error);
            process.exit(1);
        });
   
    } catch (error) {
        console.log('Error al cargar los datos: ',error);
        process.exit(1);       
    }
  }

  async function initUsuarios() {
    await Usuario.deleteMany();
    await Usuario.insertMany([
      { 
        email: 'user@example.com',
        password: await Usuario.hashPassword('1234'),
      }
    ]);
  }
  resetData('Ad');
