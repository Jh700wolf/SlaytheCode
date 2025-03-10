const express = require('express');
const router = express.Router();

const opiniones_Controller =require('../controllers/opiniones.controller');

router.get('/agregar', opiniones_Controller.get_agregar_opinion)
router.get('/ver', opiniones_Controller.get_opinion)
router.post('/agregar', opiniones_Controller.post_agregar_opinion /*(request, response, next)=>{
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
  }*/
 
 
    );

router.get("/", )

  module.exports = router;