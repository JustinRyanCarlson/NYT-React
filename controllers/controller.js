var express = require("express");
var router = express.Router();
var scrapedArticles = require('./../models/articles.js');



router.get('/api/saved', function (req, res) {

});

router.post('/api/saved', function (req, res) {

});

router.delete('/api/saved', function (req, res) {

});

router.get('*', function (req, res) {
    res.render('search_page.handlebars');
});

// Export routes for server.js to use.
module.exports = router;