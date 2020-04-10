const express = require('express');
const app = express();
app.use(express.static(__dirname+'/src'));


app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/index.html');
});

app.get('/design', (req,res)=>{
  res.sendFile(__dirname+'/public/design.html');
});




app.listen(8080);