"use strict";

var bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');
/*
 * Import Module
 ****************/

/*
 * Controller
 *************/


module.exports = {
  // Method Get
  get: function get(req, res) {
    var sql;
    return regeneratorRuntime.async(function get$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Variable de récupération de tout les users
            sql = "SELECT * FROM users";
            db.query(sql, function (error, data, fields) {
              if (error) throw error;
              res.json({
                status: 200,
                listUser: data,
                message: "users lists retrieved successfully"
              });
              console.log(res);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  // Methode de connexion push
  push: function push(req, res) {
    var sess, sql, values;
    return regeneratorRuntime.async(function push$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sess = req.session;
            sql = "SELECT * from users WHERE email = \"".concat(req.body.email, "\"");
            values = [req.body.email, req.body.password];
            db.query(sql, values, function (err, getUser) {
              if (err) throw err;
              getUser.forEach(function (r) {
                if (r.email != req.body.email) {
                  res.json({
                    status: 200,
                    listUser: 'Pas le bon email'
                  });
                } else {
                  bcrypt.compare(req.body.password, r.password, function (error, same) {
                    if (same) {
                      var payload = {
                        email: r.email,
                        password: r.password
                      };
                      var token = jwt.sign(payload, 'token', {
                        expiresIn: 1440
                      });
                      console.log('OK 1');
                      sess.userId = r.id;
                      sess.email = r.email;
                      sess.status = r.status;
                      console.log(req.session);
                      res.send({
                        sess: sess,
                        token: token
                      }); // res.json({
                      //     status: 200,
                      //     listUser: 'Pas le bon mot de passe',
                      //     message: sess
                      // })
                    } else {
                      res.json({
                        status: 200,
                        listUser: 'Pas le bon mot de passe'
                      });
                    }
                  });
                }
              });
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  // Method Post
  post: function post(req, res) {
    var sql;
    return regeneratorRuntime.async(function post$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = "INSERT INTO users (lastname,firstname,email,password,status) values(?)";
            bcrypt.hash(req.body.password, 10, function (error, encrypted) {
              values = [req.body.lastname, req.body.firstname, req.body.email, req.body.password = encrypted, 'user'];
              db.query(sql, [values], function (err, data, fields) {
                if (err) throw err;
                var sql = "SELECT * FROM users";
                db.query(sql, function (error, dataRes, fields) {
                  if (error) throw error;
                  res.json({
                    status: 200,
                    listUser: dataRes,
                    message: "Add Customer successfully"
                  });
                });
              });
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  // Method Edit One User
  editOne: function editOne(req, res) {
    var sql = "UPDATE users \n                   SET lastname = '".concat(req.body.lastname, "',\n                        firstname = '").concat(req.body.firstname, "',\n                       email = '").concat(req.body.email, "'\n                       password = '").concat(req.body.password, "',\n                   WHERE id = '").concat(req.params.id, "';");
    db.query(sql, function (err, edit, fields) {
      if (err) throw err;
      var sql = "SELECT * FROM users";
      console.log(edit);
      db.query(sql, function (error, data, fields) {
        if (error) throw error;
        res.json({
          status: 200,
          listUser: data,
          message: "Update Customer successfully"
        });
      });
    });
  },
  // Method Delete One
  deleteOne: function deleteOne(req, res) {
    var sql = "DELETE FROM users  WHERE id = ?";
    var values = [req.params.id];
    db.query(sql, [values], function (err, del, fields) {
      if (err) throw err;
      var sql = "SELECT * FROM users";
      db.query(sql, function (error, data, fields) {
        if (error) throw error;
        res.json({
          status: 200,
          listUser: data,
          message: "Delete Customer successfully"
        });
      });
    });
  },
  // Method Delete All
  deleteAll: function deleteAll(req, res) {
    var sql = "DELETE FROM users";
    db.query(sql, function (err, data, fields) {
      if (err) throw err;
      var sql = "SELECT * FROM users";
      db.query(sql, function (error, data, fields) {
        if (error) throw error;
        res.json({
          status: 200,
          dbArticle: data,
          message: "Delete All Customer successfully"
        });
      });
    });
  }
};