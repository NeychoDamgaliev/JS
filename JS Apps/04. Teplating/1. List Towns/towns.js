function attachEvents() {
    // console.log("Stignah bash tuka!");
    $('#btnLoadTowns').click(loadTownsLi);

    function loadTownsLi() {
        let towns = $('#towns').val()
            .split(', ')
            .reduce((acc, cur) => {

                acc.towns.push({ 'town': cur,
            'name': 'Name'+cur});
                return acc;

            }, { "towns": [] })
towns['population'] = 1000;
        renderTowns(towns);
    }

    async function renderTowns(townsData) {
        debugger;
        ////with separate HBS file
        // let source = await $.get('template.hbs')

        // with build in template
        let source = $('#towns-template').html();

        let template = Handlebars.compile(source);

        $("#root").html(template(townsData));

    }
}