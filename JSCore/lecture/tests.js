function roadRadar(input) {
    let currentSpeed = input[0];
    let currentZone = input[1];

    let speedLimit = getLimit(currentZone);
    let infraction = getInfraction(currentSpeed,speedLimit);
    if (infraction){
        console.log(infraction);
    }

    function getLimit(zone) {
        if(zone ==="motorway") {
            return 130;
        } else if (zone === "interstate") {
            return 90;
        } else if (zone === "city") {
            return 50;
        } else if (zone === "residential") {
            return 20;
        }
    }
    function getInfraction(curSpeed, speedLimit) {
        let overspeed = curSpeed - speedLimit;
        if (overspeed <= 0) {
            return false;
        } else if(overspeed <= 20) {
                return "speeding";
        } else if (overspeed <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }


}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);