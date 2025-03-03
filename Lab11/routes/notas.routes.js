const express = require('express');

const router = express.Router();

const notas = [];

const opiniones = [];

//app.get es para registrar un middleware para peticiones http get.
router.get('/notas',(request, response, next)=>{
    response.render("agregar_nota");
  });
  
  //app.post es para registrar un middleware para peticiones http post.
router.post('/notas',(request, response, next)=>{
    console.log(request.body);
    notas.push(request.body.nombre);
    response.render("lista_notas",
      {
        notas:notas,
      });
  });

router.post('/opiniones',(request, response, next)=>{
  console.log(request.body);
  opiniones.push(request.body.opinion);
  const fs=require("node:fs");
  for(const opinion of opiniones) {
    fs.writeFileSync("opinion.txt",opinion+"\n");
  }
  response.render("opinion_confirmada",
    {
      opiniones:opiniones,
    });
});

router.post('/busqueda',(request, response, next)=>{
  console.log(request.body);
  const busqueda=request.body.busqueda;
  response.render("busqueda_fallida",
    {
      busqueda:busqueda,
    }
  )
});

  const path = require("path");
  router.get("/",(request, response, next)=>{
    response.sendFile(path.join(__dirname, "..","views","index.html"));

  });

  module.exports = router;
