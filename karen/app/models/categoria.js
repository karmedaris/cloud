const { format } = require('mysql2');
const { Model } = require('objection');

class Categoria extends Model {
  static get tableName() {
    return 'categoria';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nombre'],
      properties: {
        id: { type: 'integer' },
        nombre: { type: 'string', minLength: 1 },
        descripcion: { type: 'string', minLength: 1 },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' },
        stock: { type: 'integer' }
      }
    };
  }

  static async getCategorias() {
    return await Categoria.query();
  }

  static async insert(data) {
    return Categoria.query().insert(data);
  }

  static async update(data, id) {
    return await Categoria.query().patchAndFetchById(id, data);
  }

  static async delete(id) {
    return await Categoria.query().deleteById(id);
  }
}

module.exports = Categoria;