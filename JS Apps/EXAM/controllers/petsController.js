const petsController = (function () {
    const showAll = function (ctx) {
        petsModel.listAllPets().done(function (data) {
            let userInfo = storage.getData('userInfo');
            ctx.pets = data.filter((el) => {
                return el._acl.creator != userInfo.id;
            });
            
            ctx.partial('./views/pets/allPets.hbs');

        });

    };

    const myPets = function (ctx) {
        let userId = storage.getData('userInfo').id;

        petsModel.listMyPets(userId).done(function (data) {
            ctx.pets = data;
            
            ctx.partial('./views/pets/myPets.hbs');
        });
    };

    const editPet = function (ctx) {
        let petId = ctx.params.petId;
        petsModel.getPet(petId).done(function (data) {
            ctx.name = data.name;
            ctx.likes = data.likes;
            ctx.imageURL = data.imageURL;
            ctx.id = data._id;
            ctx.description = data.description;

            ctx.partial('./views/pets/editPet.hbs');
        })
            .fail(function (data) {
                notification.error(data.responseJSON.description);
            });
    };

    const postEditPet = function (ctx) {
        let petId = ctx.params.petId;

        petsModel.getPet(petId).done(function (petData) {
            petData.description = ctx.params.description;
            petsModel.editPet(petId, petData).done(function (data) {
                    notification.info("Updated successfully!");
                    ctx.redirect('#/dashboard');
            })
                .fail(function (data) {
                    notification.error(data.responseJSON.description);
                });
        })
            .fail(function (data) {
                notification.error(data.responseJSON.description);
            });
    }

    const deletePet = function (ctx) {
        let petId = ctx.params.petId;
        petsModel.getPet(petId).done(function (data) {
            ctx.name = data.name;
            ctx.likes = data.likes;
            ctx.imageURL = data.imageURL;
            ctx.id = data._id;
            ctx.description = data.description;

            ctx.partial('./views/pets/deletePet.hbs');
        })
            .fail(function (data) {
                notification.error(data.responseJSON.description);
            });
    };

    const postDeletePet = function (ctx) {
        let petId = ctx.params.petId;
        petsModel.deletePet(petId).done(function (data) {
            notification.info("Pet removed successfully!");
            ctx.redirect('#/dashboard');
        })
            .fail(function (data) {
                notification.error(data.responseJSON.description);
            });;
    };
    
    const detailsPet = function(ctx) {
        let petId = ctx.params.petId;
        petsModel.getPet(petId).done(function (data) {
            ctx.name = data.name;
            ctx.likes = data.likes;
            ctx.imageURL = data.imageURL;
            ctx.id = data._id;
            ctx.description = data.description;

            ctx.partial('./views/pets/detailsPet.hbs');
        })
            .fail(function (data) {
                notification.error(data.responseJSON.description);
            });
    };

    const pet = function(ctx) {
        let petId = ctx.params.petId;

        petsModel.getPet(petId).done(function (petData) {
            petData.likes = +petData.likes + 1;
            petsModel.editPet(petId, petData).done(function (data) {
                    notification.info("Updated successfully!");
                    ctx.redirect('#/dashboard');
            })
                .fail(function (data) {
                    notification.error(data.responseJSON.description);
                });
        })
            .fail(function (data) {
                notification.error(data.responseJSON.description);
            });
    };

    const addPet = function (ctx) {
        ctx.partial('./views/pets/addPet.hbs');
    };

    const postAddPet = function (ctx) {
        petsModel.createPet(ctx).done(function(result){
            notification.info("Pet created.");
            ctx.redirect('#/dashboard');
        })
        .fail(function (data) {
            notification.error(data.responseJSON.description);
        });
    };

    const filter = function (ctx) {
        let filterParam = ctx.params.type;

        petsModel.listAllPets().done(function (data) {
            
            let userInfo = storage.getData('userInfo');
            ctx.pets = data.filter((el) => {
            
                return el._acl.creator != userInfo.id && el.category === filterParam;
            }).sort((a,b) => {
                return a.likes < b.likes;
            })
            ;
            
            ctx.partial('./views/pets/allPets.hbs');

        });

    };

    return {
        showAll,
        myPets,
        editPet,
        postEditPet,
        deletePet,
        postDeletePet,
        detailsPet,
        pet,
        addPet,
        postAddPet,
        filter
    };
}());