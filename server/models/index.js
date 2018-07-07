var db = require('../db');

module.exports = {
  messages: {
    get: function () {
    }, // a function which produces all the messages
    post: function (message, callback) {
      // db.query(`select id from users where name='${message.username}'`, (error, results, fields) => {
      //   const queryString = `insert into messages (message, user_id, roomname)
      //                         values('${message.message}', ${results[0]}, '${message.roomname}')`;
      //   db.query(queryString, callback);
      // });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
