const validation = (function () {
    const registerForm = function () {
        $("#formRegister").on('submit', function (evt) {
            let isValid = true;

            let $userName = $('#username');
            let $password = $('#password');


            $(".registrationValidations").hide();


            if ($userName.val().length < 3) {
                isValid = false;
                let warning = $('<div class="registrationValidations" style="color:red;">Username must be at least 3 symbols</div>');
                warning.insertAfter($userName.parent().parent());
                setTimeout(function () {
                    warning.fadeOut(1000);
                }, 3000);
            }

            if ($password.val().length < 6) {
                isValid = false;
                let warning = $(`<div class="registrationValidations" style="color:red;">Password must be at least 6 symbols</div>`);
                warning.insertAfter($password.parent().parent());
                setTimeout(function () {
                    warning.fadeOut(1000);
                }, 3000);
            }
        
            if (!isValid) {
                evt.preventDefault();
                evt.stopPropagation();
            }
        });
    };


    const loginForm = function () {
        $("#formLogin").on('submit', function (evt) {
            let isValid = true;

            let $userName = $('#username');
            let $password = $('#password');

            $(".loginValidations").hide();


            if ($userName.val().length < 3) {
                isValid = false;
                let warning = $('<div class="loginValidations" style="color:red;">Username must be at least 3 symbols</div>');
                warning.insertAfter($userName.parent().parent());
                setTimeout(function () {
                    warning.fadeOut(1000);
                }, 3000);
            }
            if ($password.val().length < 6) {
                isValid = false;
                let warning = $(`<div class="loginValidations" style="color:red;">Password must be at least 6 symbols</div>`);
                warning.insertAfter($password.parent().parent());
                setTimeout(function () {
                    warning.fadeOut(1000);
                }, 3000);
            }


            if (!isValid) {
                evt.preventDefault();
                evt.stopPropagation();
            }
        });
    };

 

    return {
        registerForm,
        loginForm
    };
})();