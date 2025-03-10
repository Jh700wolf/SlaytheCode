exports.post_agregar_opinion = (request, response, next) => {
    console.log(request.session.username);
    const mi_opinion=new (request.body.nombre);
    mi_opinion.save()

}