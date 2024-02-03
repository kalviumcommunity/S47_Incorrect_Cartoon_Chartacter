require('dotenv').config();


const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

const uri = 'mongodb+srv://ishita_naraniya:ishhMongodb@cluster1.ponxmip.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const database = client.db('ASAP');
    const collection = database.collection('Incorrect Cartoon character');

    app.get('/data', async (req,res)=>{
    const result = await collection.find({}).toArray();
      res.json(result);
    })
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});

app.get('/ping', (req, res) =>{
    res.send('Hello World')
})
app.listen(port, ()=>{
         console.log(`🚀 server running on PORT: ${port}`);
     });
