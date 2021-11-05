const express = require("express");
const { request } = require("http");

const app = express();

//Definiendo una ruta
app.get("/ping",(request, response) =>{
    response.send("pong");
});

app.get("/", (request,response)=>{
    response.send("Página principal");
});

app.get("/contacto", function(req,res){
    //res.send("Ruta de contactenos");
    res.send("Hola "+req.query.nombre);
});

app.post("/registro", function(req,res){

});

app.listen(8080, "localhost");