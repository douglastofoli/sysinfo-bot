
exports.up = function(knex) {
  return knex.schema.createTable('logs', function (table) {
    table.increments();
    table.string('title').notNullable(); // username or title group
    table.string('type').notNullable(); // group, private
    table.string('command').notNullable();
    table.string('response').notNullable();
    table.timestamp('date').defaultTo(knex.fn.now());
  });  
};

exports.down = function(knex) {
  return knex.schema.dropTable('logs');
};
