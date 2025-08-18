/*                          27-6 Get User deposit and set deposit total value */

/* 
Step-1: Add event listener to the deposit button

Step-2: Get the deposit amount from the deposit input field
    2-1: For input field use '.value' to the value inside the input field

Step-3: Get the current  deposit total amount
    3-1: For non-input(element other than input, textarea) use 'innerText' to get the text / Use 'innerText' to get the text content of elements, except for <input> and <textarea>.
*/

//console.log('deposit.js');
//Step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('Deposit Button Clicked');

    //Step-2
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    //console.log(depositAmount);
    
    //Step-3
    const depositTotalElement = document.getElementById('deposit-total'); 
    const depositTotal = depositTotalElement.innerText;
    //console.log(depositTotal);
    depositTotalElement.innerText = depositAmount;
    
})