// get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");

//get a reference to the add button
const addToBillBtnElement = document.querySelector(".addToBillBtn");

//get a reference to the call total 
const callTotalOneElement = document.querySelector(".callTotalOne");

//get a reference to the sms total
const smsTotalOneElement = document.querySelector(".smsTotalOne");

//get a reference to the total
const totalOneElement = document.querySelector(".totalOne");

//get a reference to the total cost 
const totalCostElement = document.querySelector(".totalCost");

//create a variable that will keep track of the total bill

var callTotal = 0;
var smsTotal = 0;

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

//add an event listener for when the add button is pressed
addToBillBtnElement.addEventListener('click', function () {

  //get the value entered in the billType textfield
  var billTypeEntered = billTypeTextElement.value.trim();

  //update the correct total
  if (billTypeEntered === "call") {
    callTotal += 2.75;
  }
  else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
  }

  //update the total that is displayed on the screen
  callTotalOneElement.innerHTML = callTotal.toFixed(2);
  smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
  var totalCost = callTotal + smsTotal;
  totalOneElement.innerHTML = totalCost.toFixed(2);

  totalOneElement.classList.remove("warning", "danger");

  //color the total that is displayed on the screen.
  if (totalCost >= 30 && totalCost < 50) {
    //adding the danger class will make the text red
    totalCostElement.classList.add("warning");
  } else if (totalCost >= 50) {

    totalCostElement.classList.add("danger");
  }
});