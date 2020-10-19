const express = require('express');//guardar express en una variable de servidor
const router = express.Router(); //usar modulo de router de ex´press
const VarianzaController = require('../Controllers/VarianzaController');

var reinicio = router.get('/', (req, res) => {
    res.render('index.html');
});

//router.get('/BuscarHerramientas/:Herra', AlmacenController.search);
module.exports = router;
