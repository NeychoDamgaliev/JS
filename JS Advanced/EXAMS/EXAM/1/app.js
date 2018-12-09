function acceptance() {

		let companyInput = $( "[name='shippingCompany']" );
		let productInput = $( "[name='productName']" );
		let quantityInput = $( "[name='productQuantity']" );
		let scrapeInput = $( "[name='productScrape']" );

		if (companyInput.val() != "" && productInput.val() != "" &&
		quantityInput.val() != "" && scrapeInput.val() != "") {
			let quantity = +quantityInput.val()
			let scrape = scrapeInput.val();
			let good = quantity-scrape;
			if(quantity != NaN && scrape != NaN && good > 0	 ) {
				let div = $('<div>');
				let p = $(`<p>[${companyInput.val()}] ${productInput.val()} - ${good} pieces</p>`);
				let button = $(`<button type="button">Out of stock</button>`);
				div.append(p);
				div.append(button);
				$('#warehouse').append(div);

				button.on('click', function() {
					
					$(this).parent().remove();
				});
				companyInput.val('');
				productInput.val('');
				quantityInput.val('');
				scrapeInput.val('');
			}
		}

}