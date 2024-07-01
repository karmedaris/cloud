/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('producto', function(table) {
        // Agregar la columna }
        table.integer('categoria_id').unsigned();
    
        // Configurar la clave foránea
        table.foreign('categoria_id').references('id').inTable('categoria');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('producto', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('categoria_id');
    
        // Eliminar la columna 
        table.dropColumn('categoria_id');
    });
};
