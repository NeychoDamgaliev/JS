const petsModel = (function () {
    const listAllPets = function () {

        let url = `appdata/${storage.appKey}/pets?query={}&sort={likes: -1}`;
        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString };

        return requester.get(url, {}, headers);
    };

    const listMyPets = function (id) {
        //TODO add id
        
        let url = `appdata/${storage.appKey}/pets?query={"_acl.creator":"${id}"}`;
        // https://baas.kinvey.com/appdata/app_id/pets?query={"_acl.creator":"${user_id}"}
        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString };

        return requester.get(url, {}, headers);
    };

    const getPet = function (petId) {
        let url = `appdata/${storage.appKey}/pets/${petId}`;
        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString };

        return requester.get(url, {}, headers);
    };

    const editPet = function (petId, data) {
        let url = `appdata/${storage.appKey}/pets/${petId}`;

        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString };


        return requester.put(url, data, headers);


    }

    const deletePet = function (petId) {
        let url = `appdata/${storage.appKey}/pets/${petId}`;

        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString };

        return requester.del(url, {}, headers);
    };

    const createPet = function (ctx) {
        debugger;
        var data = {
                "name": ctx.params.name,
                "description":ctx.params.description,
                "imageURL":ctx.params.imageURL,
                "category": ctx.params.category,
                "likes": "0"        
        };

        let url = `appdata/${storage.appKey}/pets`;

        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString };
        
        return requester.post(url, data, headers);
    };

    return {
        listAllPets,
        listMyPets,
        getPet,
        editPet,
        deletePet,
        createPet
    };

})();