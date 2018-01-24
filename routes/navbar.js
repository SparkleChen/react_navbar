//做一个查询操作
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uri = 'mongodb://localhost:27017/users';
var db = mongoose.createConnection(uri);

var User = new Schema({
    name: String,
    email: String,
    age: String
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('navbar');
});

router.get('/data', function (req, res, next) {
    db.model('users', User).findOne({name: "leo"}, function (err, user) {
        res.json(user);
    });
});

module.exports = router;