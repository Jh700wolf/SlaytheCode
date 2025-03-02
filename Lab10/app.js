const html_header=  `
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
                <div class="top-bar">
                <div class="top-bar-left">
                    <ul class="dropdown menu" data-dropdown-menu>
                    <li class="menu-text">Bienvenido a mi Lab 10!</li>
                    <li><a href="https://get.foundation/sites/docs/kitchen-sink.html">Kitchen Sink de Foundation</a></li>
                    <li><a href="https://get.foundation/sites/docs/xy-grid.html">Guia para el xy grid</a></li>
                    <li><a href="https://get.foundation/sites/docs/dropdown-menu.html">Guia para el menu</a></li>
                    </ul>
                </div>
                <div class="top-bar-right">
                    <ul class="menu">
                    <form action="/agregar/busqueda" method="POST">
                        <li><input type="search" placeholder="Buscar?"></li>
                        <li><button type="submit" class="button">Buscar</button></li>
                    </form>
                    </ul>
                </div>
                </div>
        </div>
`;
const html_form=`
<div>
    <form action="/agregar/notas" method="POST">
        <Label>Nombre:</Label>
        <input type="text" placeholder="Nombre" id="nombre" name="nombre">
        <input class="button" type="submit" value="Enviar">

    </form>
</div>
<div>
    <form action="/agregar/opiniones" method="POST">
        <Label>Dame tu opinion de la página:</Label>
        <input type="text" placeholder="Escribe aqui..." id="opinion" name="opinion">
        <div class="input-group-button">
            <input type="submit" class="button" value="Enviar">
        </div>
    </form>
</div>
</body>
`;

const html_footer ="";

const notas = [];

const opiniones=[];

const http = require('http');



const server = http.createServer( (request, response) => {  
  
  if(request.method == "GET" && (request.url == "/agregar/notas" || request.url == "/")) {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header + html_form + html_footer);
    response.end();
  }
  else if(request.method == "POST" && request.url=="/agregar/opiniones"){
    const datos_completos=[];
    request.on('data',(data)=>{
        console.log(data);
        datos_completos.push(data);
    });
    request.on('end', () => {
        const string_datos_completos = Buffer.concat(datos_completos).toString();
        console.log(string_datos_completos);
        const nueva_opinion = string_datos_completos.split('=')[1];
  
        opiniones.push(nueva_opinion);
  
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        
        response.write(`<div class="row">`);
        const fs=require("node:fs");
        for(const opinion of opiniones) {
          fs.appendFileSync("opinion.txt",opinion+"\n");
        }
        response.write(`Se cargo tu opinion!</div>`);
  
        response.write(html_footer);
        response.end();
  });
  

  }
  
  else if(request.method=="POST" && request.url=="/agregar/busqueda"){
    const datos=[];
    request.on('data',(data)=>{
        console.log(data);
        datos.push(data);
    });

    request.on('end',()=>{
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write("La funcion de busqueda aun no esta disponible. Perdon!")

    });
  }
  else if(request.method == "POST" && request.url == "/agregar/notas") {
    
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

server.listen(3000);