const Proveedor = require('../models/proveedor');

const listProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.getProveedores();
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const insertProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.insert(req.body);
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.update(req.body, req.params.id);
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.delete(req.params.id);
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  listProveedor,
  insertProveedor,
  updateProveedor,
  deleteProveedor
}