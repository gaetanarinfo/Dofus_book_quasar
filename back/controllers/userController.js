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
        })
    },
    // Method Post
    post: async(req, res) => {
        let sql = `INSERT INTO users (name,email,password) values(?)`;
        let values = [
            req.body.name,
            req.body.email,
            req.body.password
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
    },
    // Method Edit One User
    editOne: (req, res) => {
        let sql = `UPDATE users 
                   SET name = '${req.body.name}',
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