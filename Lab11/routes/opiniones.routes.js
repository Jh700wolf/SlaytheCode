const express = require('express');
const router = express.Router();

const opiniones = [];

router.post('/agregar',(request, response, next)=>{
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

  module.exports = router;