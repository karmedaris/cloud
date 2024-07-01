/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('producto', function(table) {
        // Agregar la columna de proveedor
        table.integer('proveedor_id').unsigned();
    
        // Configurar la clave foránea
        table.foreign('proveedor_id').references('id').inTable('proveedor');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('producto', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('proveedor_id');
    
        // Eliminar la columna proveedor_id
        table.dropColumn('proveedor_id');
    });
};
