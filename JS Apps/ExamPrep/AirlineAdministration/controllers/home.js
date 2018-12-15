 const home = (function(){
    const index = function(ctx) {
        //JUST TO SEE IF HOME WORKS
        // ctx.swap('<h2>INDEX PAGE<h2>');
            this.partial('./views/home/index.hbs');

    };
    return {
        index
    };
}());