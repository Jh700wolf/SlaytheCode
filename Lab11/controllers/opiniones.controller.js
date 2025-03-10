const Opinion = require('../models/opinion.model')

exports.get_opinion = (request, response, next)=>{
    const mensaje =request.session.info || '';
    if(request.session.info){
      request.session.info='';
    }
    Opinion.fetchAll(request.params.id)
    .then(([rows, fieldData]) => {
      console.log(fieldData);
      console.log(rows);
      response.render('mostrar_opiniones',{
        isLoggedIn:request.session.isLoggedIn || false,
        username: request.session.username || '',
        opiniones:rows,
        info: mensaje,
      });
    }).catch((error)=>{
      console.log(error);
    });
};

exports.get_agregar_opinion = (request, response, next)=>{
    console.log(request.session.username);
    response.render("menu_principal",{
      isLoggedIn: request.session.isLoggedIn || false,
      username: request.session.username||'',
  });
  };



exports.post_agregar_opinion = (request, response, next) => {
    console.log(request.session.username);
    const mi_opinion=new Opinion(request.body.opinion);
    mi_opinion.save()
    .then(()=>{
        response.redirect('/opiniones/ver');
        console.log("OPINION GUARDADA CORRECTAMENTE");
      }) //Si la promesa se cumple
      .catch((error)=>{
        console.log(error);
      }); //Si la promesa falla;

}