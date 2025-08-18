/*                          27-4 Navigate to another page, Deposit, withdraw, Balance grid */

/* 
Step-1: Add click event handler with the submit button

Step-2: Get the email address inside the email input field
    2-1: Always remember to use '.value' to get the text from an input field

Step-3: Get password
    3.a: Set id on the HTML element
    3.b: Get the element
    3.c: Get the value from the element

Step-4: Verify email and password and check whether valid user or not
Danger!!: Do not verify email password on the client side
*/


//console.log('Login JS File');

//Step-1
document.getElementById('btn-submit').addEventListener('click', function(){
    //console.log('Submit Button Clicked ');

    //Step-2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    //Step-3
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(email, password);
    
    //Step-4
    if(email === 'shontanbaap@gmail.com' && password === 'secret'){
        //console.log('Valid User');
        window.location.href = 'bank.html'
    }
    else{
        //console.log('Invalid User');
        alert('I removed you from the task!! because you forgot the password');
    }

})