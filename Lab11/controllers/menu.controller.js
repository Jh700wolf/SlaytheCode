exports.get_menu=(request, response, next)=>{
    console.log(request.session.username);
    response.render("menu_principal",{
      isLoggedIn: request.session.isLoggedIn || false,
      username: request.session.username||'',
  });
};