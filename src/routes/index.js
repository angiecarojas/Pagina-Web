const express = require('express');
const router = express.Router();



//Rutas (localhost:3000)
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Love Pet Website' });
  });

  router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page' });
  });
  
  router.get('/pet', (req, res) => {
    res.render('pet.html', { title: 'Historial de tu mascota' });
  });
  
  router.get('/user', (req, res) => {
    res.render('user.html', { title: 'Bienvenido usuario' });
  });
  

    
  router.get('/formulario', (req, res) => {
    res.render('formulario.html', { title: 'Bienvenido al formulario' });
  });

  module.exports = router;
  