
const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');
const canView = require('../util/canViewNotas');
const canCreate = require('../util/canCreateNotas');

const notas_controllers=require('../controllers/notas.controllers');
//app.get es para registrar un middleware para peticiones http get.
router.get('/agregar', isAuth, canCreate, notas_controllers.get_agregar_notas);
  
  //app.post es para registrar un middleware para peticiones http post.
router.post('/agregar', isAuth, canCreate, notas_controllers.post_agregar_notas);



router.post('/busqueda', isAuth,(request, response, next)=>{
  console.log(request.body);
  const busqueda=request.body.busqueda;
  response.render("busqueda_fallida",
    {
      busqueda:busqueda,
    }
  )
});

  const path = require("path");
  router.get("/",notas_controllers.get_root);

  module.exports = router;
