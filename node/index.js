var server=require("./server");
var	router=require("./router");
	requestHandlers =require("./requestHandlers");

var handel={};
handel["/"]=requestHandlers.start;
handel["/start"]=requestHandlers.start;
handel["/upload"]=requestHandlers.upload;

server.start(router.route,handel);