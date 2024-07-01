/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('proveedor', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('Direccion').notNullable();
        table.string('telefono').notNullable();
        table.string('email').notNullable().unique();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('proveedor')
};
