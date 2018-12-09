function search() {
    let textContent = $('#searchText').val();
    if( textContent != "") {
        let containing = $('#towns li:contains('+ textContent + ')');
        containing.css("font-weight", "bold");
        console.log (containing.toArray().length);
        $('#result').text(containing.toArray().length + " matches found.");
        $('#towns li:not(:contains('+ textContent + '))').css("font-weight", "normal");
    } else {
        $('#towns li').css("font-weight", "normal");
        $('#result').text('');
    }
}