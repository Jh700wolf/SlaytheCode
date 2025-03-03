const Nota=require('../models/notas.model')

exports.get_agregar_notas = (request, response, next)=>{
  response.render("agregar_nota");
};

exports.post_agregar_notas = (request, response, next)=>{
  console.log(request.body);
  const mi_nota=new Nota(request.body.nombre);
  mi_nota.save();
  response.redirect('/notas/');
};

exports.get_root = (request,response,next)=>
  response.render("lista_notas",
    {
      notas: Nota.fetchAll(),
    });

  