var http = require("http");
	url=require("url");

function start(route,handle){
	http.createServer(function onRequest(request, response) {
	  console.log("Request " + url.parse(request.url).pathname +" received.");

	  route(handle,url.parse(request.url).pathname);

	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello World");
	  response.end();
	}).listen(8888);

	console.log("Server has started.");
}

function upload(){
	console.log("Request handler 'upload' was called!!")
}

exports.upload=upload;
exports.start=start;