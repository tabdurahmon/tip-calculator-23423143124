var billInput = document.getElementById("bill");
var peopleInput = document.getElementById("people");
var customTipInput = document.getElementById("custom-tip");
var tipButtons = document.querySelectorAll(".tip-btn");
var tipAmountDisplay = document.getElementById("tip-amount");
var totalAmountDisplay = document.getElementById("total-amount");
var resetButton = document.getElementById("reset");
var billValue = 0;
var peopleValue = 1;
var tipValue = 0;
function calculateTip() {
    if (peopleValue > 0) {
        var tipAmount = (billValue * tipValue) / 100 / peopleValue;
        var totalAmount = (billValue + tipAmount * peopleValue) / peopleValue;
        tipAmountDisplay.innerText = "$".concat(tipAmount.toFixed(2));
        totalAmountDisplay.innerText = "$".concat(totalAmount.toFixed(2));
    }
}
billInput.addEventListener("input", function () {
    billValue = parseFloat(billInput.value) || 0;
    calculateTip();
});
peopleInput.addEventListener("input", function () {
    peopleValue = parseInt(peopleInput.value) || 1;
    calculateTip();
});
tipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        tipValue = parseInt(button.innerText.replace("%", ""));
        customTipInput.value = "";
        calculateTip();
    });
});
customTipInput.addEventListener("input", function () {
    tipValue = parseFloat(customTipInput.value) || 0;
    calculateTip();
});
resetButton.addEventListener("click", function () {
    billInput.value = "";
    peopleInput.value = "";
    customTipInput.value = "";
    tipAmountDisplay.innerText = "$0.00";
    totalAmountDisplay.innerText = "$0.00";
    billValue = 0;
    peopleValue = 1;
    tipValue = 0;
});
