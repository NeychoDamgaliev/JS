const userController = (function(){

    const getLogin = function(ctx){
        ctx.partial('views/user/login.hbs');
    };

    const postLogin = function(ctx){
        var username = ctx.params.username;
        var password = ctx.params.pass;
        
        userModel.login(username, password).done(function(data){
            storage.saveUser(data);
            storage.saveData('id',data._id);
            notification.info("Login Successful!")           
            ctx.redirect('#/');
        })
        .fail(function(data) {
            notification.error(data.responseJSON.description);
        });
    };

    const logout = function(ctx){
        userModel.logout().done(function(){
            storage.deleteUser();
            notification.info("Logout successful!")
            ctx.redirect('#/login');
        });
    }

    const getRegister = function(ctx) {
        ctx.partial('views/user/register.hbs');
    };

    const postRegister = function(ctx) {
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data);
            notification.info("Registration Successfull!")
            ctx.redirect('#/');
        });
    }

    //SHOW OR HIDE INITIAL LINKS ON STARTUP
    const initializeLogin = function(){
        let userInfo = storage.getData('userInfo');

        if(userModel.isAuthorized()){
            $('#userViewName').text(userInfo.username);
            $('.logoutContainer').show();
            $('.hidden-when-logged-in').hide();
            $('.hidden-when-not-logged-in').show();            
        } else {
            $('.logoutContainer').hide();
            $('.hidden-when-logged-in').show();
            $('.hidden-when-not-logged-in').hide();
        }
    };

    return {
        getLogin,
        postLogin,
        logout,
        getRegister,
        postRegister,
        initializeLogin
    };
}());