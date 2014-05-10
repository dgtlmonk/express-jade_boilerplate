var express = require('express');
var routes = require('./routes');
var path = require('path');


var app = express();

// environment setup
var port = process.env.PORT || 9000;
app.use(express.static(__dirname + '/public')); // static files location
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(require('connect-assets')());

// var router = express.Router();

app.get('/', routes.index);

app.listen(port);
console.log(' ----- Started app at port ' + port);


