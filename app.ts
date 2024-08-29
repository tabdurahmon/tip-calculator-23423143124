const billInput = document.getElementById("bill") as HTMLInputElement;
const peopleInput = document.getElementById("people") as HTMLInputElement;
const customTipInput = document.getElementById(
  "custom-tip"
) as HTMLInputElement;
const tipButtons = document.querySelectorAll(
  ".tip-btn"
) as NodeListOf<HTMLButtonElement>;
const tipAmountDisplay = document.getElementById("tip-amount") as HTMLElement;
const totalAmountDisplay = document.getElementById(
  "total-amount"
) as HTMLElement;
const resetButton = document.getElementById("reset") as HTMLButtonElement;

let billValue = 0;
let peopleValue = 1;
let tipValue = 0;

function calculateTip() {
  if (peopleValue > 0) {
    const tipAmount = (billValue * tipValue) / 100 / peopleValue;
    const totalAmount = (billValue + tipAmount * peopleValue) / peopleValue;
    tipAmountDisplay.innerText = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.innerText = `$${totalAmount.toFixed(2)}`;
  }
}

billInput.addEventListener("input", () => {
  billValue = parseFloat(billInput.value) || 0;
  calculateTip();
});

peopleInput.addEventListener("input", () => {
  peopleValue = parseInt(peopleInput.value) || 1;
  calculateTip();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipValue = parseInt(button.innerText.replace("%", ""));
    customTipInput.value = "";
    calculateTip();
  });
});

customTipInput.addEventListener("input", () => {
  tipValue = parseFloat(customTipInput.value) || 0;
  calculateTip();
});

resetButton.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  tipAmountDisplay.innerText = "$0.00";
  totalAmountDisplay.innerText = "$0.00";
  billValue = 0;
  peopleValue = 1;
  tipValue = 0;
});
