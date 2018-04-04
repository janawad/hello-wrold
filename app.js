var http = require('http');
http.createServer(function(req,res){
	res.writeHead('200',{ContentType:'text/plain'});
	res.write("hello nodejs");
	res.end();
}).listen(3000)
console.log("run the server: 3000");