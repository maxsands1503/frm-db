
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list_users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('list_users').insert({id: 1, list_id: 1, user_id:1 , conn_id: 1,user_permission: 'edit'}),
        knex('list_users').insert({id: 2, list_id: 2, user_id: 2, conn_id: 1,user_permission: 'edit'}),
        knex('list_users').insert({id: 3, list_id: 2, user_id: 3, conn_id: 1,user_permission: 'edit'}),
        knex('list_users').insert({id: 4, list_id: 3, user_id: 3, conn_id: 1,user_permission: 'edit'})
      ]);
    });
};
