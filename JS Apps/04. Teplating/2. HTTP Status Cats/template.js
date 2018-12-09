$(() => {
    renderCatTemplate();

    function renderCatTemplate() {

        // TODO: Render cat template and attach events

        // with HBS file...
        // let source = $.get('catsTemplate.hbs').then(renderResult);

        // With build in HTML file template
        let source = $('#cat-template').html();
        renderResult(source);
        
    }

    function renderResult(source) {
        let template = Handlebars.compile(source);

        let catsData = template(cats);
        $('#allCats').html(catsData);

        $('.card').find('.btn').each(function () {
            $(this).on('click', function(evt) {

                let targetElem = $(evt.target);
                if(targetElem.next().is(':visible')){
                    targetElem.text('Show status code');
                    targetElem.next().hide();
                } else {
                    targetElem.text('Hide status code');
                    targetElem.next().show();
                }
            });
        })
    }

})
