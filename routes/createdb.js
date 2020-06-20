const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

db.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log('DB Connected');
})

/* GET home page. */
router.get('/', function (req, res, next) {
    let sql = 'CREATE DATABASE db_express_app';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Db created. X)')
    })
    // res.render('index', { title: 'Express' });
    // 
    
});

module.exports = router;
