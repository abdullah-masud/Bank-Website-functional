/* Deposit button event */

document.getElementById('deposit-button').addEventListener('click', function() {
    // Deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText) // num

    const depositTotalField = document.getElementById('deposit-total');

    const previousDepositAmountText = depositTotalField.innerText
    const previousDepositAmount = parseFloat(previousDepositAmountText) // num

    const newDepositTotalField = previousDepositAmount + newDepositAmount

    depositTotalField.innerText = newDepositTotalField

    depositInput.value = '' // clear input field

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
    const withdrawinput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawinput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText); //num

    const withdrawTotalField = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotalField.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText); // num

    const newwWithdrawTotalField = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalField.innerText = newwWithdrawTotalField;

    withdrawinput.value = ''

    // balance

    const balanceTotalField = document.getElementById('balance-total');

    const previousBalanceTotalText = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText); // num

    const newBalannceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalField.innerText = newBalannceTotal

})