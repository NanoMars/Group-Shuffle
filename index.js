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

function testMax() {
    const numberInput = document.getElementById('numberInput');
    if (numberInput.value < 1 && numberInput.value !== "") {
        numberInput.value = 1;
    } else if (numberInput.value > 50) {
        numberInput.value = 50;
    }
}

document.getElementById('numberInput').addEventListener('input', testMax);


function addInput() {
    form = document.getElementById("form");
    thisDiv = document.createElement('div');
    thisDiv.id = generateDivID();
    form.append(thisDiv);
    inputElement = document.createElement('input');
    inputElement.id = generateInputID();
    inputElement.type = "text";
    inputElement.classList.add('text-input');
    inputElement.classList.add('interactive');
    inputElement.placeholder = "Add a name";
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
    testMax()
}

addInput()

function storeInput(e) {
    if (e.target.value !== "" && elementArray.findIndex(element => element === e.target.parentElement.id) === elementArray.length - 1) {
        addInput();
    } else if (e.target.value === "" && elementArray.findIndex(element => element === e.target.parentElement.id) !== elementArray.length - 1) {
        deleteInput(e.target);
    }
}

const groupData = JSON.parse(sessionStorage.getItem('groupData'));

function completeForm() {
    var data = []
    data[0] = []
    
    
    for (i = 0; i < elementArray.length; i++) {
        if (document.getElementById(elementArray[i]).children[0].value !== "") {
            data[0].push(document.getElementById(elementArray[i]).children[0].value);
        }
    }
    data[1] = document.getElementById("numberInput").value;

    if (data[0].length < 1) {
        alert("Please enter at least one name");
        return;
    } else if (data[1] === "") {
        alert("Please enter a number of groups");
        return;
    }

    if (data[0].length < data[1]) {
        data[1] = data[0].length;
    }
    
    
    
    sessionStorage.setItem('groupData', JSON.stringify(data));
    window.location.href = 'display.html'
}

if (groupData) {
    for (let i = 0; i < groupData[0].length; i++) {
        addInput();
        document.getElementById(elementArray[i]).children[0].value = groupData[0][i];
    }
    document.getElementById("numberInput").value = groupData[1];
    if (elementArray.length === 0) {
        addInput();
    }
}

