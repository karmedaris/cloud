const { format } = require('mysql2');
const { Model } = require('objection');

class Producto extends Model {
  static get tableName() {
    return 'producto';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nombre'],
      properties: {
        id: { type: 'integer' },
        nombre: { type: 'string', minLength: 1 },
        descripcion: { type: 'string', minLength: 1 },
        precio: { type: 'number' },
        stock: { type: 'integer' },
        tipo: { type: 'string', minLength: 1 },
        proveedor_id: { type: 'integer' },
        categoria_id: { type: 'integer' }
      }
    };
  }

  static async getProductos() {
    return await Producto.query();
  }

  static async insert(data) {
    return await Producto.query().insert(data);
  }

  static async update(data, id) {
    return await Producto.query().patchAndFetchById(id, data);
  }

  static async delete(id) {
    return await Producto.query().deleteById(id);
  }
}

module.exports = Producto;