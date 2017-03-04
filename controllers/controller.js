var express = require("express");
var router = express.Router();
var articles = require('./../models/articles.js');


// Get route that will return everything from the database.
router.get('/api/saved', function (req, res) {
    articles.find({}, function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.json(articles);
        }
    });
});

// POST route that will create a new document in the database.
router.post('/api/saved', function (req, res) {
    var newArticle = new articles({
        title: req.body.abstract,
        date: req.body.pub_date,
        url: req.body.web_url
    });

    newArticle.save(function (err, article) {
        if (err) {
            console.log(err);
        } else {
            res.json('pass');
        }
    });
});

// DELETE route that will delete a document from the database.
router.delete('/api/saved/:id', function (req, res) {
    articles.findByIdAndRemove(req.params.id, function (err, article) {
        if (err) {
            console.log(err);
        } else {
            res.json('pass');
        }
    });
});

// GET route that is the deafult route if the routes before it are not hit.
router.get('*', function (req, res) {
    var dir = __dirname;
    var dirSplit = dir.split('controller');
    dir = dirSplit[0];

    res.sendFile(dir + 'public/assets/index.html');
});

// Export routes for server.js to use.
module.exports = router;