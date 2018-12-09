function timer() {
    let timer;
    $('#stop-timer').on('click', () => {
        clearInterval(timer);
    })
    $('#start-timer').on('click',() =>{
        timer = setInterval(() => {
            let seconds = $('#seconds');
            let minutes = $('#minutes');
            let hours = $('#hours');

            let curSeconds = +seconds.text();
            let curMinutes = +minutes.text();
            let curHours = +hours.text();

            curSeconds +=1;
            if(curSeconds=='60'){
                curSeconds = '00';
                curMinutes += 1;
            }
            if( curMinutes == '60') {
                curMinutes = '00';
                curHours += 1;
            }
            if(curHours == '24') {
                curHours = '00';
            }
            seconds.text(curSeconds.toString().length == 1 ? '0'+ curSeconds : curSeconds);
            minutes.text(curMinutes.toString().length == 1 ? '0'+ curMinutes : curMinutes);
            hours.text(curHours.toString().length == 1 ? '0'+ curHours : curHours);
        },1000)});
}