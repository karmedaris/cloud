/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('pedido', function(table) {
        // Agregar la columna 
        table.integer('cliente_id').unsigned();
    
        // Configurar la clave foránea
        table.foreign('cliente_id').references('id').inTable('cliente');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('pedido', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('cliente_id');
    
        // Eliminar la columna 
        table.dropColumn('cliente_id');
    });
};
