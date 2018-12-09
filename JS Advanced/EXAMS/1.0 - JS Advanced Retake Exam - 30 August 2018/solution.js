// function addDestination () {
//     let inputs = $(".inputData");
//     let city = inputs.first().val();
//     inputs.first().val("");
//     let country = inputs.last().val();
//     inputs.last().val("");
//     if(city && country) {
//         let season = $("#seasons option:selected").text();
//         $(`#summaryBox #${season}`).val(+$(`#${season}`).val() + 1);
//         let row = $(`<tr>
//         <td>${city}, ${country}</td>
//         <td>${season.slice(0,1).toUpperCase() + season.slice(1)}</td>
//         </tr>`);
//         $("#destinationsList").append(row);
//     }
// }


function makeReservation (container) {
    let data = {};
    $('#submit').on('click', function () {
        let fullName = $('#fullName').val();
        let email = $('#email').val();
        let phoneNumber = $('#phoneNumber').val();
        let address = $('#address').val();
        let postalCode = $('#postalCode').val();

        data.fullName = fullName;
        data.email = email;
        data.phoneNumber = phoneNumber;
        data.address = address;
        data.postalCode = postalCode;

        if(fullName != "" && email != "") {
            
            $('#submit').prop('disabled', true);
            $('#edit').prop('disabled', false);
            $('#continue').prop('disabled', false);
            let infoPreview = $('#infoPreview');
            
            infoPreview
            .append($(`<li>Name: ${fullName}</li>`))
            .append($(`<li>E-mail: ${email}</li>`))
            .append($(`<li>Phone: ${phoneNumber}</li>`))
            .append($(`<li>Address: ${address}</li>`))
            .append($(`<li>Postal Code: ${postalCode}</li>`));

            $('#fullName').val("");
            $('#email').val("");
            $('#phoneNumber').val("");
            $('#address').val("");
            $('#postalCode').val("");
        }
    });

    $(`#edit`).on('click', function() {
        
        $('#fullName').val(data.fullName);
        $('#email').val(data.email);
        $('#phoneNumber').val(data.phoneNumber);
        $('#address').val(data.address);
        $('#postalCode').val(data.postalCode);

        $('#submit').prop('disabled', false);
        $('#edit').prop('disabled', true);
        $('#continue').prop('disabled', true);
        $('#infoPreview').empty();
    });

    $(`#continue`).on('click', function () {
        $('#submit').prop('disabled', true);
        $('#edit').prop('disabled', true);
        $('#continue').prop('disabled', true);

        let cont = $(`${container}`);
        cont.append($(`<h2>Payment details</h2>
        <select id="paymentOptions" class="custom-select">
            <option selected disabled hidden>Choose</option>
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
        </select>
        <div id="extraDetails"></div>`));

        $('#paymentOptions').on('change', function() {
            let selected = $("#paymentOptions option:selected");
            
            let extraDetailsContainner = $('#extraDetails');
            extraDetailsContainner.empty();

            if(selected.text() === "Credit Card") {
  
            extraDetailsContainner.append( $(`<div class="inputLabel">Card Number<input></div><br>
            <div class="inputLabel">Expiration Date<input></div><br>
            <div class="inputLabel">Security Numbers<input></div><br>
            <button id="checkOut">Check Out</button>`));
            } else {
                extraDetailsContainner.append($(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>
                <button id="checkOut">Check Out</button>`));
            }
            $(`#checkOut`).on('click', function () {
                $('#wrapper').empty().append($('<h4>Thank you for your reservation!</h4>'))
            }); 
        });

    });
}