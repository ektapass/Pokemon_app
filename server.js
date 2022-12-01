const express = require('express');
const app = express();
const port = 3000;
app.listen(port,() => {
    console.log('listening on port' , port);
});
app.get('/', function(req, res) {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
  });