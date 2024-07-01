/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('producto', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('descripcion');
        table.float('precio').notNullable();
        table.integer('stock').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('producto')
};
