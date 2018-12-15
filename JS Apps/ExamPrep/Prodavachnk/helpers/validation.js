const validation = (function () {
    let registerForm = function () { 
        $("#formRegister").on('submit', function (evt) {
            let isValid = true;
            debugger;
            if ($('input[name="username"]').val().length < 5) {
                isValid = false;
                $('<span style="color:red;">Invalid username. Should be at least 5 symbols!!!</span>').insertAfter($('input[name="username"]'));
                
            }
            if ($('input[name="pass"]').val().length === 0) {
                isValid = false;
                $('#passwordValidation').text('Field is requered!');
            }
            if ($('input[name="pass"]').val() !== $('input[name="checkPass"]').val()) {
                isValid = false;
                $('#usernameValidation').text('Password mismatch!!!');
            }
    
            if (!isValid) {
                evt.preventDefault();
                evt.stopPropagation();
            }
        });
    };

    return {
        registerForm
    };
})();