var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(request,response) {
    var pathRoute = path.join(__dirname, '../public/views/index.html');
    response.sendFile(pathRoute);
});

module.exports = router;