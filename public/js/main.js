const signUpBtn = document.querySelector('.sign-up__cta'); 

if (signUpBtn) {
    signUpBtn.addEventListener('click', function() {
        window.location.href = '/sign-up.html'; 
    }); 
}