
// get a reference to the total radio element
const totalTwoElement = document.querySelector(".totalTwo");

// get a reference to the sms or call radio buttons
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const callTotalTwoElement = document.querySelector(".callTotalTwo");

//get a reference to the add button
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");

const totalCostRadioElement = document.querySelector(".totalCostRadio");

//create a variable that will keep track of the total bill
var callTotalTwo = 0;
var smsTotalTwo = 0;

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


function textBillTotal() {
    //get the value entered in the billType textfield
    //var billTypeEntered = billTypeTextElement.value.trim();

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    //update the correct total
    if (checkedRadioBtn.value === "call") {
        callTotalTwo += 2.75;
    }
    else if (checkedRadioBtn.value === "sms") {
        smsTotalTwo += 0.75;
    }

    //update the total that is displayed on the screen
    callTotalTwoElement.innerHTML = callTotalTwo.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalTwo.toFixed(2);
    var totalCost = callTotalTwo + smsTotalTwo;
    totalTwoElement.innerHTML = totalCost.toFixed(2);

    totalTwoElement.classList.remove("warning", "danger")

    //color the total that is displayed on the screen.
    if (totalCost >= 30 && totalCost < 50) {
        //adding the danger class will make the text red
        totalCostRadioElement.classList.add("warning");
    } else if (totalCost >= 50) {

        totalCostRadioElement.classList.add("danger");
    }
}

//add an event listener for when the add button is pressed

radioBillAddBtnElement.addEventListener('click', textBillTotal);



