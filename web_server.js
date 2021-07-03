var http = require('http');
var fs = require('fs');
// var url = require('url');
const { Http2ServerRequest } = require('http2');

// Create a server
http.createServer(function (request, response) {
    // Parse the request containing file name
    // var pathname = url.parse(request.url).pathname;
    // var pathname = 'tttt';
    // pathname = request.url;
    const baseURL = 'http://' + request.headers.host + '/';
    console.log(baseURL);

    var urlpath = new URL(request.url, baseURL);
    var pathname = urlpath.pathname;
    console.log("Request for " + pathname + " received.");

    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);

            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // Page found
            // HTTP Status: 200: OK
            // Content Type: text/plain
            response.writeHead(200, { 'Content-Type': 'text/html' });

            // Write the content of the file to response body
            response.write(data.toString());
        }

        // Send the response body
        response.end();
    });
}).listen(8383);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
