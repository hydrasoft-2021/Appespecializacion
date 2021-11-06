const express = require("express");
const mensaje = require("./Mensaje");

const app = express();

// //Definiendo una ruta
// app.get("/ping",(request, response) =>{
//     response.send("pong");
// });

// app.get("/", (request,response)=>{
//     response.send("Página principal");
// });

// app.get("/contacto", function(req,res){
//     //res.send("Ruta de contactenos");
//     res.send("Hola "+req.query.nombre);
// });

// app.post("/registro", function(req,res){

// });

// express().use("/",mensaje({saludo: "Hola Mundo web"})).listen(8080);

//app.listen(8080, "localhost");    
const PORT = 3030;

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(PORT, function(err){
    if(!err){
        console.log("Servidor corriendo puerto ",PORT);
    }else{
        console.log(err);
    }
})