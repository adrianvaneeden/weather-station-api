var fs = require("fs");

// Asynchronous read
var date = fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
console.log(__filename);

function printHello() {
    console.log(" Hello Adrian!");
}

setTimeout(printHello, 2000);
// setInterval(printHello, 2000);
