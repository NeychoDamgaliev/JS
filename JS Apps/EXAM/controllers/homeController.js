 const homeController = (function(){
    const index = function(ctx) {
        //JUST TO SEE IF HOME WORKS
        // debugger;
        // ctx.swap('<h2>WORKS<h2>');
            // ctx.isAuthorized = userModel.isAuthorized();
            // flightModel.getPublicFlights().done(function(data) {
            //     ctx.flights = data;
                
                ctx.partial('./views/home/index.hbs');
            // })
            
    };
    return {
        index
    };
}());