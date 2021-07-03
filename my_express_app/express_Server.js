var express = require('express');
var app = express;


app.get('/', function (req, res) {
    res.send('Hellow world from Express');
})

var server = app.listen(8383, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example Express app listening at http://%s:%s", host, port);

})
