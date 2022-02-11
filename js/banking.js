function getInpuValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText) // num
    inputField.value = '' // clear input field
    return inputAmount
}

function updateTotalField(totalFieldId, amount) {
    //debugger
    const totalField = document.getElementById(totalFieldId);
    const previousTotalText = totalField.innerText
    const previousTotal = parseFloat(previousTotalText) // num
    const newTotalField = previousTotal + amount
    totalField.innerText = newTotalField
}

/* Deposit button event */
document.getElementById('deposit-button').addEventListener('click', function() {
    // Deposit
    const newDepositAmount = getInpuValue('deposit-input'); // function call

    // update deposit field
    updateTotalField('deposit-total', newDepositAmount) // function call

    // Balance
    const balanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText); // num
    const newBalannceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalField.innerText = newBalannceTotal
})

/* Withdraw button event */
document.getElementById('withdraw-button').addEventListener('click', function() {
    // withdraw
    const newWithdrawAmount = getInpuValue('withdraw-input') // function call

    // update deposit field
    updateTotalField('withdraw-total', newWithdrawAmount) // function call

    // balance
    const balanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText); // num
    const newBalannceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalField.innerText = newBalannceTotal
})