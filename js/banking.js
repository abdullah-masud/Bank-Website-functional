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

function updateBalance(amount, isAdd) {
    const balanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText); // num
    if (isAdd == true) {
        const newBalannceTotal = previousBalanceTotal + amount;
        balanceTotalField.innerText = newBalannceTotal
    } else {
        const newBalannceTotal = previousBalanceTotal - amount;
        balanceTotalField.innerText = newBalannceTotal
    }
}

function getCurrentBalance() {
    const balanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText); // num
    return previousBalanceTotal
}

/* Deposit button event */
document.getElementById('deposit-button').addEventListener('click', function() {
    // Deposit
    const newDepositAmount = getInpuValue('deposit-input'); // function call
    if (newDepositAmount > 0) {
        // update deposit field
        updateTotalField('deposit-total', newDepositAmount) // function call
            // update Balance
        updateBalance(newDepositAmount, true);
    }
})

/* Withdraw button event */
document.getElementById('withdraw-button').addEventListener('click', function() {
    // withdraw
    const newWithdrawAmount = getInpuValue('withdraw-input') // function call
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        // update deposit field
        updateTotalField('withdraw-total', newWithdrawAmount) // function call
            // update balance
        updateBalance(newWithdrawAmount, false)
    }
    if (newWithdrawAmount > currentBalance) {
        console.log("You dont have enoung money")
    }
})