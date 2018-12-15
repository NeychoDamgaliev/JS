const validation = (function () {
    const registerForm = function () {
        $("#formRegister").on('submit', function (evt) {
            let isValid = true;

            let $userName = $('input[name="username"]');
            let $pass = $('input[name="pass"]');
            let $checkPass = $('input[name="checkPass"]');

            $(".registrationValidations").hide();


            if ($userName.val().length < 5) {
                isValid = false;
                let warning = $('<div class="registrationValidations" style="color:red;">Invalid Username. It should be at least 5 symbols length!!!</div>');
                warning.insertAfter($userName);
                setTimeout(function () {
                    warning.fadeOut(1000);
                }, 3000);
            }
            if ($pass.val().length === 0) {
                isValid = false;
                let warning = $(`<div class="registrationValidations" style="color:red;">Invalid Password. Can't be empty!!!</div>`);
                warning.insertAfter($pass);
                setTimeout(function () {
                    warning.fadeOut(1000);
                }, 3000);
            }
            if ($checkPass.val().length === 0) {
                isValid = false;
                let warning = $(`<div class="registrationValidations" style="color:red;">Invalid Confirm Password. Can't be empty!!!</div>`);
                warning.insertAfter($checkPass);
                setTimeout(function () {
                    warning.fadeOut(1000);
                }, 3000);
            }
            if ($pass.val() !== $checkPass.val() && $checkPass.val().length !== 0) {
                isValid = false;
                let warning = $(`<div class="registrationValidations"style="color:red;">Confirm Password should equal Password!!!</div>`);
                warning.insertAfter($checkPass);
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

            let $userName = $('input[name="username"]');
            let $pass = $('input[name="pass"]');

            $(".loginValidations").hide();


            if ($userName.val().length < 5) {
                isValid = false;
                let warning = $('<div class="loginValidations" style="color:red;">Invalid Username. It should be at least 5 symbols length!!!</div>');
                warning.insertAfter($userName);
                setTimeout(function () {
                    warning.fadeOut(1000);
                }, 3000);
            }
            if ($pass.val().length === 0) {
                isValid = false;
                let warning = $(`<div class="loginValidations" style="color:red;">Invalid Password. Can't be empty!!!</div>`);
                warning.insertAfter($pass);
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

    const addFlightForm = function () {
        $("#formAddFlight").on('submit', function (evt) {
            let isValid = true;
            $('.addFlightValidations').hide();

            let $destination = $('input[name="destination"]');
            let $origin = $('input[name="origin"]');
            let $departureDate = $('input[name="departureDate"]');
            let $departureTime = $('input[name="departureTime"]');
            let $seats = $('input[name="seats"]');
            let $cost = $('input[name="cost"]');
            let $img = $('input[name="img"]');
            let $public = $('input[name="public"]');

            
            if ($destination.val().length === 0) {
                isValid = false;
                $(`<div class="addFlightValidations" style="color:red;">Destination should be non-empty string!!!</div>`)
                .insertAfter($destination);
            }
            if ($origin.val().length === 0) {
                isValid = false;
                $(`<div class="addFlightValidations" style="color:red;">Origin station should be non-empty string!!!</div>`)
                .insertAfter($origin);
            }
            if ($departureTime.val() === "") {
                isValid = false;
                $(`<div class="addFlightValidations" style="color:red;">Invalid departure time!!!</div>`)
                .insertAfter($departureTime);
            }
            if ($seats.val() <= 0) {
                isValid = false;
                $(`<div class="addFlightValidations" style="color:red;">Number of seats should be positive number!!!</div>`)
                .insertAfter($seats);
            }
            if ($cost.val() <= 0) {
                isValid = false;
                $(`<div class="addFlightValidations" style="color:red;">Cost per seat should be positive number!!!</div>`)
                .insertAfter($cost);
            }

            let warnings =  $('.addFlightValidations');
            setTimeout(function () {
                warnings.fadeOut(1000);
            }, 3000);
            if(!isValid){
                evt.preventDefault();
                evt.stopPropagation();
            }
        });
    };

    return {
        registerForm,
        loginForm,
        addFlightForm
    };
})();