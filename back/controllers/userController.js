const bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')

/*
 * Import Module
 ****************/

/*
 * Controller
 *************/
module.exports = {
    // Method Get
    get: async(req, res) => {
        // Variable de récupération de tout les users
        let sql = `SELECT * FROM users`;
        db.query(sql, (error, data, fields) => {
            if (error) throw error;
            res.json({
                status: 200,
                listUser: data,
                message: "users lists retrieved successfully"
            })

            console.log(res);
        })
    },
    // Methode de connexion push
    push: async(req, res) => {

        const sess = req.session

        let sql = `SELECT * from users WHERE email = "${req.body.email}"`;
        let values = [
            req.body.email,
            req.body.password
        ];

        db.query(sql, values, function(err, getUser) {
            if (err) throw err;

            getUser.forEach(r => {

                if (r.email != req.body.email) {
                    res.json({
                        status: 200,
                        listUser: 'Pas le bon email'
                    })
                } else {

                    bcrypt.compare(req.body.password, r.password, (error, same) => {

                        if (same) {

                            const payload = {
                                email: r.email
                            }

                            let token = jwt.sign(payload, 'token', {
                                expiresIn: 1440
                            })

                            console.log('OK 1')
                            sess.userId = r.id
                            sess.status = r.status
                            console.log(req.session)

                            res.send({
                                sess,
                                token
                            })

                            // res.json({
                            //     status: 200,
                            //     listUser: 'Pas le bon mot de passe',
                            //     message: sess
                            // })

                        } else {
                            res.json({
                                status: 200,
                                listUser: 'Pas le bon mot de passe'
                            })
                        }

                    })

                }
            });
        })
    },
    // Method Post
    post: async(req, res) => {
        let sql = `INSERT INTO users (lastname,firstname,email,password,status) values(?)`;

        bcrypt.hash(req.body.password, 10, (error, encrypted) => {
            values = [
                req.body.lastname,
                req.body.firstname,
                req.body.email,
                req.body.password = encrypted,
                'user'
            ];

            db.query(sql, [values], function(err, data, fields) {
                if (err) throw err;
                let sql = `SELECT * FROM users`;
                db.query(sql, (error, dataRes, fields) => {
                    if (error) throw error;
                    res.json({
                        status: 200,
                        listUser: dataRes,
                        message: "Add Customer successfully"
                    })
                })
            })
        })
    },
    // Method Edit One User
    editOne: (req, res) => {
        let sql = `UPDATE users 
                   SET lastname = '${req.body.lastname}',
                        firstname = '${req.body.firstname}',
                       email = '${req.body.email}'
                       password = '${req.body.password}',
                   WHERE id = '${req.params.id}';`

        db.query(sql, function(err, edit, fields) {
            if (err) throw err;
            let sql = `SELECT * FROM users`;
            console.log(edit)
            db.query(sql, (error, data, fields) => {
                if (error) throw error;
                res.json({
                    status: 200,
                    listUser: data,
                    message: "Update Customer successfully"
                })
            })
        })
    },
    // Method Delete One
    deleteOne: (req, res) => {
        let sql = `DELETE FROM users  WHERE id = ?`;
        let values = [
            req.params.id
        ];
        db.query(sql, [values], function(err, del, fields) {
            if (err) throw err;
            let sql = `SELECT * FROM users`;
            db.query(sql, (error, data, fields) => {
                if (error) throw error;
                res.json({
                    status: 200,
                    listUser: data,
                    message: "Delete Customer successfully"
                })
            })
        })
    },
    // Method Delete All
    deleteAll: (req, res) => {
        let sql = `DELETE FROM users`;
        db.query(sql, function(err, data, fields) {
            if (err) throw err;
            let sql = `SELECT * FROM users`;
            db.query(sql, (error, data, fields) => {
                if (error) throw error;
                res.json({
                    status: 200,
                    dbArticle: data,
                    message: "Delete All Customer successfully"
                })
            })
        })
    }
}