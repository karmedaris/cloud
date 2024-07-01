const { format } = require('mysql2');
const { Model } = require('objection');

class Pedido extends Model {
  static get tableName() {
    return 'pedido';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nombre'],
      properties: {
        id: { type: 'integer' },
        nombre: { type: 'string', minLength: 1 },
        fecha: { type: 'string', format: 'date' },
        total: { type: 'number' },
        pago: { type: 'string', minLength: 1 },
        cliente_id: { type: 'integer' }
      }
    };
  }

  static async getPedidos() {
    return await Pedido.query();
  }

  static async insert(data) {
    return await Pedido.query().insert(data);
  }

  static async update(data, id) {
    return await Pedido.query().patchAndFetchById(id, data);
  }

  static async delete(id) {
    return await Pedido.query().deleteById(id);
  }
}

module.exports = Pedido;