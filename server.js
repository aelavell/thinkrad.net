
var port = process.env.PORT || 8080;
var connect = require('connect');
var path = require('path');

connect().use(connect.static(path.join(__dirname, 'public'))).listen(port);
