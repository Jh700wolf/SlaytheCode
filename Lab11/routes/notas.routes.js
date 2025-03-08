const express = require('express');
const router = express.Router();


const notas_controllers=require('../controllers/notas.controllers');
//app.get es para registrar un middleware para peticiones http get.
router.get('/agregar',notas_controllers.get_agregar_notas);
  
  //app.post es para registrar un middleware para peticiones http post.
router.post('/agregar', notas_controllers.post_agregar_notas);



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
  router.get("/",notas_controllers.get_root);

  module.exports = router;
