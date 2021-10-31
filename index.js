var http = require("http"); //importando una libreria

var server = http.createServer();//Crear un servidor

function mensaje(req, resp){
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola Mundo en clase de dev app web');
    resp.end();
}

server.on('request', mensaje);

server.listen(3030, function(){
    console.log('La aplicación esta escuchando por el puerto 3030');
});