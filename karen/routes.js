const express = require('express'); // llamado a framework

// llamar a handlers del api
const clienteHandler = require('./app/handlers/cliente.handler');
const productoHandler = require('./app/handlers/producto.handler');
const proveedorHandler = require('./app/handlers/proveedor.handler');
const pedidoHandler = require('./app/handlers/pedido.handler');
const categoriaHandler = require('./app/handlers/categoria.handler');

// variable para encapsular rutas
const router = express.Router();

// registrar las rutas
// comenzamos con las rutas del cliente
router.get('/clientes', clienteHandler.listCliente); // Para obtener clientes
router.post('/clientes', clienteHandler.insertCliente); // Para insertar cliente
router.patch('/clientes/:id', clienteHandler.updateCliente); // Para actualizar cliente
router.delete('/clientes/:id', clienteHandler.deleteCliente); // Para eliminar cliente

// rutas del producto
router.get('/productos', productoHandler.listProducto); // Para obtener productos
router.post('/productos', productoHandler.insertProducto); // Para insertar producto
router.patch('/productos/:id', productoHandler.updateProducto); // Para actualizar producto
router.delete('/productos/:id', productoHandler.deleteProducto); // Para eliminar producto

// rutas del proveedor
router.get('/proveedores', proveedorHandler.listProveedor); // Para obtener proveedores
router.post('/proveedores', proveedorHandler.insertProveedor); // Para insertar proveedor
router.patch('/proveedores/:id', proveedorHandler.updateProveedor); // Para actualizar proveedor
router.delete('/proveedores/:id', proveedorHandler.deleteProveedor); // Para eliminar proveedor

// rutas del pedido
router.get('/pedidos', pedidoHandler.listPedido); // Para obtener pedidos
router.post('/pedidos', pedidoHandler.insertPedido); // Para insertar pedido
router.patch('/pedidos/:id', pedidoHandler.updatePedido); // Para actualizar pedido
router.delete('/pedidos/:id', pedidoHandler.deletePedido); // Para eliminar pedido

// rutas de la categoria
router.get('/categorias', categoriaHandler.listCategoria); // Para obtener categorias
router.post('/categorias', categoriaHandler.insertCategoria); // Para insertar categoria
router.patch('/categorias/:id', categoriaHandler.updateCategoria); // Para actualizar categoria
router.delete('/categorias/:id', categoriaHandler.deleteCategoria); // Para eliminar categoria

// otras rutas..
module.exports = router;