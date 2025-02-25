/*const html_header = `
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

const html_EPIC = '';

const html_footer = ``;

const notas = [];

const http = require('http');

const server = http.createServer( (request, response) => {  
  
  if(request.method == "GET" && (request.url == "/agregar" || request.url == "/")) {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header + html_form + html_footer);
    response.end();
  } 
  else if(request.method == "POST" && request.url=="/opiniones"){
    const datos_completos=[];
    request.on('data',(data)=>{
        console.log(data);
        
    })
  }
  
  else if(request.method == "POST" && request.url == "/agregar") {
    
    const datos_completos = [];

    request.on('data', (data)=>{
      console.log(data);
      datos_completos.push(data);
    });

    request.on('end', () => {
      const string_datos_completos = Buffer.concat(datos_completos).toString();
      console.log(string_datos_completos);
      //split() separa un string por el parámetro recibido, 
      //y cada parte la pone en un arreglo
      const nueva_nota = string_datos_completos.split('=')[1];

      //Si fueran 2 inputs:
      //const nueva_planta = string_datos_completos.split('&')[0].split('=')[1];

      notas.push(nueva_nota);

      response.setHeader('Content-Type', 'text/html');
      response.write(html_header);
      
      response.write(`<div class="row">`);
      for(const nota of notas) {
        response.write(nota);
        response.write("<br>")
      }
      response.write(`</div>`);

      response.write(html_footer);
      response.end();

    });

  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header);
    response.write('<div class="notification is-danger">La página no existe</div>');
    response.write(html_footer);
    response.end();
  }
    
});

server.listen(3000);*/



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

const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});
app.get('/agregar',(request, response, next)=>{
  response.send(html_header+html_form);
});
app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta. Es la combinacion de setheader, write y end
});



app.listen(3000);

