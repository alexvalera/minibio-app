const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
/*Firebase set up*/
const admin = require('firebase-admin');
const serviceAccount = require('./minibio-dccb1-firebase-adminsdk-coe76-e6045e88e8.json');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://minibio-dccb1.firebaseio.com'
});
app.get('/', (req,res) => {
  res.sendFile('index.html'); 
  console.log('home page'); 
});
app.get('/login/callback', (req,res)=> {
  console.log('should log someone in'); 
}); 

app.get('/view', (req,res)=> {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
}); 

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port); 