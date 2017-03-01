var express = require("express");
var router = express.Router();
var scrapedArticles = require('./../models/articles.js');



router.get('/api/saved', function (req, res) {
    scrapedArticles.find().sort('-time').exec(function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.render('scrape.handlebars', { articles: articles });
        }
    });
});

router.post('/api/saved', function (req, res) {
    scrapedArticles.find().sort('-time').exec(function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.render('scrape.handlebars', { articles: articles });
        }
    });
});

router.delete('/api/saved', function (req, res) {
    scrapedArticles.find().sort('-time').exec(function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.render('scrape.handlebars', { articles: articles });
        }
    });
});

router.get('*', function (req, res) {
    res.render('scrape.handlebars', { articles: articles });
});

// Export routes for server.js to use.
module.exports = router;