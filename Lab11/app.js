const express = require('express');
const app = express();

const path =require('path')
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const usersRoutes =require('./routes/users.routes');
app.use("/users", usersRoutes);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const notasRoutes=require('./routes/notas.routes');

const opinionesRoutes=require('./routes/opiniones.routes');

const menuRoutes=require('./routes/menu.routes')

app.use("/notas", notasRoutes);

app.use("/opiniones", opinionesRoutes);

app.use("/", menuRoutes);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode=404;
    response.send("No se encontro lo que buscas!")
});

app.listen(3000);

