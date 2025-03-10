const Usuario =require('../models/users.model')

exports.get_login=(request,response,next)=>{
    const mensaje=request.session.info || '';
    if (request.session.info){
        request.session.info='';
    }

    response.render('login.ejs',{
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username||'',
        isNew:false,
        info: mensaje,
    });
};

exports.post_login=(request,response,next)=>{
    Usuario.fetchOne(request.body.username).then(([rows, fieldData]) => {
        if(rows.length > 0) {
            const bcrypt = require('bcryptjs');
            bcrypt.compare(request.body.password, rows[0].password).then((doMatch) => {
                if (doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.username = request.body.username;
                    return request.session.save((error) => {
                        response.redirect('/notas');
                    });
                } else {
                    response.redirect('/users/login');
                }
            }).catch((error) => {
                console.log(error);
            });
        } else {
            response.redirect('/users/login');
        }
    }).catch((error) => {
        console.log(error);
    });

};

exports.get_logout=(request,response,next)=>{
    request.session.destroy(() => {
        //Este código se ejecuta cuando la sesión se elimina.
        response.redirect('/users/login'); 
    });
};

exports.get_signup=(request,response,next)=>{
    const mensaje=request.session.info || '';
    if (request.session.info){
        request.session.info='';
    }

    response.render('login.ejs',{
        isLoggedIn:request.session.isLoggedIn||false,
        username:request.session.username||'',
        isNew: true,
        info:mensaje,
    })
};
exports.post_signup=(request,response,next)=>{
    const usuario = new
    Usuario(request.body.username, request.body.password);
    usuario.save().then(()=>{
        request.session.info = `Tu usuario se ha creado`;
        response.redirect('/users/login');
    }).catch((error) => {
        console.log(error);
    });
};
