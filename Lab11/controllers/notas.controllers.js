const Nota=require('../models/notas.model')

exports.get_agregar_notas = (request, response, next)=>{
  console.log(request.seesion.username);
  response.render("agregar_nota",{
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username||'',
});
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
      isLoggedIn: request.session.isLoggedIn || false,
      username: request.session.username||'',
      notas: Nota.fetchAll(),
    });

  