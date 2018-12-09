function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    
    let daysVal = document.getElementById('days');
    let hoursVal = document.getElementById('hours');
    let minutesVal = document.getElementById('minutes');
    let secondsVal = document.getElementById('seconds');


    daysBtn.addEventListener("click",()=> {
        let days = +daysVal.value;
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        daysVal.value = days;
        hoursVal.value = hours
        minutesVal.value = minutes;
        secondsVal.value = seconds;
    });
    
    hoursBtn.addEventListener("click",()=> {
        let hours = +hoursVal.value;
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        daysVal.value = days;
        hoursVal.value = hours
        minutesVal.value = minutes;
        secondsVal.value = seconds;
    });

    minutesBtn.addEventListener("click",()=> {
        let minutes = +minutesVal.value;
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;

        daysVal.value = days;
        hoursVal.value = hours
        minutesVal.value = minutes;
        secondsVal.value = seconds;
    });

    secondsBtn.addEventListener("click",()=> {
        let seconds = +secondsVal.value;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        
        daysVal.value = days;
        hoursVal.value = hours
        minutesVal.value = minutes;
        secondsVal.value = seconds;
    });
}