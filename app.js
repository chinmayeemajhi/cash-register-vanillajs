var billInput = document.querySelector("#txt-input1");
var cashInput = document.querySelector("#txt-input2");
var calculateButton = document.querySelector("#calculate");
var clearButton = document.querySelector("#clear");
var currencySet = [1, 5, 10, 20, 100, 500, 2000];
var node = document.querySelector("#invisible-div");


billInput.addEventListener("change", displaySecondInput);
calculateButton.addEventListener("click", calculateReturn);
clearButton.addEventListener("click", clearScreen);

function displaySecondInput() {
 
    node.style.visibility = "visible";
}

function countOfNotes(numSmall, numBig) {
    var count = 0;
    while (numSmall <= numBig) {
        numBig = numBig - numSmall;
        count++;
    }
    //console.log(count + "\n");
    return count;
}

function calculateReturn() {

    var cashToReturn = cashInput.value - billInput.value;
    console.log("you will get : ₹" + cashToReturn + '\n');
    var count = 0;

    const output = document.createElement('h2');
    output.id = 'returnOutput';
    output.innerHTML = 'Cash Return: ₹' + cashToReturn;
    document.body.appendChild(output);

    const table = document.createElement("TABLE");
    var tableHead = table.createTHead();
    var tableBody = table.createTBody();
    
    
    //console.log("you need to return "+cashToReturn );
    for (i = currencySet.length - 1; i >= 0; i--) {
        count = 0;
        console.log(currencySet[i] + '\n');
        if (currencySet[i] <= cashToReturn) {
            var count = countOfNotes(currencySet[i], cashToReturn);
        }
        cashToReturn = cashToReturn - count * currencySet[i];
        if (count > 0) {
            
            console.log("no of ₹" + currencySet[i] + " notes = " + count);
            
            var row = tableBody.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = "₹" + currencySet[i];
            cell2.innerHTML  = "  ×  ";
            cell3.innerHTML  = count;

        }

        if (cashToReturn <= 0) {
            break;
        }
    }
    console.log(table);
    document.body.appendChild(table);
}

function clearScreen() {
    // document.querySelector("input").value = null;
    // node.style.visibility = "hidden";
    // document.querySelector("#returnOutput").remove();
    // document.querySelector("table").remove();
    // console.log("here2");
    window.location.reload();
}