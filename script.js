DivID = 0
InputID = 0



elementArray = []; // every single element will have a unique randomly generated ID used as the div ID and 

function generateDivID() {
    DivID += 1;
    return "div" + DivID.toString();
}
function generateInputID() {
    InputID += 1;
    return "input" + InputID.toString();
}

function addInput() {
    form = document.getElementById("form");
    thisDiv = document.createElement('div');
    thisDiv.id = generateDivID();
    form.append(thisDiv);
    inputElement = document.createElement('input');
    inputElement.id = generateInputID();
    inputElement.type = "text";
    thisDiv.append(inputElement);
    thisDiv.addEventListener('input', storeInput);
    elementArray.push(thisDiv.id);
}

function deleteInput(e) {
    form = document.getElementById("form");
    if (e.parentElement && e.parentElement.parentNode === form) {
        elementArray.splice(elementArray.findIndex(element => element === e.parentElement.id), 1);
        form.removeChild(e.parentElement);
    }
}

addInput()

function storeInput(e) {
    console.log(!elementArray.findIndex(element => element === e.target.parentElement.id) + 1)
    if (e.target.value !== "" && elementArray.findIndex(element => element === e.target.parentElement.id) === elementArray.length - 1) {
        addInput();
    } else if (e.target.value === "" && elementArray.findIndex(element => element === e.target.parentElement.id) !== elementArray.length - 1) {
        deleteInput(e.target);
    }
}

function completeForm() {
    var numberInputValue = document.getElementById("numberInput").value;
    console.log(numberInputValue);
    for (i = 0; i < elementArray.length; i++) {
        console.log(document.getElementById(elementArray[i]).children[0].value);
    }
}

