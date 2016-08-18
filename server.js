var random = require("random-js")();
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ currentNumber:  random.integer(1, 1000)});
});

app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);
