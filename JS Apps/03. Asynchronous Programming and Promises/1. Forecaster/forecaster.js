function attachEvents() {


    const host = "https://judgetests.firebaseio.com";

    $('#submit').click(getWeather);

    function getWeather(event) {
        event.stopPropagation();
        event.preventDefault();

        //GET LOCATION FROM INPUT
        let location = $('#location').val();

        // GET VALID LOCATIONS FROM SERVER
        $.get(host + "/locations.json")
            .then(parseData)
            .catch(displayErrors);

        function parseData(data) {

            let code;
            for (let loc of data) {
                if (loc.name === location) {
                    code = loc.code;
                    break;

                }
            }

            Promise.all([
                $.get(`${host}/forecast/today/${code}.json`),
                $.get(`${host}/forecast/upcoming/${code}.json`)
            ]).then(displayForecast)
                .catch(displayErrors);
        };

        function displayForecast([today, upcoming]) {
            console.log(today);
            // console.log(upcoming);
            const symbols = {
                "Sunny": "&#x2600", // ☀
                "Partly sunny": "&#x26C5", // ⛅
                "Overcast": "&#x2601", // ☁
                "Rain": "&#x2614", // ☂
                "Degrees": "&#176"   // °
            }


            let currentContainer = $('#current');
            currentContainer.empty();
            let symbolSpan = $('<span>').addClass("condition symbol").html(symbols[today.forecast.condition]);
            let conditionSpan = $('<span>').addClass('condition')
                .append($('<span>').addClass('forecast-data').html(today.name))
                .append($('<span>').addClass('forecast-data').html(`${today.forecast.low}&#176/${today.forecast.high}&#176`))
                .append($('<span>').addClass('forecast-data').html(today.forecast.condition));
            currentContainer.append(symbolSpan).append(conditionSpan);

            let upcomingContainer = $('#upcoming');
            upcomingContainer.empty();
            for (let day of upcoming.forecast) {
                
                let upcomingSpan = $('<span>').addClass('upcoming')
                    .append($('<span>').addClass('symbol').html(symbols[day.condition]))
                    .append($('<span>').addClass('forecast-data').html(`${day.low}&#176/${day.high}&#176`))
                    .append($('<span>').addClass('forecast-data').html(day.condition));
                upcomingContainer.append(upcomingSpan);
            }

            $('#forecast').show();

        }
        function displayErrors(error) {
            $("#forecast").text("Error").show();
        };
    }
}  