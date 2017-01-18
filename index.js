var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(8084, function() {
    console.log('Connected on port 8084')
});
