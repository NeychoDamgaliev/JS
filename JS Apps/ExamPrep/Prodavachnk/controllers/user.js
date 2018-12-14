const user = (function(){

    const getLogin = function(ctx){
        ctx.partial('views/user/login.hbs');
    };

    const postLogin = function(ctx){
        var username = ctx.params.username;
        var password = ctx.params.pass;
        
        userModel.login(username, password).done(function(data){
            storage.saveUser(data);           
            ctx.redirect('#/');
        });
    };

    const logout = function(ctx){
        userModel.logout().done(function(){
            storage.deleteUser();
            
            ctx.redirect('#/');
        });
    }

    const getRegister = function(ctx) {
        ctx.partial('views/user/register.hbs');
    };

    const postRegister = function(ctx) {
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data);

            ctx.redirect('#/');
        });
    }

    const initializeLogin = function(){
        let userInfo = storage.getData('userInfo');

        if(userModel.isAuthorized()){
            $('#userViewName').text(userInfo.username);
            $('#logoutContainer').removeClass('d-none');
            $('.hidden-when-logged-in').addClass('d-none');
        } else {
            $('#logoutContainer').addClass('d-none');
            $('.hidden-when-logged-in').removeClass('d-none');
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