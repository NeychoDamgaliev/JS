function attachEventsListeners() {


    document.getElementById('convert').addEventListener("click", () => {
        let source = +document.getElementById('inputDistance').value;
        let dest = document.getElementById('outputDistance');
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;
    
        let fromFactor = 1;
        let toFactor = 1;
    
        if (inputUnits === 'km') {
            fromFactor = 1000;
        } else if (inputUnits === 'm') {
            
        } else if (inputUnits === 'cm') {
            fromFactor = 0.01;
        } else if (inputUnits === 'mm') {
            fromFactor = 0.001;        
        } else if (inputUnits === 'mi') {
            fromFactor =  1609.34;
        } else if (inputUnits === 'yrd') {
            fromFactor = 0.9144;
        } else if (inputUnits === 'ft') {
            fromFactor = 0.3048;
        } else if (inputUnits === 'in') {
            fromFactor = 0.0254;
        }

        if (outputUnits === 'km') {
            toFactor = 1/1000;
        } else if (outputUnits === 'm') {
            
        } else if (outputUnits === 'cm') {
            toFactor = 1/0.01;
        } else if (outputUnits === 'mm') {
            toFactor = 1/0.001;        
        } else if (outputUnits === 'mi') {
            toFactor =  1/1609.34;
        } else if (outputUnits === 'yrd') {
            toFactor = 1/0.9144;
        } else if (outputUnits === 'ft') {
            toFactor = 1/0.3048;
        } else if (outputUnits === 'in') {
            toFactor = 1/0.0254;
        }
        dest.value = source * fromFactor * toFactor;
    })
}