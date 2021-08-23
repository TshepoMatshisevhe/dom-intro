// get a reference to the sms or call radio buttons
  
const callCostSettingElement = document.querySelector(".callCostSetting");
const smsCostSettingElement = document.querySelector(".smsCostSetting");
// get refences to all the settings fields
const callTotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
const totalSettingsElement = document.querySelector(".totalSettings");
const totalCostSettingsElement = document.querySelector(".totalCostSettings");
const warningLevelSettingElement = document.querySelector(".warningLevelSetting");
const criticalLevelElement = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
const addButtonSettings = document.querySelector(".addButttonSetting")
//get a reference to the 'Update settings' button
const updateButtonSettings = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCostSetting = 2.75;
var smsCostSetting = 0.75;
var warningLevelSetting = 20;
var criticalLevel = 30;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function updateSettings() {

    if (callCostSettingElement.value != "") {
        callCostSetting = Number(callCostSettingElement.value);
    } 
    if (smsCostSettingElement.value != "") {
        smsCostSetting = Number(smsCostSettingElement.value);
    }
    if (warningLevelSettingElement.value != "") {
        warningLevelSetting = Number(warningLevelSettingElement.value);
    }
    if (criticalLevelElement.value != "") {
        criticalLevel = Number(criticalLevelElement.value);
    }

}

function settingsBillTotal() {
   /* var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");*/
   var checkedRadioBtn = document.querySelector(".billItemTypeWithSettings:checked");

    if (checkedRadioBtn.value === "call") {
        callsTotal += callCostSetting;
    } else if (checkedRadioBtn.value === "sms") {
        smsTotal += smsCostSetting;
    }

    callTotalSettingsElement.innerHTML = callsTotal.toFixed(2);
    smsTotalSettingsElement.innerHTML = smsTotal.toFixed(2);
    var costTotal = callsTotal + smsTotal;
    totalSettingsElement.innerHTML = costTotal.toFixed(2);


    totalSettingsElement.classList.remove("warning", "danger");

    if (costTotal >= warningLevelSetting && costTotal < criticalLevel) {
        totalCostSettingsElement.classList.add("warning");
    }
    else if (costTotal >= criticalLevel) {
        totalCostSettingsElement.classList.add("danger");
    }
}

updateButtonSettings.addEventListener('click', updateSettings);
addButtonSettings.addEventListener('click', settingsBillTotal);
