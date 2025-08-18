/*                          27-8 Money withdraw and reduce balance for withdraw */

/* 
Step-1: Add event handler with the withdraw button

Step-2: Get the withdraw amount from the withdraw input field
    2-1: Also make sure to convert the input into a number by using parseFloat

Step-3: Get previous withdraw total

Step-4: Calculate total withdraw amount
    4-1: Set total withdraw amount

Step-5: Get the previous balance total

Step-6: Calculate new balance total 
    6-1: Set the new balance total



Step-7: Clear the input field
*/

//Step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //console.log('Withdraw button clicked');

    //Step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //console.log(newWithdrawAmount);

    //Step-3 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //console.log(previousWithdrawTotal);

    //Step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //Step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //console.log(previousBalanceTotal);

    //Step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //Step-7
    withdrawField.value = '';


});