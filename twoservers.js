var http = require('http');

var PORT = 7000;
var PORTT = 7500;

var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequest);

serverOne.listen(PORT, function(){
    console.log("You are amazing");
})

serverTwo.listen(PORTT, function(){
    console.log("You could do better");
});

function handleRequest(req, res){
        response.end("It works!");
}

