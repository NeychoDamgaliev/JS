const flightController = (function () {
    const getAddFlight = function (ctx) {
        //JUST TO SEE IF HOME WORKS
        // ctx.swap('<h2>INDEX PAGE<h2>');
        ctx.isAuthorized = userModel.isAuthorized();
        this.partial('./views/flights/addFlight.hbs');
    };
    const postAddFlight = function (ctx) {

        flightModel.addFlight(ctx.params).done(function (data) {
            // storage.saveUser(data);
            notification.info("Created flight.")
            ctx.redirect('#/');
        });

    };

    const getFlightDetails = function(ctx) {
        let flightId = ctx.params.id;

        flightModel.getFlightDetails(flightId).done( function (data) {
        
            ctx.cost = data.cost;
            ctx.departure = data.departure;
            ctx.destination = data.destination;
            ctx.image = data.image;
            ctx.origin = data.origin;
            ctx.seats = data.seats;
            ctx._id = data._id;
            ctx.isAuthor = data._acl.creator === storage.getData('id');
            ctx.partial('./views/flights/flightDetails.hbs');
        });
    };


    return {
        getAddFlight,
        postAddFlight,
        getFlightDetails
    };
}());