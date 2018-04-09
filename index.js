const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));


app.get('/', (req,res) => {
  res.sendFile('index.html'); 
  console.log('home page'); 
});
app.get('/login/', (req,res)=> {
  console.log('should log someone in'); 
}); 

app.get('/signup/',(req,res)=> {
  res.sendFile('sign-up.html');
  console.log('should sign someone up');
});

app.get('/view', (req,res)=> {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
}); 

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port); 