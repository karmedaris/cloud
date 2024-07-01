const Pedido = require('../models/pedido');

const listPedido = async (req, res) => {
  try {
    const pedidos = await Pedido.getPedidos();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const insertPedido = async (req, res) => {
  try {
    const pedido = await Pedido.insert(req.body);
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updatePedido = async (req, res) => {
  try {
    const pedido = await Pedido.update(req.body, req.params.id);
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deletePedido = async (req, res) => {
  try {
    const pedido = await Pedido.delete(req.params.id);
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  listPedido,
  insertPedido,
  updatePedido,
  deletePedido
}