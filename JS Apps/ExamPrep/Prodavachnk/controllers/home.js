 const home = (function(){
    const index = function(ctx) {
        ctx.swap('<h2>INDEX hide me later</h2>');
        // this.partial('./views/home/index.hbs');
    };

    return {
        index
    };
}());