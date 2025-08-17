/*                          27-3 Add event listener and compare email password */

//console.log('Login JS File');

//Step 1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //console.log('Submit Button Clicked ');

    //Step 2: Get the email address inside the email input field
    //Always remember to use '.value' to get the text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    //Step 3: Get password
    //3.a: Set id on the HTML element
    //3.b: Get the element
    //3.c: Get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(email, password);
    //Danger!!: Do not verify email password on the client side
    
    //Step 4: Verify email and password and check whether valid user or not
    if(email === 'shontanbaap@gmail.com' && password === 'secret'){
        console.log('Valid User');
    }
    else{
        console.log('Invalid User');
    }

})