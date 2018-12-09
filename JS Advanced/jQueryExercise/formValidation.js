function validate() {
	// TODO
	function checkUsername() {
		let $username = $('#username');
		const usernameRegex = /^[0-9A-Za-z]{3,20}$/gm;
		let result = usernameRegex.exec($username.val());
		if(result != null) {
			// $username.removeAttr('border-color');
			$username.css('border','none');
			return true;
		} else {
			// $username.removeAttr('border');
			$username.css('border-color','red');
			return false;
		}
	}
	function checkEmail () {
		let $email = $('#email');
		const emailRegex = /^[\w]+@[\w]*\.[\w]*.*$/gmi;
		let result = emailRegex.exec($email.val());
		if(result != null) {
			// $username.removeAttr('border-color');
			$email.css('border','none');
			return true;
		} else {
			// $username.removeAttr('border');
			$email.css('border-color','red');
			return false;
		}
	}
	function checkPassword(selector) {
		let $password = $(selector);
		const passwordRegex = /^[\w]{5,15}$/gm;
		let result = passwordRegex.exec($password.val());
		if(result != null) {
			// $username.removeAttr('border-color');
			$password.css('border-color','').css('border','none');
			return true;
		} else {
			// $username.removeAttr('border');
			$password.css('border','').css('border-color','red');
			return false;
		}
	}

	function checkPassMatchConfPass(){
		let $passField = $('#password');
		let $confPassField = $('#confirm-password');
		if( checkPassword('#password') && checkPassword('#confirm-password') ) {
			if ($passField.val() === $confPassField.val()) {
				$passField.css('border','none');
				$confPassField.css('border','none');
				return true;
			} 
		}

		$passField.css('border','');
		$confPassField.css('border','');
		$passField.css('border-color','red');
		$confPassField.css('border-color','red');
		return false;

	}

	function checkCompanyNumber() {
		let $companyNumber = $('#companyNumber');
		let companyNum = +$companyNumber.val();
		if(1000 <= companyNum && companyNum <= 9999) {
			$companyNumber.css('border','');
			return true;
		} else {
			$companyNumber.css('border-color','red');
			return false;
		}
	}

	$('#company').on('change', function (ev) {
		let checkBox = $(ev.target); 
		let $companyInfo = $('#companyInfo');
		if (checkBox.is(':checked')) {
			$companyInfo.css('display','block');
		} else {
			$companyInfo.css('display','none');
		}
	});

	$('#submit').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		let usernameCheck = checkUsername();


		let pass = checkPassword('#password');
		let confPass = checkPassword('#confirm-password');
		let passCheck = checkPassMatchConfPass();
		// if(pass && confPass) {

		// }
		let emailCheck = checkEmail();
		let checkBox = $('#company').is(':checked')
		let companyNumber;
		let $validDiv = $('#valid');
		if(checkBox) {
			companyNumber = checkCompanyNumber();
			if(usernameCheck && passCheck && emailCheck && companyNumber) {
				$validDiv.css('display','');
			} else {
				$validDiv.css('display','none');
			}
		} else {
			if(usernameCheck && passCheck && emailCheck) {
				$validDiv.css('display','');
			} else {
				$validDiv.css('display','none');
			}
		}
	});

}
