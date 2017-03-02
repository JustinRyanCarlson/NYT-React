var express = require("express");
var router = express.Router();
var articles = require('./../models/articles.js');



router.get('/api/saved', function (req, res) {
    articles.find({}, function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.json(articles);
        }
    });
});

router.post('/api/saved', function (req, res) {
    var newArticle = req.body;
    // need to see what data ill be getting from the front end
    newArticle.save(function (err, article) {
        if (err) {
            console.log(err);
        } else {
            res.json('pass');
        }
    });
});

router.delete('/api/saved', function (req, res) {
    var articleId = req.body;

    articleId.findByIdAndRemove(articleId, function (err, article) {
        if (err) {
            console.log(err);
        } else {
            res.json('pass');
        }
    });
});

router.get('*', function (req, res) {
    var dir = __dirname;
    var dirSplit = dir.split('controller');
    dir = dirSplit[0];
    res.sendFile(dir + 'public/assets/index.html');
});

// Export routes for server.js to use.
module.exports = router;