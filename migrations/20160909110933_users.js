
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.text('password');
      table.string('city');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
