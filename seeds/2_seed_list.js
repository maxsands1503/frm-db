
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('lists').insert({id: 1, name: 'Grocery List', user_id: 1 , list_type:'prv'}),
        knex('lists').insert({id: 2, name: 'List for Hike', user_id: 2 , list_type:'pub'}),
        knex('lists').insert({id: 3, name: 'Pay Patrick Back', user_id: 3 , list_type:'noti'})
      ]);
    });
};
