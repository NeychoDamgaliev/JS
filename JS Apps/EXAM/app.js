const app = Sammy('#sammyContainer', function(){
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
    this.get('#/dashboard', petsController.showAll);
    this.get('#/myPets', petsController.myPets);
    this.get('#/edit/:petId', petsController.editPet);
    this.post('#/edit/:petId', petsController.postEditPet);
    this.get('#/delete/:petId', petsController.deletePet);
    this.post('#/delete/:petId', petsController.postDeletePet);
    this.get('#/details/:petId', petsController.detailsPet);
    this.get('#/pet/:petId', petsController.pet);
    this.get('#/addPet', petsController.addPet);
    this.post('#/addPet', petsController.postAddPet);
    this.get('#/dashboard/:type', petsController.filter);
    

    // this.get('#/addFlight', flightController.getAddFlight);
    // this.post('#/addFlight', flightController.postAddFlight);
    // this.get('#/flight/:id', flightController.getFlightDetails);


    
});

$(function(){
    app.run('#/');
});