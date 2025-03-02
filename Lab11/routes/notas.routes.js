const express = require('express');

const router = express.Router();

const notas = [];

//app.get es para registrar un middleware para peticiones http get.
router.get('/notas',(request, response, next)=>{
    response.render("agregar_nota");
  });
  
  //app.post es para registrar un middleware para peticiones http post.
router.post('/notas',(request, response, next)=>{
    console.log(request.body);
    notas.push(request.body.nombre);
    let html=html_header;
    html+='<div class="row">';
    for(const nota of notas){
      html+=nota;
    }
    response.send(html);
  });

  const path = require("path");
  router.get("/agregar",(request, response, next)=>{
    response.sendFile(path.join(__dirname, "..","views","index.html"));

  });

  module.exports = router;
