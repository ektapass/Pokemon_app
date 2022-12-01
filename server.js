const express = require('express');
const app = express();
const port = 3000; 
const  pokemon = require('./models/pokemon.js')
//module.exports = pokemon;
app.listen(port,() => {
    console.log('listening on port' , port);
});
app.get('/', function(req, res) {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
  });
  
  app.get('/pokemon', function(req, res) {
    res.send(pokemon);
  });
  