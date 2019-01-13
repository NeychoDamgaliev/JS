const userController = (function(){

    const getLogin = function(ctx){
        ctx.partial('views/user/login.hbs');
    };

    const postLogin = function(ctx){
        var username = ctx.params.username;
        var password = ctx.params.password;
        
        userModel.login(username, password).done(function(data){
            storage.saveUser(data);
            storage.saveData('id',data._id);
            notification.info("Login successful.")           
            ctx.redirect('#/dashboard');
        })
        .fail(function(data) {
            notification.error(data.responseJSON.description);
        });
    };

    const logout = function(ctx){
        userModel.logout().done(function(){
            storage.deleteUser();
            notification.info("Logout successful.")
            ctx.redirect('#/');
        })
        .fail(function(data) {
            notification.error(data.responseJSON.description);
        });
        
    }

    const getRegister = function(ctx) {
        ctx.partial('views/user/register.hbs');
    };

    const postRegister = function(ctx) {
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data);
            notification.info("User registration successful.")
            ctx.redirect('#/');
        })
        .fail(function(data){
            notification.error(data.responseJSON.description);
        });
    }


    const initializeLogin = function(){
        let userInfo = storage.getData('userInfo');

        if(userModel.isAuthorized()){
            $('#userNameSpan').text(userInfo.username);
            $('.hidden-when-not-logged-in').show();
            $('.second-bar>ul').show();         
            $('.navbar-anonymous').hide();   
        } else {
            $('.navbar-anonymous').show();   
            $('.hidden-when-not-logged-in').hide();
            $('.second-bar>ul').hide();
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