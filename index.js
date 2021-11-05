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

app.listen(8080, "localhost");