const flightModel = (function () {
    var userUrl = `appdata/${storage.appKey}/flights`;
    // https://baas.kinvey.com/appdata/app_key/flights
    const addFlight = function (params) {
        var data = {
            // username: params.username,
            // password: params.pass
            "destination": params.destination,
            "origin": params.origin,
            "departure": params.departureDate,
            "seats": params.seats,
            "cost": params.cost,
            "image": params.img,
            "isPublished": !!params.public
        }

        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString};
        return requester.post(userUrl, data, headers);
    };

    const getPublicFlights = function () {
        var userUrl = `appdata/${storage.appKey}/flights?query={"isPublished":true}`;
        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString};

        return requester.get(userUrl, {}, headers);
    };

    const getFlightDetails = function (id) {
        var userUrl = `appdata/${storage.appKey}/flights/${id}`;
        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString};

        return requester.get(userUrl, {}, headers);
    }
    return {
        addFlight,
        getPublicFlights,
        getFlightDetails
    }
})();