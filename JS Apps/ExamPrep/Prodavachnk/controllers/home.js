 const home = (function(){
    const index = function(ctx) {
        this.partial('./views/home/index.hbs');
    };

    return {
        index
    };
}());