// function addSticker() {
//     //<li class="button">x</a>
//     // <h2>TODO</h2>
//     // <hr>
//     // <p>To watch the finale tonight</p>
//     let title = $(".title");
//     let content = $(".content");

//     if(title.val() && content.val()) {
//         let li = $('<li>').addClass("note-content");
//         let a = $('<a>');
//         a.addClass("button");
//         a.text("x");
//         a.on("click", function() {
//             li.remove();
//         })
//         let h2 = $('<h2>');
//         h2.text(`${title.val()}`);
//         let p = $('<p>').text(content.val());

//         li.append(a).append(h2).append($('<hr>')).append(p);

//         $("#sticker-list").append(li);
//         title.val('');
//         content.val('');
//     }

// }


function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    // Write your code here

    $('.custom-select').on('input', function () {
        let input = $('.custom-select');
        if(input.val() != "" && input.val() != " ") {

            $('#submit').prop('disabled', false);
        } else {
            $('#submit').prop('disabled', true);
        }
    });

    let inventoryItemsCount = 0;
    let sum = 0;

    let addItems = function () {

        let prod = $('.custom-select');
        let price = $('#price');
        let quantity = $('#quantity');
        let capacity = $('#capacity');

        inventoryItemsCount += +quantity.val();
        sum += +price.val();

        let inventoryContainer = $('.display');
        let li = $(`<li>Product: ${prod.val()} Price: ${price.val()} Quantity: ${quantity.val()}</li>`);

        inventoryContainer.append(li);

        if(inventoryItemsCount < 150) {
        
            capacity.val(inventoryItemsCount);

            prod.val('');
            price.val(1);
            quantity.val(1);
            
            $(this).prop('disabled',true);
        } else if(inventoryItemsCount === 150) {

            capacity.val("full");
            capacity.addClass('fullCapacity');
            prod.prop('disabled',true);
            price.prop('disabled',true);
            quantity.prop('disabled',true);
            $(this).prop('disabled',true);

        }

        $('#sum').val(sum);

    }

    $('#submit').on('click',addItems);

    
}
