function extractText() {
    let items = $('ul#items li').toArray()
    .map(item => item.textContent)
    .join(', ');

    $('#result').text(items);
}