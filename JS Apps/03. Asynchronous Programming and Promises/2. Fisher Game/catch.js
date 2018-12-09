function attachEvents() {
    const appKey = 'kid_S1ybYbdC7';
    const kinveyUsername = "guest";
    const kinveyPassword = "guest";
    const appAuth = `Basic ${btoa(kinveyUsername + ":" + kinveyPassword)}`;
    // const authHeaders = {"Authorization":"Basic " + base64Auth};

    // const appAuth = 'Basic Z3Vlc3RGaXNoZXI6cGFzcw==';


    $('#addForm .add').click(addFisher);
    $('#aside .load').click(loadCathes);

    function loadCathes(){
        
        $.ajax({
            method: "GET",
            url: `https://baas.kinvey.com/appdata/${appKey}/biggestCatches`,
            dataType: 'json',
            headers: {
                "Authorization": appAuth,
                'Content-Type': 'application/json'
            },
            // data: data,
            success: (data) => {
                let catches = $('#catches').empty();
                for (let c of data) {
                    createCatch(c);
                }
            }
        });
    }
    function addFisher(event) {
        let angler = $("#addForm .angler").val();
        let weight = +$("#addForm .weight").val();
        let species = $("#addForm .species").val();
        let location = $("#addForm .location").val();
        let bait = $("#addForm .bait").val();
        let captureTime = +$("#addForm .captureTime").val();

        let data = JSON.stringify({
            "angler": angler,
            "weight": weight,
            "species": species,
            "location": location,
            "bait": bait,
            "captureTime": captureTime
        });

        $.ajax({
            method: "POST",
            url: `https://baas.kinvey.com/appdata/${appKey}/biggestCatches`,
            dataType: 'json',
            headers: {
                "Authorization": appAuth,
                'Content-Type': 'application/json'
            },
            data: data,
            success: createCatch
        });
    }
    function createCatch(catchData) {
        
        let catches = $('#catches');
        let div = $(`<div class="catch" data-id="${catchData._id}"></div>`);
        let content = $(`<label>Angler</label>
        <input type="text" class="angler" value="${catchData.angler}"/>
        <label>Weight</label>
        <input type="number" class="weight" value="${catchData.weight}"/>
        <label>Species</label>
        <input type="text" class="species" value="${catchData.species}"/>
        <label>Location</label>
        <input type="text" class="location" value="${catchData.location}"/>
        <label>Bait</label>
        <input type="text" class="bait" value="${catchData.bait}"/>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${catchData.captureTime}"/>`);
        let updateButton = $('<button>').addClass('update').text('Update');
        updateButton.click(updateCatch);
        let deleteButton = $('<button>').addClass('delete').text('Delete');
        deleteButton.click(deleteCatch);

        div.append(content);
        div.append(updateButton);
        div.append(deleteButton);
        catches.append(div);

    }

    function updateCatch(evt) {
        const parent = $(evt.target).parent();
        const id = parent.attr('data-id');
        
        let data = JSON.stringify({
            "angler": parent.find('.angler').val(),
            "weight": +parent.find('.weight').val(),
            "species": parent.find('.species').val(),
            "location": parent.find('.location').val(),
            "bait": parent.find('.bait').val(),
            "captureTime": +parent.find('.captureTime').val()
        });

        $.ajax({
            method: "PUT",
            url: `https://baas.kinvey.com/appdata/${appKey}/biggestCatches/${id}`,
            dataType: 'json',
            headers: {
                "Authorization": appAuth,
                'Content-Type': 'application/json'
            },
            data: data,
            success: () => {
                // alert("You have succesfully updated this catch!");
            }
        });
    }
    function deleteCatch(evt) {
        const parent = $(evt.target).parent();
        const id = parent.attr('data-id');

        $.ajax({
            method: "DELETE",
            url: `https://baas.kinvey.com/appdata/${appKey}/biggestCatches/${id}`,
            dataType: 'json',
            headers: {
                "Authorization": appAuth,
                'Content-Type': 'application/json'
            },
            success: () => {
                // alert("You have succesfully DELETED this catch!");
                parent.remove();
            }
        });
    }
}