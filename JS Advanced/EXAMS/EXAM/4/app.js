function realEstateAgency () {
	// TODO...

	let regButton = $("#regOffer button");
	regButton.on("click", function () {
		let rentPriceElem = $("#regOffer input[name = 'apartmentRent']");
		let apartTypeElem = $("#regOffer input[name = 'apartmentType']");
		let commisionElem = $("#regOffer input[name = 'agencyCommission']");
		
		let validRent = false;
		let validType = false;
		let validCommision = false;

		if(+rentPriceElem.val() > 0) {
			validRent = true;
		}
		let comVal = +commisionElem.val();
		if(comVal != NaN && comVal >= 0 && comVal <= 100) {
			validCommision = true;
		}
		if(apartTypeElem.val() != "" && apartTypeElem.val().indexOf(':')<0) {
			validType = true;
		}

		if(validType && validRent && validCommision) {
			let div = $('<div>');
			div.addClass("apartment");
			let p1 = $(`<p>Rent: ${rentPriceElem.val()}</p>`);
			let p2 = $(`<p>Type: ${apartTypeElem.val()}</p>`);
			let p3 = $(`<p>Commission: ${commisionElem.val()}</p>`);

			div.append(p1);
			div.append(p2);
			div.append(p3);

			$('#building').append(div);

			// let not = $('<p></p>');
			// not.attr("id","message");
			// $('#notifications').append(not);
			$('#message').text('Your offer was created successfully.');
		} else {
			$('#message').text('Your offer registration went wrong, try again.');	
		}
		rentPriceElem.val('');
		apartTypeElem.val('');
		commisionElem.val('');

	});

	
	let findOfferButton = $("#findOffer button");
	findOfferButton.on('click', function () {
		// alert("ADS");
		let budgetElem = $("#findOffer input[name = 'familyBudget']");
		let appTypeElem = $("#findOffer input[name = 'familyApartmentType']");
		let familyNameElem = $("#findOffer input[name = 'familyName']");
		
		
		let validAppType = appTypeElem.val() != "";
		let validFamName = familyNameElem.val() != "";
		let validBudget = +budgetElem.val() > 0;

		if(validAppType && validFamName && validBudget) {
			let offers = $(".apartment");
			offers.each( function () {
				// if(!$(this).hasClass("style")){
					let offerPrice = +$(this).children().eq(0).text().split(": ")[1];
					let index = $(this).children().eq(1).text().indexOf(":");
					// let offerAppType = $(this).children().eq(1).text().split(": ")[1];
					let offerAppType = $(this).children().eq(1).text().substring(index + 2);
					let offerCommision = +$(this).children().eq(2).text().split(": ")[1];
					
					let moneyNeeded = offerPrice + (offerPrice * offerCommision / 100.0);
					if(moneyNeeded <= +budgetElem.val() && offerAppType === appTypeElem.val()) {
						let agencyText = $('#roof').children().eq(0).text();
						let curAgencyProfit = +agencyText.substring(15,agencyText.length - 3);
						// debugger; 
						$('#roof').children().eq(0).text(`Agency profit: ${curAgencyProfit + (offerPrice * offerCommision / 100.0) * 2} lv.`)
						
						$('#message').text('Enjoy your new home! :))');
						$(this).empty();

						$(this).append($(`<p>${familyNameElem.val()}</p>`));
						$(this).append($(`<p>live here now</p>`));
						let moveOutButton = $('<button>MoveOut</button>');
						$(this).append(moveOutButton);
					
						moveOutButton.on("click", function () {
							let name = $(this).parent().children().eq(0).text();
							$('#message').text(`They had found cockroaches in ${name}\'s apartment`);	
							$(this).parent().remove();
						});


						return false;
					}
					
				// }
				
					$('#message').text('We were unable to find you a home, so sorry :(');
				
			});
		}
		
		budgetElem.val('');
		appTypeElem.val('');
		familyNameElem.val('');

	});
}