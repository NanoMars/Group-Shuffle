const input1 = document.getElementById("input1");


function storeInput(e) {
    const elementArray = []; // every single element will have a unique randomly generated ID used as the div ID
    
    const value1 = input1
    
    inputArray.push(value1);
    
    console.log(e.target.id);

    if (e.target.value !== "") {
        elementArray.push(e.target.id);
    } else if (e.target.value === "" && elementArray[/* self position + 1 */]) {
        // remove this specific element from the array
    }


}

input1.addEventListener('input', storeInput);

document.getElementById("asdf").innerHTML = "Hello World!";