function initializeTable() {
    appendRowToTable("Bulgaria","Sofia");
    appendRowToTable("Germany","Berlin");
    appendRowToTable("Russia","Moscow");
  
  
    $('#createLink').on("click", (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        
        let country =  $('#newCountryText').val();
        let capital =  $('#newCapitalText').val();
        
        if(country != "" && capital != "") {
            appendRowToTable(country,capital);
        }
    });
}

function appendRowToTable ( countryName, capitalName) {
    let table = $('#countriesTable');
    let actions = $('<td>');
    
    actions
        .append($("<a href='#'>[Up]</a>").on("click", moveUpItem))
        .append($("<a href='#'>[Down]</a>").on("click", moveDownItem))
        .append($("<a href='#'>[Delete]</a>").on("click", deleteItem));
        // .append("<a href='#'>[Delete]</a>").on("click", () => {
        //     $(this).remove();
        // });
    table.append($('<tr>')
    .append($("<td>").text(countryName))
    .append($("<td>").text(capitalName))
    .append(actions));
    fixRowsAnchors();
}

function deleteItem() {
        $(this).parent().parent().fadeOut(() => {
            $(this).parent().parent().remove();
            fixRowsAnchors();
        });
}

function moveUpItem (){
    let row = $(this).parent().parent();
    row.fadeOut(() => {
        row.insertBefore(row.prev());
        fixRowsAnchors();
    });
    
    row.fadeIn();
}

function moveDownItem() {
    let row = $(this).parent().parent();
    row.fadeOut(() => {
        row.insertAfter(row.next());
        fixRowsAnchors();
    });
    
    row.fadeIn();
}

function fixRowsAnchors() {
    let $rows  = $('#countriesTable tr').toArray();
    $($rows).find("td a").show();
    $($rows[2]).find("td a:contains('Up')").hide();
    $($rows).last().find("td a:contains('Down')").css("display","none");
    
}