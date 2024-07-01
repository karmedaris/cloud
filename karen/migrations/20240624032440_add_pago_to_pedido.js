/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('pedido', function(table) { // usar alterTable en lugar de table para asegurar la promesa
        table.string('pago');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('pedido', function(table) { // usar alterTable en lugar de table para asegurar la promesa
        table.dropColumn('pago');
    });
};
