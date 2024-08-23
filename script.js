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

addInput()

function storeInput(e) {
    
    
    console.log(e.target.id);
    console.log(elementArray.findIndex(element => element === e.target.id)) // figured out the problem, looking for input1 instead of div1
    console.log(elementArray)
    if (e.target.value === "" && !elementArray[elementArray.findIndex(arr => arr.includes(e.target.id)) + 1]) {
        addInput();
    }

    



    /*
    if (e.target.value !== "") {
        elementArray.push(e.target.id);
    } else if (e.target.value === "" && elementArray[/* self position + 1 ]) {
        // remove this specific element from the array
    }*/
}

input1.addEventListener('input', storeInput);

document.getElementById("asdf").innerHTML = "Hello World!";