//get reference to a total cost string
const totalCostStringElement = document.querySelector(".totalCostString");
//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement =  document.querySelector(".billString");

//a variable for the total phone bill
var billTotal = 0;

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
/*calculateBtnElement.addEventListener('click', function (elem){
    //get the string entered in the textArea
    var billString = billStringElement.value.split(",");
    billTotal = 0;
    //split the string
    var billItems = billString.split(",");
    
    //loop pver all the bill items
    for(var i=0; i< billItems.length; i++){
        var billItem = elem.trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }

    }
    //round to 2 decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;


}); */

//link the function to a click event on the calculate button

function totalPhoneBill(usage) {
    var arrUsage = usage.trim().split(/,\s*/);
    var callUsage = [];
    var smsUsage = [];

    for (var i = 0; i < arrUsage.length; i++) {
        if (arrUsage[i].startsWith('c')) {
            callUsage.push(arrUsage[i]);
        } else if (arrUsage[i].startsWith('s')) {
            smsUsage.push(arrUsage[i]);
        };
    };

    var callCost = callUsage.length * 2.75;
    var smsCost = smsUsage.length * 0.75;
    var totalCost = callCost + smsCost;
    var billAmt = totalCost.toFixed(2).toString();

    return billAmt;
}

function calculateBtnClicked() {
    var billString = billStringElement.value;
    var billTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = billTotal;

    totalCostStringElement.classList.remove("warning", "danger");

    if (billTotal >= 20 && billTotal < 30) {
        totalCost_StringElement.classList.add("warning");
    }
    else if (billTotal >= 30) {
        totalCostStringElement.classList.add("danger");
    }
}

calculateBtnElement.addEventListener('click', calculateBtnClicked)
