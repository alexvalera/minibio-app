const createAccount = new Vue({
  el: '#create-account',
  data: {
    name: '', 
    email: '', 
    password: ''
  },
  methods: {
    createAccountSubmit: function (e) {
      e.preventDefault(); 
      const vm = this; 
      const name = this.name; 
      const email = this.email; 
      const password = this.password; 
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        console.log('created'); 
        vm.name = ''; 
        vm.email = ''; 
        vm.password = ''; 
      }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      });
    }
  }
})