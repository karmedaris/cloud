const { format } = require('mysql2');
const { Model } = require('objection');

class Proveedor extends Model {
  static get tableName() {
    return 'proveedor';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nombre'],
      properties: {
        id: { type: 'integer' },
        nombre: { type: 'string', minLength: 1 },
        direccion: { type: 'string', minLength: 1 },
        telefono: { type: 'string', minLength: 1 },
        email: { type: 'string', format: 'email' },
        cantidad: { type: 'integer' }
      }
    };
  }

  static async getProveedores() {
    return await Proveedor.query();
  }

  static async insert(data) {
    return await Proveedor.query().insert(data);
  }

  static async update(data, id) {
    return await Proveedor.query().patchAndFetchById(id, data);
  }

  static async delete(id) {
    return await Proveedor.query().deleteById(id);
  }
}

module.exports = Proveedor;