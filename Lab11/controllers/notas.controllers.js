const Nota=require('../models/notas.model')

exports.get_agregar_notas = (request, response, next)=>{
  console.log(request.session.username);
  response.render("agregar_nota",{
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username||'',
    csrfToken: request.csrfToken(),
});
};

exports.post_agregar_notas = (request, response, next)=>{
  console.log(request.body);
  const mi_nota=new Nota(request.body.nombre);
  mi_nota.save()
  .then(()=>{
    response.redirect('/notas/');
    console.log("NOTA GUARDADA CORRECTAMENTE");
  }) //Si la promesa se cumple
  .catch((error)=>{
    console.log(error);
  }); //Si la promesa falla;
};

exports.get_root = (request,response,next)=>{
  const mensaje =request.session.info || '';
  if(request.session.info){
    request.session.info='';
  }
  Nota.fetchAll(request.params.id)
    .then(([rows, fieldData]) => {
      console.log(fieldData);
      console.log(rows);
      response.render('lista_notas',{
        isLoggedIn:request.session.isLoggedIn || false,
        username: request.session.username || '',
        notas:rows,
        info: mensaje,
      });
    }).catch((error)=>{
      console.log(error);
    });
};

  