const express = require('express');
const app = express();

const path =require('path')
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const notasRoutes=require('./routes/notas.routes');

const opinionesRoutes=require('./routes/opiniones.routes');

app.use("/notas", notasRoutes);

app.use("/opiniones", opinionesRoutes);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode=404;
    response.send("No se encontro lo que buscas!")
});

app.listen(3000);

