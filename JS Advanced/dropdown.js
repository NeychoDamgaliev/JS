function addItem() {

    let itemText = document.getElementById("newItemText").value;
    let itemValue = document.getElementById("newItemValue").value;

    let dropDown = document.getElementById("menu");
    let opt = document.createElement("option");
    opt.value = itemValue;
    opt.textContent = itemText;

    dropDown.appendChild(opt);
    
    document.getElementById("newItemText").value = '';
    document.getElementById("newItemValue").value = '';
}
