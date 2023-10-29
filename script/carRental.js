"use strict";

window.onload = init;

function init() {
    const buttonCalculate = document.getElementById("estimateBtn");
    buttonCalculate.onclick = buttonCalculateClick;
}
function buttonCalculateClick() {
   
    // Get input Values
    const numberOfDays = Number(document.getElementById('inputNumberOfDays').value);
    const istollTagChecked = document.getElementById('tollRadioBtn').checked;
    const isGPSChecked = document.getElementById('gpsRadioBtn').checked;
    const isRoadsideChecked = document.getElementById('roadRadioBtn').checked;
    const isUnder25 = document.querySelector('input[name="under25"]:checked').value;

    //output elements
    const outputCarRental = document.getElementById('outputCarRental');
    const outputOption = document.getElementById("outputOption");
    const outputSurcharge = document.getElementById("outputSurcharge");
    const outputTotal = document.getElementById ("outputTotal");

    // Calculate CarRental Value;
    const baseCostPerDay = 29.99;
    const outputCarRentalValue = baseCostPerDay * numberOfDays;  

    // Calculate Options Value
    let outputOptionsValue = 0;

    if (istollTagChecked) {
        outputOptionsValue += 3.95;

    } if (isGPSChecked) {
        outputOptionsValue += 2.95;

    } if (isRoadsideChecked ) {
        outputOptionsValue += 2.95;
    }
    
    // Calculate Surcharge Value;

    let surchargeAmount = 0;

    if (isUnder25 === 'yes'){

        let surchargeInPercentage = 30;
        let surchargeAmountInDecimal = (surchargeInPercentage / 100); 
        surchargeAmount = outputCarRentalValue * surchargeAmountInDecimal;
    }

    // Calculate Total Value

    const outputTotalDueValue = outputCarRentalValue + outputOptionsValue + surchargeAmount;

    // Display the results

    outputCarRental.value = outputCarRentalValue.toFixed(2);
    outputOption.value = outputOptionsValue.toFixed(2);
    outputSurcharge.value = surchargeAmount.toFixed(2);
    outputTotal.value = outputTotalDueValue.toFixed(2);
}