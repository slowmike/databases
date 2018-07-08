var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      const queryString = "select m.id, m.message as message, m.roomname as roomname, u.name as username from messages m \
                          inner join users u on (m.user_id = u.id)";
      db.query(queryString, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          console.log(err, results);
          callback(results);
        }
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      let queryString = "insert into messages (message, user_id, roomname) \
                            values(?, ( select id from users where name = ? limit 1), ?)";
      db.query(queryString, params, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          console.log(err, results);
          callback(results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      const queryString = "select * from users";
      db.query(queryString, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          console.log(err, results);
          callback(results);
        }
      });
    },
    post: function (params, callback) {
      let queryString = "insert ignore into users(name) values(?)";
      db.query(queryString, params, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          console.log(err, results);
          callback(results);
        }
      });
    }
  }
};
