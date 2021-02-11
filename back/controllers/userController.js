const bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    User = require('../database/models/users')

/*
 * Import Module
 ****************/

/*
 * Controller
 *************/
module.exports = {
    get: async(req, res) => {
        const sess = req.session
        console.log('server session controller /session')
        console.log(sess)
        res.send({
            sess
        })
    },
    // Methode de connexion push
    post: async(req, res) => {
        let userAuth = await User.findOne({ email: req.body.email })
            // const dbUserID = await User.find({})

        if (!userAuth) {
            console.log('pas ds la db')
            res.redirect('/login')
        } else {
            const { email, password } = req.body
                // , dbUser = await User.find({})
                // L'on déclare la récupération de notre req.session pour pouvoir lui attribuer notre function
                // Par la suite
                // eslint-disable-next-line comma-style
                , sess = req.session

            User.findOne({ email, password }, (err, User) => {
                if (err) {
                    console.log(err)

                    // eslint-disable-next-line padded-blocks
                } else if (User) {
                    console.log(req.body);
                    // eslint-disable-next-line padded-blocks

                    const payload = {
                        _id: User._id,
                        email: User.email
                    }
                    let token = jwt.sign(payload, 'token', {
                        expiresIn: 1440
                    })
                    console.log('OK 1')
                    sess.email = User.email
                    sess.status = User.status
                    sess.userId = User._id
                    sess.token = token
                    console.log(req.session)

                    res.send({
                        sess,
                        token
                    })
                } else {
                    console.log(err)
                }

            })
        }
    },
    // Method Post
    register: async(req, res, next) => {
        // const dbUser = await User.find({})
        User.create({
            ...req.body
        })
        next()
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