const notification = function () {
    const info =  function(message) {
        $("#infoBox>span").text(message);
        $("#infoBox").show();
        setTimeout(() => {
            $("#infoBox").fadeOut(1000);            
        }, 2000);
    }; 
    const error =  function(message) {
        $("#errorBox>span").text(message);
        $("#errorBox").show();
        setTimeout(() => {
            $("#errorBox").fadeOut(1000);    
        }, 2000);
    };
    
    return {
        info,
        error
    };
}();