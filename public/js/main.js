const signUpBtn = document.querySelector('.sign-up__cta'); 
const createAccountBtn = document.querySelector('.sign-up__create-account-btn'); 

if (signUpBtn) {
    signUpBtn.addEventListener('click', function() {
        window.location.href = '/sign-up.html'; 
    }); 
}

// if (createAccountBtn) {
//     createAccountBtn.addEventListener('click', function() {
//         firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//         });
//     });
// }