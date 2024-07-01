const Categoria = require('../models/categoria');

const listCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.getCategorias();
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const insertCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.insert(req.body);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.update(req.body, req.params.id);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.delete(req.params.id);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  listCategoria,
  insertCategoria,
  updateCategoria,
  deleteCategoria
}