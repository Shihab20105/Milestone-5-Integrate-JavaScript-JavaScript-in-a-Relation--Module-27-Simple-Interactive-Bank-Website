/*                          27-7 Update deposit and balance and handle string add */

/*
Step-1: Add event listener to the deposit button

Step-2: Get the deposit amount from the deposit input field
    2-1: For input field use '.value' to the value inside the input field

Step-3: Get the current  deposit total amount
    3-1: For non-input(element other than input, textarea) use 'innerText' to get the text / Use 'innerText' to get the text content of elements, except for <input> and <textarea>.

Step-4: Add numbers to set the total deposit
    4-1: Set the deposit total

Step-5: Get balance current total

Step-6: Calculate current total balance
    6-1: Set the balance total

Step-7: Clear the deposit field
*/


//console.log('deposit.js');
//Step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('Deposit Button Clicked');

    //Step-2
    const depositField = document.getElementById('deposit-field');
    //const depositAmount = depositField.value;
    //const newDepositAmount = depositField.value;
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //console.log(depositAmount);
    //console.log(typeof newDepositAmount)
    
    //Step-3
    const depositTotalElement = document.getElementById('deposit-total'); 
    //const depositTotal = depositTotalElement.innerText;
    //const previousDepositTotal = depositTotalElement.innerText;
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //console.log(depositTotal);
    //console.log(typeof previousDepositTotal);

    //Step-4
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //depositTotalElement.innerText = depositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //Step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Step-6
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount; 
    balanceTotalElement.innerText = currentBalanceTotal;

    //Step-7
    depositField.value = '';
    
})