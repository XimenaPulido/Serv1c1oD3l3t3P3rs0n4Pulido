const ProductoService = require('../services/producto.service');

class ProductoController {

    async getAllProductos(req, res) {
        try {
            const productos = await ProductoService.getAllProductos();
            res.json(productos);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProductoById(req, res) {
        try {
            console.log(req.params);
            //Validar que el id venga en la petición
            const productoId = req.params.id;
            if (!productoId || productoId == '' || productoId == null || productoId == undefined) {
                throw new Error('El id del producto es requerido');
            }
            const producto = await ProductoService.getProductoById(productoId);
            res.json(producto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProductoByNumSerie(req, res) {
        try {
            console.log(req.params);
            const productoNumSerie = req.params.numSerie;
            if (!productoNumSerie || productoNumSerie == '' || productoNumSerie == null || productoNumSerie == undefined) {
                throw new Error('El numero de serie del producto es requerido');
            }
            const producto = await ProductoService.getProductoByNumSerie(productoNumSerie);
            res.json(producto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async createProducto(req, res) {
        try {
            const producto = await ProductoService.createProducto(req.body);
            res.json(producto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new ProductoController();