require('dotenv').config()

const express = require('express'); 
const app = express();
const mongoose = require("mongoose");
// Global configuration


const port = 3000; 
const  Pokemon = require('./models/pokemon.js')

//const allPokemon = require('./models/pokemon.js');


app.use((req, res, next) => {
  console.log('I run for all routes')
  next()
})

app.use(express.urlencoded({extended:false}))

app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());
  mongoose.set('strictQuery', true);


  // Setting up Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', ()=> {
  console.log('connected to mongo')
})
mongoose.set('strictQuery', true)
  

app.get('/', function(req, res) {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
  });
   app.get('/pokemon', (req, res)=> {
    Pokemon.find({},(error,Pokemon)=>{

    res.render('Index',{pokemon:Pokemon});
  });
});

  

app.get('/pokemon/new', (req,res) =>{
    res.render('New')
})

app.post('/pokemon', (req,res) => {
  //console.log(req.body)
        Pokemon.create(req.body, (error, createdPokemon) => {
        //  console.log(createdPokemon )
       res.redirect('/pokemon')
    })
    
})
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id,(err,foundPokemon)=>{
        res.render('Show', { //second param must be an object
        pokemon:foundPokemon,}); //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
      });
  })


  app.listen(port,() => {
    console.log('listening on port' , port);
});







// app.use((req, res, next) => {
//   console.log('I run for all routes')
//   next()
// })

// app.use(express.urlencoded({extended:false}))

// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// mongoose.set('strictQuery', true);

// // Setting up Mongoose
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// mongoose.connection.once('open', ()=> {
//   console.log('connected to mongo')
// })
// mongoose.set('strictQuery', true)



// mkdir intro_to_mongoose
// cd intro_to_mongoose
// touch app.js
// npm init -yand go through the prompts
// npm i mongoose dotenv
// touch tweet.js .gitignore .env
// code .