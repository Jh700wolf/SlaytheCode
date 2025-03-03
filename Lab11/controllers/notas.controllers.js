
const notas = [];

exports.get_agregar_notas = (request, response, next)=>
  {response.render("agregar_nota");
};

exports.post_agregar_notas = (request, response, next)=>{
  console.log(request.body);
  notas.push(request.body.nombre);
  response.render("lista_notas",
    {
      notas:notas,
    });
};