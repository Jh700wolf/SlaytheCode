const express = require('express');
const router = express.Router();

const html_header = `
<!doctype html>
<html class="no-js" lang="es" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lab 10</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites/dist/css/foundation.min.css">
    </head>
    <body>
        <div class="grid-x">
            <div class="cell small-6"><h1>Laboratorio 10</h1></div>
            <div class="cell small-6">
                <div class="button-group">
                    <a class="large button" href="https://get.foundation/sites/docs/kitchen-sink.html">Hola</a>
                    <a class="large button" href="https://get.foundation/sites/docs/xy-grid.html">Adios</a>
                </div>
            </div>
        </div>
    `;
const html_form = `        
<!--FORM-->
        <div>
            <form action="/agregar" method="POST">
                <Label>Nombre:</Label>
                <input type="text" placeholder="Nombre" id="nombre" name="nombre">
                <input class="button" type="submit" value="Enviar">

            </form>
        </div>
        <div>
            <form action="/opiniones" method="POST">
                <Label>Dame tu opinion de la página:</Label>
                <input type="text" placeholder="Escribe aqui..." id="opinion" name="opinion">
                <div class="input-group-button">
                    <input type="submit" class="button" value="Enviar">
                </div>
            </form>
        </div>
    </body>`;




const notas = [];

//app.get es para registrar un middleware para peticiones http get.
router.get('/agregar',(request, response, next)=>{
    response.send(html_header+html_form);
  });
  
  //app.post es para registrar un middleware para peticiones http post.
router.post('/agregar',(request, response, next)=>{
    console.log(request.body);
    notas.push(request.body.nombre);
    let html=html_header;
    html+='<div class="row">';
    for(const nota of notas){
      html+=nota;
    }
    response.send(html);
  });

  module.exports = router;
