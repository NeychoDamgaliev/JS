const app = Sammy('#container', function(){
    this.use('Handlebars', 'hbs');
    this.before({except: {}}, function() {
        userController.initializeLogin();
    });


    this.get('#/', homeController.index);
    this.get('#/index', homeController.index);
    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.logout);
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);
    this.get('#/addFlight', flightController.getAddFlight);
    this.post('#/addFlight', flightController.postAddFlight);
    this.get('#/flight/:id', flightController.getFlightDetails);


    
});

$(function(){
    app.run('#/');
});