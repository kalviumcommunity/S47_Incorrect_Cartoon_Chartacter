require('dotenv').config();
var express = require('express')
var app = express()
const port = 5000;
const mongoose = require('mongoose');

const uri = 'mongodb+srv://ishita_naraniya:ishhMongodb@cluster1.ponxmip.mongodb.net/?retryWrites=true&w=majority';
app.get('/', (req, res) => {
    mongoose.connect(uri)
      .then(() => {
        res.json({ connection: 'Connected' });
      })
      .catch((error) => {
        console.error(error);
        res.json({ connection: 'Not Connected' });
      });
  });
  
app.get('/ping', (req, res) =>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`🚀 server running on PORT: ${port}`);
});