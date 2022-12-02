const express = require('express');
const app = express();
const port = 3000; 
const  pokemon = require('./models/pokemon.js')
app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());
 
  app.get('/', function(req, res) {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
  });
   app.get('/pokemon', function(req, res) {
    res.render('Index',{allPokemon:pokemon});
  });
  app.get('/pokemon/:indexOfpokemon', (req, res) => {
      res.render('Show', { //second param must be an object
        pokemon:pokemon[req.params.indexOfpokemon] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
      });
  })
app.listen(port,() => {
    console.log('listening on port' , port);
});

