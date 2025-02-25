const express = require('express');
const ProductoController =  require('../controllers/producto.controller');
const router = express.Router();

//Obtener todos los productos
router.get('/', ProductoController.getAllProductos);

//Obtener productor por Id
router.get('/id/:id', ProductoController.getProductoById);
//Obtener productor por Numero de serie
router.get('/numSerie/:numSerie', ProductoController.getProductoByNumSerie);

//Crear productos
router.post('/', ProductoController.createProducto);

module.exports = router;
