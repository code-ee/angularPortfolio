var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile(path.join(__dirname, '..', 'views', 'index.html'), function (err, data){
        var html = data.toString();
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': html.length
        });

        res.write(html);
        res.end();
    });
});



module.exports = router;